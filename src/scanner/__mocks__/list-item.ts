/**
 * TODO: 12 cases.
 */

/**
 * Case 1: No previous block, continous depth, same type and has closed item.
 *
 * @example
 * - hello
 *   - world
 * - test
 */
export const noPreviousBlock = {
  contentState: {
    blocks: [
      {
        key: "foo",
        text: "hello",
        type: "unordered-list-item",
        depth: 0,
        inlineStyleRanges: [],
        entityRanges: [],
        data: {},
      },
      {
        key: "b0vgn",
        text: "world",
        type: "unordered-list-item",
        depth: 1,
        inlineStyleRanges: [],
        entityRanges: [],
        data: {},
      },
      {
        key: "d7b31",
        text: "test",
        type: "unordered-list-item",
        depth: 0,
        inlineStyleRanges: [],
        entityRanges: [],
        data: {},
      },
    ],
    entityMap: {},
  },
  generatedTex:
    "\\begin{itemize}\n\\item hello\n\n\\begin{itemize}\n\\item world\n\\end{itemize}\n\n\\item test\n\\end{itemize}\n\n",
};
