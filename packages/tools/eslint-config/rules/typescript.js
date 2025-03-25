import { config, configs } from "typescript-eslint";

/**
 * Creates TypeScript ESLint configuration with the correct project path
 *
 * @param {string|string[]} [tsconfigPath] - The path to the tsconfig, relative to the consuming project
 * @returns {import("eslint").Linter.Config[]}
 */
export const getTypescriptConfig = tsconfigPath => {
  return config(
    configs.recommendedTypeChecked,
    configs.stylisticTypeChecked,
    {
      languageOptions: {
        parserOptions: {
          project: tsconfigPath,
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
            selector: ["variable"],
            types: ["boolean"],
            format: ["PascalCase"],
            prefix: ["is", "has", "should", "can", "will", "was", "does"],
          },
        ],
      },
    },
    {
      files: ["**/*.js", "**/*.jsx", "**/*.json"],
      extends: [configs.disableTypeChecked],
      rules: {
        "@typescript-eslint/no-unused-expressions": "off",
      },
    },
  );
};
