import tseslint from "typescript-eslint";

/**
 * A shared ESLint configuration for the TypeScript ecosystem.
 *
 * @type {import("eslint").Linter.Config}
 * */
export const typescriptConfig = tseslint.config(
  tseslint.configs.recommendedTypeChecked,
  tseslint.configs.stylisticTypeChecked,
  {
    languageOptions: {
      parserOptions: {
        project: ["../../../apps/*/tsconfig.json"],
        tsconfigRootDir: import.meta.dirname,
      },
    },
    rules: {
      "@typescript-eslint/no-unused-vars": [
        "error",
        { argsIgnorePattern: "^_" },
      ],
      "no-implicit-coercion": [
        "error",
        {
          boolean: false,
          number: true,
          string: true,
          allow: [],
        },
      ],
      "@typescript-eslint/strict-boolean-expressions": [
        "error",
        {
          allowString: false,
          allowNumber: false,
          allowNullableObject: false,
        },
      ],
      "@typescript-eslint/naming-convention": [
        "error",
        {
          selector: ["typeLike", "enumMember", "enum"],
          format: ["PascalCase"],
        },

        // Variables and parameters use camelCase
        {
          selector: "variable",
          format: ["camelCase", "UPPER_CASE", "PascalCase"],
          leadingUnderscore: "allow",
        },

        // Function declarations must be in camelCase
        {
          selector: "function",
          format: ["camelCase", "PascalCase"],
        },

        // Class methods must be in camelCase
        {
          selector: "method",
          format: ["camelCase"],
        },

        // Class properties must be in camelCase
        {
          selector: "property",
          format: ["camelCase"],
          leadingUnderscore: "allow",
        },

        // Parameters must be in camelCase
        {
          selector: "parameter",
          format: ["camelCase"],
          leadingUnderscore: "allow",
        },

        // Interface names must start with 'I'
        {
          selector: "interface",
          format: ["PascalCase"],
          prefix: ["I"],
        },

        // Type aliases must be in PascalCase
        {
          selector: "typeAlias",
          format: ["PascalCase"],
        },

        // Generic type parameters must start with 'T'
        {
          selector: "typeParameter",
          format: ["PascalCase"],
          prefix: ["T"],
        },

        // React component props interface must end with 'Props'
        {
          selector: "interface",
          filter: {
            regex: "Props$",
            match: true,
          },
          format: ["PascalCase"],
          suffix: ["Props"],
        },

        // React component state interface must end with 'State'
        {
          selector: "interface",
          filter: {
            regex: "State$",
            match: true,
          },
          format: ["PascalCase"],
          suffix: ["State"],
        },

        // Private class members must have leading underscore
        {
          selector: "memberLike",
          modifiers: ["private"],
          format: ["camelCase"],
          leadingUnderscore: "require",
        },

        // Protected class members may have leading underscore
        {
          selector: "memberLike",
          modifiers: ["protected"],
          format: ["camelCase"],
          leadingUnderscore: "allow",
        },

        // Boolean variables should start with is/has/should/can/will
        {
          selector: ["variable", "parameter", "property"],
          types: ["boolean"],
          format: ["PascalCase"],
          prefix: ["is", "has", "should", "can", "will", "was", "does"],
        },

        // Event handlers should start with handle or on
        {
          selector: ["function", "method", "property"],
          filter: {
            regex: "^(handle|on)[A-Z]",
            match: true,
          },
          format: ["camelCase"],
        },

        // Class names (including React components)
        {
          selector: "class",
          format: ["PascalCase"],
        },

        // Async methods should end with Async
        {
          selector: ["function", "method"],
          modifiers: ["async"],
          format: ["camelCase"],
          suffix: ["Async"],
        },
        {
          selector: "function",
          filter: {
            regex: "^use[A-Z]",
            match: true,
          },
          format: ["camelCase"],
        },
      ],
    },
  },
  {
    files: ["**/*.js", "**/*.jsx", "**/*.json"],
    extends: [tseslint.configs.disableTypeChecked],
    rules: {
      "@typescript-eslint/no-unused-expressions": "off",
    },
  },
);
