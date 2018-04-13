const merge = require("webpack-merge");
const parts = require("./webpack.parts");
const common = require("./webpack.common");

const config = merge([
    parts.devServer({
      // Customize host/port here if needed
      host: process.env.HOST,
      port: process.env.PORT,
    }),
    {mode: "development"}
  ]);

  module.exports = merge([common, config]);