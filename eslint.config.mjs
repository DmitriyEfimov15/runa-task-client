import { defineConfig, globalIgnores } from "eslint/config";
import nextConfig from "eslint-config-next";
import prettierConfig from "eslint-config-prettier";
import tsParser from "@typescript-eslint/parser";
import tsPlugin from "@typescript-eslint/eslint-plugin";

export default defineConfig([
  // Игнорируем сборки и node_modules
  globalIgnores([
    ".next/**",
    "out/**",
    "build/**",
    "dist/**",
    "node_modules/**",
    "coverage/**",
    "next-env.d.ts",
  ]),

  // Next.js + Prettier
  {
    extends: [nextConfig, prettierConfig],
  },

  // TypeScript + Steiger + общие правила
  {
    languageOptions: {
      parser: tsParser,
    },
    plugins: {
      "@typescript-eslint": tsPlugin,
    },
    rules: {
      /* TypeScript */
      "@typescript-eslint/no-unused-vars": [
        "warn",
        { argsIgnorePattern: "^_", varsIgnorePattern: "^_", ignoreRestSiblings: true },
      ],
      "@typescript-eslint/consistent-type-imports": [
        "warn",
        { prefer: "type-imports", fixStyle: "inline-type-imports" },
      ],
      "@typescript-eslint/no-explicit-any": "warn",

      /* React */
      "react/react-in-jsx-scope": "off",
      "react/jsx-key": "warn",
      "react/jsx-no-useless-fragment": "warn",
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",

      /* Общие */
      "prefer-const": "warn",
      "no-var": "error",
      "eqeqeq": ["error", "always"],
      "no-duplicate-imports": "error",
      "no-console": ["warn", { allow: ["warn", "error"] }],
    },
  },
]);
