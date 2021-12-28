# draftjs-to-latex
[![codecov](https://codecov.io/gh/zhyd1997/draftjs-to-latex/branch/main/graph/badge.svg?token=LFOSGIF627)](https://codecov.io/gh/zhyd1997/draftjs-to-latex)

![NPM](https://img.shields.io/npm/l/@zhyd1997/draftjs-to-latex)
![npm (scoped)](https://img.shields.io/npm/v/@zhyd1997/draftjs-to-latex)

![npm](https://img.shields.io/npm/dw/@zhyd1997/draftjs-to-latex?style=for-the-badge)
![npm](https://img.shields.io/npm/dm/@zhyd1997/draftjs-to-latex?style=for-the-badge)
![npm](https://img.shields.io/npm/dt/@zhyd1997/draftjs-to-latex?style=for-the-badge)

Convert [Draftjs](https://github.com/facebook/draft-js) content to LaTeX source code.

## Features

| Block Type   | Supported | Block Enum            | Notes                            |
|--------------|-----------|-----------------------|----------------------------------|
| Bold         | ✅ Yes     | `BOLD`                |                                  |
| Italic       | ✅ Yes     | `ITALIC`              |                                  |
| Underline    | ✅ Yes     | `UNDERLINE`           |                                  |
| Inline Code  | ✅ Yes     | `CODE`                |                                  |
| H1           | ✅ Yes     | `header-one`          |                                  |
| H2           | ✅ Yes     | `header-two`          |                                  |
| H3           | ✅ Yes     | `header-three`        |                                  |
| UL           | ✅ Yes     | `unordered-list-item` | only support for continuous list |
| OL           | ✅ Yes     | `ordered-list-item`   | only support for continuous list |
| Equation     | ✅ Yes     | `MATH`                | using `katex` for rendering      |
| Image        | ❌ Missing |                       |                                  |
| Table        | ❌ Missing |                       |                                  |
| Code Snippet | ❌ Missing |                       |                                  |

## Limitations

Not support [overlapping styles](https://draftjs.org/docs/advanced-topics-inline-styles/#overlapping-styles).

## Usage
```bash
npm i @zhyd1997/draftjs-to-latex
# yarn
yarn add @zhyd1997/draftjs-to-latex
```

Only support ES6:
```ts
import { scan } from "@zhyd1997/draftjs-to-latex";

const generatedTex = scan(contentState);
// console.log(generatedTex);
```

## Development
```bash
npm install
npm test
```
