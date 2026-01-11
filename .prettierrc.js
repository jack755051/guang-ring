module.exports = {
  printWidth: 100,
  tabWidth: 2,
  useTabs: false,
  semi: true,
  singleQuote: true,
  quoteProps: 'as-needed',
  trailingComma: 'es5',
  bracketSpacing: true,
  arrowParens: 'always',
  endOfLine: 'auto',
  overrides: [
    {
      files: '*.html',
      options: {
        parser: 'angular',
      },
    },
    {
      files: '*.component.html',
      options: {
        parser: 'angular',
      },
    },
    {
      files: '*.json',
      options: {
        printWidth: 80,
      },
    },
  ],
};
