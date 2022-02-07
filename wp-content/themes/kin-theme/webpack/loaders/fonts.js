module.exports = {
  test: /\.(png|woff|woff2|eot|ttf)$/,
  use: {
    loader: 'file-loader',
    options: {
      name: 'fonts/[name].[ext]',
    },
  },
};
