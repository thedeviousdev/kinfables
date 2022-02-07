const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  test: /\.s(c|a)ss$/,
  use: ExtractTextPlugin.extract({
    fallback: 'style-loader',
    use: [{ loader: 'css-loader', options: { importLoaders: 1 } }, 'postcss-loader'],
  }),
};
