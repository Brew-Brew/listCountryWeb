const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: "./public/index.html",
  inject: "body"
});
module.exports = {
  devtool: "cheap-module-source-map",
  // spread operator와 generator를 쓰기 위해 babel로더에 아래 설정을 잡아주었습니다.
  entry: ["babel-polyfill", "./src/index.js"],
  output: {
    path: path.resolve("build"),
    filename: "[name].[hash].js"
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        query: {
          plugins: ["transform-object-rest-spread", "transform-regenerator"]
        }
      },
      {
        test: /\.css$/,
        use: [
          require.resolve("style-loader"),
          {
            loader: require.resolve("css-loader"),
            options: {
              importLoaders: 1
            }
          },
          {
            loader: require.resolve("postcss-loader"),
            options: {
              // Necessary for external CSS imports to work
              // https://github.com/facebookincubator/create-react-app/issues/2677
              ident: "postcss"
            }
          }
        ]
      },
      //scss를 쓰기위해 loader를 잡아주었습니다.
      {
        test: /\.scss$/,
        use: [
          require.resolve("style-loader"),
          {
            loader: require.resolve("css-loader"),
            options: {
              modules: true,
              localIdentName: "[name]__[local]__[hash:base64:5]",
              importLoaders: 1
            }
          },
          {
            loader: require.resolve("postcss-loader"),
            options: {
              // Necessary for external CSS imports to work
              // https://github.com/facebookincubator/create-react-app/issues/2677
              ident: "postcss",
              plugins: () => [require("postcss-flexbugs-fixes")]
            }
          },
          {
            loader: require.resolve("sass-loader"),
            options: {
              // 나중에 입력
            }
          }
        ]
      }
    ]
  },
  //src를 루트경로로 쓰고, alias를 걸어주었습니다. (경로가 깔끔해짐)
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
