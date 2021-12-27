import { ContentState, convertToRaw, RawDraftContentBlock } from "draft-js";

const texMap: any = {
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
                tex += sourceCode;
              }

              //  normal case
              if (index > 0) {
                // the gap between two styled text
                const gap =
                  rawInlineStyleRanges[index - 1].offset +
                  rawInlineStyleRanges[index - 1].length;

                if (offset > gap) {
                  const sourceCode = text.substring(gap, offset);
                  tex += sourceCode;
                }
              }

              const content = text.substring(offset, offset + length);
              const sourceCode = `${texMap[style]}{${content}}`;

              tex += sourceCode;

              // edge case 2: the last unstyled text
              if (
                index === inlineStyleRanges.length - 1 &&
                offset + length !== inlineStyleRanges.length - 1
              ) {
                const sourceCode = text.substring(offset + length);

                tex += sourceCode;
              }
            }
          );
        } else if (entityRanges.length) {
          // TODO
        } else {
          tex += text;
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
            }
          } else if (blocks[index - 1].depth < block.depth) {
            const prev = blocks[index - 1].depth;
            let current = block.depth;
            while (prev < current) {
              tex += beginning;
              current--;
            }
          }
        } else if (blocks[index - 1].type === type) {
          if (blocks[index - 1].depth < block.depth) {
            const prev = blocks[index - 1].depth;
            let current = block.depth;
            while (prev < current) {
              tex += beginning;
              current--;
            }
          }
        }

        // eslint-disable-next-line no-case-declarations
        const sourceCode = `${texMap[type]} ${text}\n`;

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
              tex += ending;
              curr--;
            }
          } else if (blocks[index + 1].depth < block.depth) {
            const next = blocks[index + 1].depth;
            let current = block.depth;
            while (next < current) {
              tex += ending;
              current--;
            }
          } else {
            tex += ending;
          }
        } else if (blocks[index + 1].type === type) {
          if (blocks[index + 1].depth < block.depth) {
            const next = blocks[index + 1].depth;
            let current = block.depth;
            while (next < current) {
              tex += ending;
              current--;
            }
          }
        }
        break;
      default:
        tex += `${texMap[type]}{${text}}`;
    }

    allTeX += tex;
    allTeX += "\n";
  });

  return allTeX;
};
