// prettier.config.js, .prettierrc.js, prettier.config.cjs, or .prettierrc.cjs

/** @type {import("prettier").Config} */
const config = {
  bracketSameLine: true,
  singleQuote: false,
  plugins: ["prettier-plugin-tailwindcss"],
};

module.exports = config;
