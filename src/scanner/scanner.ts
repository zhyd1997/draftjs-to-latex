import {
  ContentState,
  convertToRaw,
  DraftBlockType,
  DraftInlineStyleType,
  RawDraftContentBlock,
} from "draft-js";

type TeXToken =
  | "\\section"
  | "\\subsection"
  | "\\subsubsection"
  | "\\item"
  | "\\textbf"
  | "\\textit"
  | "\\underline"
  | "\\texttt";

type Token = Record<DraftBlockType | DraftInlineStyleType, TeXToken>;

const texMap: Token = {
  "header-one": "\\section",
  "header-two": "\\subsection",
  "header-three": "\\subsubsection",
  "ordered-list-item": "\\item",
  "unordered-list-item": "\\item",
  BOLD: "\\textbf",
  ITALIC: "\\textit",
  UNDERLINE: "\\underline",
  CODE: "\\texttt",
};

/**
 * @see https://tex.stackexchange.com/a/34586
 *
 * symbols: & % $ # _ { } \ ^ ~
 *
 * @param text string
 * @returns string
 */
const escapeText = (text: string): string => {
  const textEscaped = text
    .split("")
    .map((char) => {
      switch (char) {
        case "&":
          return "\\&";

        case "%":
          return "\\%";

        case "$":
          return "\\$";

        case "#":
          return "\\#";

        case "_":
          return "\\_";

        case "{":
          return "\\{";

        case "}":
          return "\\}";

        case "\\":
          return "\\textbackslash";

        case "^":
          return "\\textasciicircum";

        case "~":
          return "\\textasciitilde";

        default:
          return char;
      }
    })
    .join("");

  return textEscaped;
};

/**
 * Scanner for the content of all blocks.
 *
 * @param contentState ContentState
 * @returns string
 */
export const scan = (contentState: ContentState) => {
  let allTeX = "";
  const editorContentRaw = convertToRaw(contentState);

  // console.log(editorContentRaw);

  const { blocks, entityMap } = editorContentRaw;
  // count the number of blocks that are greater than the current block.
  let count = 0;
  // use stack to handle beginning and ending pairs.
  const endingsStack: string[] = [];

  blocks.forEach((block: RawDraftContentBlock, index: number) => {
    const { type, text, inlineStyleRanges, entityRanges } = block;
    let tex = "";

    switch (type) {
      // inline style
      case "unstyled":
        if (inlineStyleRanges.length) {
          inlineStyleRanges.forEach(
            (inlineStyleRange, index, rawInlineStyleRanges) => {
              const { offset, length, style } = inlineStyleRange;

              // edge case 1: the first unstyled text
              if (index === 0 && offset !== 0) {
                const sourceCode = text.substring(
                  0,
                  inlineStyleRanges[0].offset
                );
                tex += escapeText(sourceCode);
              }

              //  normal case
              if (index > 0) {
                // the gap between two styled text
                const gap =
                  rawInlineStyleRanges[index - 1].offset +
                  rawInlineStyleRanges[index - 1].length;

                if (offset > gap) {
                  const sourceCode = text.substring(gap, offset);
                  tex += escapeText(sourceCode);
                }
              }

              const content = escapeText(
                text.substring(offset, offset + length)
              );
              const sourceCode = `${texMap[style]}{${content}}`;

              tex += sourceCode;

              // edge case 2: the last unstyled text
              if (
                index === inlineStyleRanges.length - 1 &&
                offset + length !== inlineStyleRanges.length - 1
              ) {
                const sourceCode = text.substring(offset + length);

                tex += escapeText(sourceCode);
              }
            }
          );
        } else if (entityRanges.length) {
          // TODO
        } else {
          tex += escapeText(text);
        }
        break;
      case "atomic":
        entityRanges.forEach((entityRange) => {
          const { key } = entityRange;
          if (entityMap[key].type === "MATH") {
            const { content } = entityMap[key].data;

            const beginning = "\\begin{equation}";
            const ending = "\\end{equation}";

            const sourceCode = `${beginning}\n${content}\n${ending}`;

            tex += sourceCode;
          } else {
            // TODO
          }
        });
        break;
      case "code-block":
        // TODO
        break;
      case "ordered-list-item":
      case "unordered-list-item":
        // TODO: Abstract this logic

        // eslint-disable-next-line no-case-declarations
        const beginning =
          type === "ordered-list-item"
            ? "\\begin{enumerate}\n"
            : "\\begin{itemize}\n";

        // eslint-disable-next-line no-case-declarations
        const ending =
          type === "ordered-list-item"
            ? "\\end{enumerate}\n"
            : "\\end{itemize}\n";

        if (!blocks[index - 1]) {
          let curr = block.depth + 1;
          while (curr) {
            tex += beginning;
            curr--;
            endingsStack.push(ending);
          }
        } else if (blocks[index - 1].type !== type) {
          if (
            !["ordered-list-item", "unordered-list-item"].includes(
              blocks[index - 1].type
            )
          ) {
            let curr = block.depth + 1;
            while (curr) {
              tex += beginning;
              curr--;
              endingsStack.push(ending);
            }
          } else if (blocks[index - 1].depth < block.depth) {
            const prev = blocks[index - 1].depth;
            let current = block.depth + 1;
            while (prev < current) {
              tex += beginning;
              current--;
              endingsStack.push(ending);
            }
          } else if (blocks[index - 1].depth > block.depth) {
            const prev = blocks[index - 1].depth;
            let current = block.depth - 1;
            while (prev > current) {
              tex += beginning;
              current++;
              endingsStack.push(ending);
            }
          }
        } else if (blocks[index - 1].type === type) {
          if (blocks[index - 1].depth < block.depth) {
            const prev = blocks[index - 1].depth;
            let current = block.depth;
            while (prev < current) {
              tex += beginning;
              current--;
              endingsStack.push(ending);
            }
          }
        }

        // eslint-disable-next-line no-case-declarations
        const sourceCode = `${texMap[type]} ${escapeText(text)}\n`;

        tex += sourceCode;

        if (!blocks[index + 1]) {
          let curr = block.depth + 1;
          while (curr) {
            tex += ending;
            curr--;
          }
        } else if (blocks[index + 1].type !== type) {
          if (
            !["ordered-list-item", "unordered-list-item"].includes(
              blocks[index + 1].type
            )
          ) {
            let curr = block.depth + 1;
            while (curr) {
              tex += endingsStack.pop();
              curr--;
            }

            // decrement greater numbers.
            while (count) {
              tex += endingsStack.pop();
              count--;
            }
          } else if (blocks[index + 1].depth < block.depth) {
            const next = blocks[index + 1].depth;
            let current = block.depth + 1;
            while (next < current) {
              tex += endingsStack.pop();
              current--;
            }
          } else if (blocks[index + 1].depth > block.depth) {
            // increment greater numbers.
            count++;
          }
        } else if (blocks[index + 1].type === type) {
          if (blocks[index + 1].depth < block.depth) {
            const next = blocks[index + 1].depth;
            let current = block.depth;
            while (next < current) {
              tex += endingsStack.pop();
              current--;
            }
          }
        }
        break;
      default:
        tex += `${texMap[type]}{${escapeText(text)}}`;
    }

    allTeX += tex;
    allTeX += "\n";
  });

  return allTeX;
};
