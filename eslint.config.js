import js from "@eslint/js";
import globals from "globals";

export default [
  js.configs.recommended,
  {
    files: ["backend/**/*.js"],
    languageOptions: {
      globals: { ...globals.node },
    },
  },
  {
    files: ["web/**/*.js"],
    languageOptions: {
      globals: { ...globals.browser },
    },
  },
];
