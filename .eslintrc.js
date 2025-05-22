module.exports = {
  // ... other configurations
  plugins: ["unused-imports"],
  rules: {
    "no-unused-vars": "off", // or "@typescript-eslint/no-unused-vars": "off" if using TypeScript
    "unused-imports/no-unused-imports": "error",
    "unused-imports/no-unused-vars": [
      "warn",
      {
        vars: "all",
        varsIgnorePattern: "^_",
        args: "after-used",
        argsIgnorePattern: "^_",
      },
    ],
  },
};
// This ESLint configuration uses the `unused-imports` plugin to automatically remove unused imports and warn about unused variables.
