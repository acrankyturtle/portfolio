import js from "@eslint/js";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tailwindcss from "eslint-plugin-tailwindcss";
import { defineConfig, globalIgnores } from "eslint/config";
import globals from "globals";
import path from "node:path";
import tseslint from "typescript-eslint";

export default defineConfig([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
      tailwindcss.configs["flat/recommended"],
    ],
    languageOptions: {
      globals: globals.browser,
    },
    settings: {
      tailwindcss: {
        callees: ["clsx", "cn"],
        config: path.resolve(import.meta.dirname, "src/index.css"),
      },
    },
    rules: {
      "tailwindcss/classnames-order": "off",
    },
  },
]);
