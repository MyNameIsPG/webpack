const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const VueLoaderPlugin = require("vue-loader/lib/plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/main.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.js"
  },
  // devtool: 'inline-source-map',
  devServer: {
    contentBase: path.join(__dirname, "dist"), // 服务器的根路径
    open: false,
    port: 2000,
  },
  resolve: {
    extensions: [".js", ".ts", ".json", ".vue"]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: "./index.html",
      filename: "index.html",
      hash: false
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
    new VueLoaderPlugin()
  ],
  module: {
    rules: [//规则 
      {
        test: /\.(css|stylus)$/,
        use: [
          "style-loader",
          "css-loader",
          "stylus-loader"
        ],
        exclude: /node_modules/
      },
      {
        test: /\.(styl|css)$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'stylus-loader'
        ],
        exclude: /node_modules/
      },
      {
        test: /\.vue$/,
        loader: "vue-loader",
        exclude: /node_modules/
      },
    ]
  }
}