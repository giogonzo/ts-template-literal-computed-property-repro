```sh
> cat index.ts

const key = `key`;
const a = ({ [key]: renamed }) => renamed;
const b = ({ [`key`]: renamed }) => renamed;

> npm run build && cat index.js

"use strict";
var key = "key";
var a = function (_a) {
    var _b = key, renamed = _a[_b];
    return renamed;
};
var b = function (_a) {
    var _b = `key`, renamed = _a[_b];
    return renamed;
};
```
