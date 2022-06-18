const { join } = require("path");
const { VueLoaderPlugin } = require("vue-loader");
const HtmlWebpackPlugin = require("./node_modules/html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/main.js",
  output: {
    path: join(__dirname, "lib"),
    filename: "index.js",
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: join(__dirname, "./public/index.html"),
    }),
    new VueLoaderPlugin()
  ],
  devServer: {
    open: true,
    port: 30000,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.less$/i,
        use: ["style-loader", "css-loader", "less-loader"],
      },
      {
        test: /\.(png|gif|jpg|jpeg)/i,
        type: "asset",
        parser: {
          dataUrlCondition: {
            maxSize: 2 * 1024,
          },
        },
        generator: {
          filename: "images/[hash:6][ext]",
        },
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/i,
        type: "asset/resource",
        generator: {
          filename: "fonts/[hash:6][ext]",
        },
      },
      {
        test: /\.js$/,
        use:['babel-loader']
      },
      {
        test: /\.vue$/,
        use:['vue-loader']
      }
    ],
  },
};
