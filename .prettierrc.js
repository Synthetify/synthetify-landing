const prettierConfigStandard = require('prettier-config-standard')
const modifiedConfig = {
  arrowParens: 'avoid',
  bracketSpacing: true,
  quoteProps: 'as-needed',
  semi: false,
  tabWidth: 2,
  trailingComma: 'none',
  useTabs: false,
  singleQuote: true,
  jsxSingleQuote: true,
  spaceBeforeFunctionParen: true,
  printWidth: 100,
  parser: 'typescript'
  // ... other modified settings here
}

module.exports = modifiedConfig
