/**
 * TODO: 12 cases.
 * combination of all of cases
 */

/**
 * Case 1: TODO
 *
 * - hello
 *   - world
 *     - hello
 *   - world
 * - hello
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
        key: "7p77p",
        text: "world",
        type: "unordered-list-item",
        depth: 1,
        inlineStyleRanges: [],
        entityRanges: [],
        data: {},
      },
      {
        key: "fi2d2",
        text: "hello",
        type: "unordered-list-item",
        depth: 2,
        inlineStyleRanges: [],
        entityRanges: [],
        data: {},
      },
      {
        key: "cfltm",
        text: "world",
        type: "unordered-list-item",
        depth: 1,
        inlineStyleRanges: [],
        entityRanges: [],
        data: {},
      },
      {
        key: "ah7rd",
        text: "hello",
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
    "\\begin{itemize}\n" +
    "\\item hello\n" +
    "\n" +
    "\\begin{itemize}\n" +
    "\\item world\n" +
    "\n" +
    "\\begin{itemize}\n" +
    "\\item hello\n" +
    "\\end{itemize}\n" +
    "\n" +
    "\\item world\n" +
    "\\end{itemize}\n" +
    "\n" +
    "\\item hello\n" +
    "\\end{itemize}\n" +
    "\n",
};

/**
 * Case 2: TODO
 *
 * hello
 * - hello
 *   - world
 *     - hello
 *   - world
 * - hello
 * hello
 */
