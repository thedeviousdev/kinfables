const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  test: /\.sass$/,
  use: [
    'vue-style-loader',
    'css-loader',
    {
      loader: 'sass-loader',
      options: {
        additionalData: `$color: red`,
        // indentedSyntax: true,
        // sass-loader version >= 8
        sassOptions: {
          indentedSyntax: true
        }
      }
    }
  ]
};
