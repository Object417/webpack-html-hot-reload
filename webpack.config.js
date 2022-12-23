const HtmlWebpackPlugin = require("html-webpack-plugin")
const path = require("path")

const commonCfg = {
  entry: path.resolve(__dirname, "src/index"),
  output: {
    filename: "[name].[contenthash].js",
    path: path.resolve(__dirname, "build/"),
    publicPath: "/",
    assetModuleFilename: "assets/[contenthash][ext][query]",
    clean: true
  },
  devServer: {
    compress: true,
    hot: true,
    port: 3000,
    watchFiles: [path.resolve(__dirname, "index.html")]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "index.html"),
      favicon: path.resolve(__dirname, "assets/favicon.jpg"),
      title: "Minimal, Reproducible Example",
      meta: {
        charset: "UTF-8",
        viewport: "width=device-width, initial-scale=1"
      }
    })
  ],
  module: {
    rules: [
      {
        test: /\.html$/i,
        use: ["html-loader"]
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.(png|jpe?g|webp)$/i,
        type: "asset/resource",
        generator: {
          filename: "assets/img/[contenthash][ext][query]"
        }
      }
    ]
  }
}

module.exports = (env, argv) => {
  commonCfg.mode = argv.mode
  return commonCfg
}
