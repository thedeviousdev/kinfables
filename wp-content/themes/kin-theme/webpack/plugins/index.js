const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

plugins = [
  require('./stylelint'),
  new webpack.ProvidePlugin({
    throttle: 'lodash.throttle',
  }),
  new webpack.LoaderOptionsPlugin({ minimize: true }),
  // new ExtractTextPlugin('styles.sass'),
  new VueLoaderPlugin(),
  new MiniCssExtractPlugin({
    // Options similar to the same options in webpackOptions.output
    // both options are optional
    filename: "[name].css",
    chunkFilename: "[id].css",
  }),
];

if (process.env.NODE_ENV === 'development') {
  plugins.push(require('./browser-sync'));
  plugins.push(require('./stylelint'));
}

module.exports = plugins;
