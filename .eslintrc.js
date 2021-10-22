module.exports = {
  root: true,
  env: {
    browser: true,
  },
  parserOptions: {
    project: "./tsconfig.json",
    tsconfigRootDir: __dirname,
  },
  settings: {
    // Modules that are included as peer dependencies
    "import/core-modules": [
      "csstype",
      "@mui/system",
      "history",
      "react-router",
    ],
    react: {
      version: "detect",
    },
  },
  plugins: ["@typescript-eslint", "react-hooks", "react", "es"],
  extends: [
    "eslint:recommended",
    "airbnb-typescript",
    "airbnb/hooks",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:import/recommended",
    "prettier",
  ],
  rules: {
    "react/self-closing-comp": "warn",
    "no-console": "warn",
    "react/jsx-newline": "warn",
    "react/no-array-index-key": "warn",
    "es/no-classes": "error",
    "import/named": "off",
    "react/no-multi-comp": ["error", { ignoreStateless: false }],
    "react/no-access-state-in-setstate": "error",
    "react/no-danger": "error",
    "react/jsx-pascal-case": "error",
    "react/jsx-boolean-value": ["error", "always"],
    "react/jsx-no-useless-fragment": 1,
    "@typescript-eslint/naming-convention": [
      "warn",
      {
        selector: "enumMember",
        format: ["StrictPascalCase"],
      },
    ],
    "react/jsx-props-no-spreading": 0,
    "react/require-default-props": 0,
    "react/destructuring-assignment": 0,
    "react/prop-types": "off",
    "react/jsx-no-bind": "off",
    "multiline-comment-style": ["error", "separate-lines"],
    "quote-props": ["error", "as-needed"],
    "no-plusplus": "off",
    "import/no-extraneous-dependencies": [
      "error",
      {
        packageDir: __dirname,
        devDependencies: ["src/tests/**", "*.js"],
        optionalDependencies: false,
      },
    ],
    "@typescript-eslint/no-use-before-define": "off",
    curly: ["error", "all"],
    "@typescript-eslint/no-floating-promises": 2,
    "import/prefer-default-export": "off",
  },
  overrides: [
    {
      // enable the rule specifically for TypeScript files
      files: ["*.ts", "*.tsx"],
      rules: {
        "@typescript-eslint/explicit-module-boundary-types": ["error"],
      },
    },
    {
      files: ["*.js"],
      rules: {
        "@typescript-eslint/no-var-requires": "off",
        "no-undef": "off",
      },
    },
    {
      files: [".vscode/**"],
      rules: {
        "no-underscore-dangle": "off",
        "@typescript-eslint/naming-convention": "off",
        "@typescript-eslint/no-unused-vars": "off",
        "@typescript-eslint/no-empty-interface": "off",
      },
    },
  ],
};
