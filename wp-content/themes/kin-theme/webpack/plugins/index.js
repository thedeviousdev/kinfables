const webpack = require('webpack');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const VueLoaderPlugin = require('vue-loader/lib/plugin');

plugins = [
  require('./stylelint'),
  new webpack.ProvidePlugin({
    throttle: 'lodash.throttle',
  }),
  new webpack.LoaderOptionsPlugin({ minimize: true }),
  new MiniCssExtractPlugin({
    filename: "style.css",
    chunkFilename: "[id].css",
  }),
  new VueLoaderPlugin(),
];

if (process.env.NODE_ENV === 'development') {
  plugins.push(require('./browser-sync'));
  plugins.push(require('./stylelint'));
}

module.exports = plugins;
