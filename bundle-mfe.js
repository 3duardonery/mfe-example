/* concatenate build output files */
const concat = require("concat");
(async function build() {
  const files = [
    "./dist/example01-mfe/runtime.js",
    "./dist/example01-mfe/polyfills.js",
    "./dist/example01-mfe/main.js",
  ];
  await concat(files, "dist/example01-mfe-1.0.js");
})();

/* overcome limitation in webpack by renaming the output variable */
var replace = require("replace");
replace({
  regex: "webpackJsonp",
  replacement: "webpackJsonp_example01-mfe",
  paths: ["dist/"],
  recursive: true,
  silent: true,
  includes: "example01-mfe-1.0.js",
});
