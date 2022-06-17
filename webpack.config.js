const { join } = require("path");
const HtmlWebpackPlugin = require("./node_modules/html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/main.js",
  output: {
    path: join(__dirname, "lib"),
    filename: "index.js",
  },
  plugins:[
    new HtmlWebpackPlugin({
        template:join(__dirname, './public/index.html')
    })
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};
