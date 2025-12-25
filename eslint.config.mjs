import { defineConfig, globalIgnores } from "eslint/config";
import next from "eslint-config-next";
import tseslint from "typescript-eslint";
import steiger from "@feature-sliced/steiger-plugin";
import prettier from "eslint-config-prettier";
import queryPlugin from "@tanstack/eslint-plugin-query";

export default defineConfig([
  /* ========================
     Global ignores
  ======================== */
  globalIgnores([
    ".next/**",
    "out/**",
    "build/**",
    "dist/**",
    "node_modules/**",
    "coverage/**",
    "next-env.d.ts",
  ]),

  /* ========================
     Next.js
  ======================== */
  {
    extends: [
      next,
      "next/core-web-vitals",
    ],
  },

  /* ========================
     TypeScript
  ======================== */
  ...tseslint.configs.recommended,

  /* ========================
     Feature-Sliced Design (Steiger)
  ======================== */
  {
    plugins: {
      "@feature-sliced/steiger": steiger,
    },
    rules: {
      /* Архитектура */
      "@feature-sliced/steiger/layer-imports": "error",
      "@feature-sliced/steiger/public-api-imports": "error",
      "@feature-sliced/steiger/slice-imports": "error",

      /* Контроль структуры */
      "@feature-sliced/steiger/path-checker": "error",
      "@feature-sliced/steiger/fsd-public-api": "warn",
    },
  },

  /* ========================
     TanStack Query
  ======================== */
  {
    plugins: {
      "@tanstack/query": queryPlugin,
    },
    extends: ["plugin:@tanstack/query/recommended"], // подключаем рекомендованные правила
  },

  /* ========================
     Common project rules
  ======================== */
  {
    rules: {
      /* React / Next */
      "react/react-in-jsx-scope": "off",
      "react/jsx-key": "warn",
      "react/jsx-no-useless-fragment": "warn",

      /* Hooks */
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",

      /* TypeScript */
      "@typescript-eslint/no-unused-vars": [
        "warn",
        {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
          ignoreRestSiblings: true,
        },
      ],
      "@typescript-eslint/consistent-type-imports": [
        "warn",
        {
          prefer: "type-imports",
          fixStyle: "inline-type-imports",
        },
      ],
      "@typescript-eslint/no-explicit-any": "warn",

      /* Quality */
      "prefer-const": "warn",
      "no-var": "error",
      "eqeqeq": ["error", "always"],
      "no-duplicate-imports": "error",

      /* Clean code */
      "no-console": ["warn", { allow: ["warn", "error"] }],
    },
  },

  /* ========================
     Prettier (always last)
  ======================== */
  {
    extends: [prettier],
  },
]);
