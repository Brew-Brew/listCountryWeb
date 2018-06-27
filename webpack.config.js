const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: "./public/index.html",
  inject: "body"
});
module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve("dist"),
    filename: "[name].[hash].js"
  },
  module: {
    rules: [
      { test: /\.(js|jsx)$/, loader: "babel-loader", exclude: /node_modules/ }
    ]
  },
  resolve: {
    alias: {
      src: path.resolve(__dirname, "./src")
    }
  },
  devServer: {
    contentBase: path.resolve("public")
  },
  plugins: [HtmlWebpackPluginConfig]
};