export const testSample2 = {
  contentState: {
    blocks: [
      {
        key: "foo",
        text: "hello",
        type: "unstyled",
        depth: 0,
        inlineStyleRanges: [],
        entityRanges: [],
        data: {},
      },
      {
        key: "ehlc7",
        text: "hello",
        type: "unordered-list-item",
        depth: 0,
        inlineStyleRanges: [],
        entityRanges: [],
        data: {},
      },
      {
        key: "7p77p",
        text: "world",
        type: "unordered-list-item",
        depth: 1,
        inlineStyleRanges: [],
        entityRanges: [],
        data: {},
      },
      {
        key: "fi2d2",
        text: "hello",
        type: "unordered-list-item",
        depth: 2,
        inlineStyleRanges: [],
        entityRanges: [],
        data: {},
      },
      {
        key: "cfltm",
        text: "world",
        type: "unordered-list-item",
        depth: 1,
        inlineStyleRanges: [],
        entityRanges: [],
        data: {},
      },
      {
        key: "ah7rd",
        text: "hello",
        type: "unordered-list-item",
        depth: 0,
        inlineStyleRanges: [],
        entityRanges: [],
        data: {},
      },
      {
        key: "16gom",
        text: "world",
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
    "hello\n" +
    "\\begin{itemize}\n" +
    "\\item hello\n" +
    "\n" +
    "\\begin{itemize}\n" +
    "\\item world\n" +
    "\n" +
    "\\begin{itemize}\n" +
    "\\item hello\n" +
    "\\end{itemize}\n" +
    "\n" +
    "\\item world\n" +
    "\\end{itemize}\n" +
    "\n" +
    "\\item hello\n" +
    "\\end{itemize}\n" +
    "\n" +
    "world\n",
};

/**
 * Case 3: TODO
 *
 * hello
 * - hello
 *   - world
 *     - hello
 * world
 */
export const testSample3 = {
  contentState: {
    blocks: [
      {
        key: "foo",
        text: "hello",
        type: "unstyled",
        depth: 0,
        inlineStyleRanges: [],
        entityRanges: [],
        data: {},
      },
      {
        key: "ehlc7",
        text: "hello",
        type: "unordered-list-item",
        depth: 0,
        inlineStyleRanges: [],
        entityRanges: [],
        data: {},
      },
      {
        key: "7p77p",
        text: "world",
        type: "unordered-list-item",
        depth: 1,
        inlineStyleRanges: [],
        entityRanges: [],
        data: {},
      },
      {
        key: "fi2d2",
        text: "hello",
        type: "unordered-list-item",
        depth: 2,
        inlineStyleRanges: [],
        entityRanges: [],
        data: {},
      },
      {
        key: "16gom",
        text: "world",
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
    "hello\n" +
    "\\begin{itemize}\n" +
    "\\item hello\n" +
    "\n" +
    "\\begin{itemize}\n" +
    "\\item world\n" +
    "\n" +
    "\\begin{itemize}\n" +
    "\\item hello\n" +
    "\\end{itemize}\n" +
    "\\end{itemize}\n" +
    "\\end{itemize}\n" +
    "\n" +
    "world\n",
};

/**
 * Case 4: TODO
 *
 * hello
 * - hello
 *     - hello
 * world
 */
export const testSample4 = {
  contentState: {
    blocks: [
      {
        key: "foo",
        text: "hello",
        type: "unstyled",
        depth: 0,
        inlineStyleRanges: [],
        entityRanges: [],
        data: {},
      },
      {
        key: "ehlc7",
        text: "hello",
        type: "unordered-list-item",
        depth: 0,
        inlineStyleRanges: [],
        entityRanges: [],
        data: {},
      },
      {
        key: "fi2d2",
        text: "hello",
        type: "unordered-list-item",
        depth: 2,
        inlineStyleRanges: [],
        entityRanges: [],
        data: {},
      },
      {
        key: "16gom",
        text: "world",
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
    "hello\n" +
    "\\begin{itemize}\n" +
    "\\item hello\n" +
    "\n" +
    "\\begin{itemize}\n" +
    "\\begin{itemize}\n" +
    "\\item hello\n" +
    "\\end{itemize}\n" +
    "\\end{itemize}\n" +
    "\\end{itemize}\n" +
    "\n" +
    "world\n",
};

/**
 * Case 5: TODO
 *
 * hello
 * - hello
 *   a. hello
 * world
 */
export const testSample5 = {
  contentState: {
    blocks: [
      {
        key: "foo",
        text: "hello",
        type: "unstyled",
        depth: 0,
        inlineStyleRanges: [],
        entityRanges: [],
        data: {},
      },
      {
        key: "ehlc7",
        text: "hello",
        type: "unordered-list-item",
        depth: 0,
        inlineStyleRanges: [],
        entityRanges: [],
        data: {},
      },
      {
        key: "fi2d2",
        text: "hello",
        type: "ordered-list-item",
        depth: 1,
        inlineStyleRanges: [],
        entityRanges: [],
        data: {},
      },
      {
        key: "16gom",
        text: "world",
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
    "hello\n" +
    "\\begin{itemize}\n" +
    "\\item hello\n" +
    "\n" +
    "\\begin{enumerate}\n" +
    "\\begin{enumerate}\n" +
    "\\item hello\n" +
    "\\end{enumerate}\n" +
    "\\end{enumerate}\n" +
    "\\end{itemize}\n" +
    "\n" +
    "world\n",
};

/**
 * Case 6: TODO
 *
 * hello
 *     - hello
 *   a. world
 * - hello
 * world
 */
export const testSample6 = {
  contentState: {
    blocks: [
      {
        key: "foo",
        text: "hello",
        type: "unstyled",
        depth: 0,
        inlineStyleRanges: [],
        entityRanges: [],
        data: {},
      },
      {
        key: "fi2d2",
        text: "hello",
        type: "unordered-list-item",
        depth: 2,
        inlineStyleRanges: [],
        entityRanges: [],
        data: {},
      },
      {
        key: "cfltm",
        text: "world",
        type: "ordered-list-item",
        depth: 1,
        inlineStyleRanges: [],
        entityRanges: [],
        data: {},
      },
      {
        key: "ah7rd",
        text: "hello",
        type: "unordered-list-item",
        depth: 0,
        inlineStyleRanges: [],
        entityRanges: [],
        data: {},
      },
      {
        key: "5mutr",
        text: "world",
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
    "hello\n" +
    "\\begin{itemize}\n" +
    "\\begin{itemize}\n" +
    "\\begin{itemize}\n" +
    "\\item hello\n" +
    "\\begin{enumerate}" +
    "\n" +
    "\\item world\n" +
    "\\end{enumerate}\n" +
    "\n" +
    "\\end{itemize}\n" +
    "\n" +
    "\\item hello\n" +
    "\\end{itemize}\n" +
    "\n" +
    "world\n",
};
