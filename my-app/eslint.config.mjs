import babelParser from "@babel/eslint-parser";
import js from "@eslint/js";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import globals from "globals";

export default [
  { ignores: ["dist/**"] },
  js.configs.recommended,
  react.configs.flat.recommended,
  react.configs.flat["jsx-runtime"],
  reactHooks.configs.flat.recommended,
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    languageOptions: {
      parser: babelParser,
      parserOptions: {
        requireConfigFile: false,
        babelOptions: {
          plugins: [
            ["@babel/plugin-syntax-typescript", { isTSX: true }],
            "@babel/plugin-syntax-jsx",
          ],
        },
      },
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.vitest,
      },
    },
    settings: {
      react: {
        version: "detect",
      },
    },
    rules: {
      "no-undef": "off",
      "no-unused-vars": "off",
      "react/prop-types": "off",
    },
  },
];
