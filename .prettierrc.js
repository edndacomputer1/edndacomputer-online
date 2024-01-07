// .prettierrc.js
/** @type {import("prettier").Config} */
const acme = require("eslint-config-acme/prettier");

const config = {
  ...acme,
  singleQuote: false,
};

module.exports = config;
