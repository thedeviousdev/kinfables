const path = require('path');
const TerserPlugin = require("terser-webpack-plugin");

const plugins = require('./plugins');
const loaders = require('./loaders');

const isDev = process.env.NODE_ENV === 'development';

module.exports = {
  mode: process.env.NODE_ENV || 'development',
  entry: {
    index: './src/app.js',
  },
  devtool: isDev ? 'inline-source-map' : false,
  stats: { warnings: false }, // Hide warnings
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'scripts/[name].js',
  },
  module: {
    rules: loaders,
  },
  resolve: {
    extensions: ['.js', '.css', '.vue'],
    alias: {
      vue$: 'vue/dist/vue.esm.js',
    },
  },
  plugins,
  optimization: {
    chunkIds: isDev ? 'named' : 'total-size',
    minimize: !isDev,
    minimizer: isDev
      ? []
      : [
          new TerserPlugin(),
        ],
  },
};
