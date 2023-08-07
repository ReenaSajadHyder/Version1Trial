module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true
  },
  extends: [
    'standard',
    'plugin:react/recommended',
    'plugin:jsdoc/recommended',
    'plugin:@html-eslint/recommended'
  ],
  overrides: [
    {
      env: {
        node: true
      },
      files: [
        '.eslintrc.{js,cjs}'
      ],
      parserOptions: {
        sourceType: 'script'
      }
    }
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  plugins: [
    'react',
    '@html-eslint',
    'jsdoc'
  ],
  overrides: [
    {
      files: ["*.html"],
      parser: "@html-eslint/parser",
      // extends: ["plugin:@html-eslint/recommended"],
    },
  ],
  rules: {
    "id-match": ["error", "^[a-z]+([A-Z][a-z]+)*$"],
    "@html-eslint/id-naming-convention": ["error", "kebab-case"],
  }
}
