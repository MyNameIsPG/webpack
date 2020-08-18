const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const VueLoaderPlugin = require("vue-loader/lib/plugin")
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/main.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.js"
  },
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
    new VueLoaderPlugin()
  ],
  module: {
    rules: [//规则 
      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader",
            options: {
            }
          },
          "css-loader"
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