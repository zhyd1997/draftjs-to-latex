/**
 * Case 1: plain text
 *
 * hello, world
 */
export const testUnStyledSample1 = {
  contentState: {
    blocks: [
      {
        key: "foo",
        text: "hello, world",
        type: "unstyled",
        depth: 0,
        inlineStyleRanges: [],
        entityRanges: [],
        data: {},
      },
    ],
    entityMap: {},
  },
  generatedTex: "hello, world\n",
};

/**
 * Case 2: text has inline style, but no overlapping styles.
 *
 * he<bold>ll</bold>o, w<italic>orl</italic>d
 */
export const testUnStyledSample2 = {
  contentState: {
    blocks: [
      {
        key: "foo",
        text: "hello, world",
        type: "unstyled",
        depth: 0,
        inlineStyleRanges: [
          {
            offset: 2,
            length: 2,
            style: "BOLD",
          },
          {
            offset: 8,
            length: 3,
            style: "ITALIC",
          },
        ],
        entityRanges: [],
        data: {},
      },
    ],
    entityMap: {},
  },
  generatedTex: "he\\textbf{ll}o, w\\textit{orl}d\n",
};

/**
 * Case 3: text has inline style, and styles are overlapping.
 *
 *
 */
export const testUnStyledSample3 = {};

/**
 * Case 4: text has special symbols, like `\` and `%`.
 *
 * @see https://tex.stackexchange.com/a/34586
 *
 * & % $ # _ { } \ ^ ~
 */
export const testUnStyledSample4 = {
  contentState: {
    blocks: [
      {
        key: "foo",
        text: "& % $ # _ { } \\ ^ ~",
        type: "unstyled",
        depth: 0,
        inlineStyleRanges: [],
        entityRanges: [],
        data: {},
      },
    ],
    entityMap: {},
  },
  generatedTex:
    "\\& \\% \\$ \\# \\_ \\{ \\} \\textbackslash \\textasciicircum \\textasciitilde\n",
};
