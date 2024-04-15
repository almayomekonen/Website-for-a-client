export default module.exports = {
  parser: "@babel/eslint-parser",
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
    requireConfigFile: false,
  },
  extends: ["eslint:recommended", "plugin:react/recommended"],
  rules: {
    // Add your custom rules here
  },
  settings: {
    react: {
      version: "detect",
    },
  },
  // Specify file extensions here
  overrides: [
    {
      files: ["*.js", "*.jsx","JPG"],
      excludedFiles: "*.config.js",
      rules: {
        // Add rules for JavaScript/JSX files
      },
    },
  ],
};
