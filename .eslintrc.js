/** @type {import('eslint').Linter.Config} */
module.exports = {
  extends: ["next/core-web-vitals", "plugin:prettier/recommended"],
  plugins: ["simple-import-sort"],
  rules: {
    eqeqeq: "error",
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error",
    "import/first": "error",
    "import/newline-after-import": "error",
    "import/no-duplicates": "error",
  },
};
