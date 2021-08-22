const path = require('path');
const StyleLintPlugin = require('stylelint-webpack-plugin');

module.exports = new StyleLintPlugin({
  configFile: path.resolve(__dirname, '../.stylelintrc'),
  context: path.resolve(__dirname, '../../src/assets/sass'),
  files: '**/*.sass',
  failOnError: false,
  quiet: true,
});
