const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  test: /\.s[ac]ss$/i,
  use: [
    MiniCssExtractPlugin.loader,
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
