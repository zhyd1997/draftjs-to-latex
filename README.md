# draftjs-to-latex

Convert [Draftjs](https://github.com/facebook/draft-js) content to LaTeX source code.

## TODO

- [x] ESLint and Prettier
- [x] TypeScript
- [x] Jest
- [] CI

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

## Development
```bash
npm install
npm test
```
