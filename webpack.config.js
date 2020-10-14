const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const VueLoaderPlugin = require("vue-loader/lib/plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/main.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "js/[name].[chunkhash:8].js",
    publicPath: "/"
  },
  devtool: "inline-source-map",
  devServer: {
    host: "172.18.1.103",
    contentBase: path.join(__dirname, "dist"), // 服务器的根路径
    open: true,
    port: 2001,
  },
  resolve: {
    extensions: [".js", ".ts", ".json", ".vue"],
    alias: {
      "@": path.resolve("src")
    }
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      filename: "index.html",
      hash: false
    }),
    new MiniCssExtractPlugin({
      filename: "css/[name].[chunkhash:8].css",
    }),
    new VueLoaderPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader"
        ],
      },
      {
        test: /\.(styl|stylus)$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader",
          {
            loader: "stylus-loader",
          }
        ],
      },
      {
        test: /\.vue$/,
        loader: "vue-loader",
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"]
          }
        }
      },
      {
        test: /\.(png|jpe?g|gif|bmp)$/,
        use: [{
          loader: "url-loader",
          options: {
            esModule: false,
            name: "images/[name].[ext]",
            publicPath: "../",
            limit: 8192
          }
        }]
      },
      {
        test: /\.html$/,
        use: [{
          loader: "html-loader",
          options: {
            minimize: true
          }
        }]
      },
      {
        test: /\.(woff2?|eot|ttf|otf|svg)(\?.*)?$/,
        loader: "file-loader",
        options: {
          name: "./fonts/[name].[chunkhash:8].[ext]"
        }
      }
    ]
  }
}