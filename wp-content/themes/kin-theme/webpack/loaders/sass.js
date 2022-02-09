const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  test: /\.s[ac]ss$/i,
  use: [
    MiniCssExtractPlugin.loader,
    "css-loader",
    {
      loader: "sass-loader",
      options: {
        // Prefer `dart-sass`
        implementation: require("sass"),
      },
    },
  ],
};
