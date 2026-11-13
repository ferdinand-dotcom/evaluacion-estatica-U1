export default [
  {
    files: ["src/**/*.js"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "commonjs",
      globals: {
        module: "readonly",
        console: "readonly"
      }
    },
    rules: {
      "no-var": "error",
      "eqeqeq": ["error", "always"],
      "no-unused-vars": "error",
      "curly": ["error", "all"]
    }
  }
];
