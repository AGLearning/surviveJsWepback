const merge = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const parts = require("./webpack.parts");

module.exports = {
  plugins: [
    new HtmlWebpackPlugin({
      title: "Webpack demo",
    }),
  ]
};