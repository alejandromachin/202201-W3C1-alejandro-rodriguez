module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["airbnb-base", "prettier"],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  rules: {
    "import/extensions": "off",
    "export/extensions": "off",
    "no-plusplus": "off",
    "no-restricted-syntax": "off",
    "no-debugger": "off",
    "no-console": "off",
    "lines-between-class-members": [
      "error",
      "always",
      { exceptAfterSingleLine: true },
    ],
  },
};
