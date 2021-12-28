/**
 * Case 1: Math Equation
 *
 * sinx^2 + cosx^2 = 1
 */
export const testAtomicSample1: any = {
  contentState: {
    blocks: [
      {
        key: "foo",
        text: "",
        type: "unstyled",
        depth: 0,
        inlineStyleRanges: [],
        entityRanges: [],
        data: {},
      },
      {
        key: "1nkt4",
        text: " ",
        type: "atomic",
        depth: 0,
        inlineStyleRanges: [],
        entityRanges: [
          {
            offset: 0,
            length: 1,
            key: 0,
          },
        ],
        data: {},
      },
      {
        key: "4ikuh",
        text: "",
        type: "unstyled",
        depth: 0,
        inlineStyleRanges: [],
        entityRanges: [],
        data: {},
      },
    ],
    entityMap: {
      "0": {
        type: "MATH",
        mutability: "IMMUTABLE",
        data: {
          content: "\\sin{x^2} + \\cos{x^2} = 1",
        },
      },
    },
  },
  generatedTex:
    "\n" +
    "\\begin{equation}\n" +
    "\\sin{x^2} + \\cos{x^2} = 1\n" +
    "\\end{equation}\n" +
    "\n",
};
