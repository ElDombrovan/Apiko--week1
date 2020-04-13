const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
module.exports = {
  entry: { main: './src/index.js' },
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.(scss|css)$/,
        use:  [  
          'style-loader', 
          MiniCssExtractPlugin.loader, 
          { loader: 'css-loader', options: { sourceMap: true, importLoaders: 1 } },
          //TO DO : fix or create config for post css package for future tasks
          //{ loader: 'postcss-loader', options: { sourceMap: true, inportLoaders: 1 } },
          { loader: 'sass-loader', options: { sourceMap: true } },
        ]
      }
    ]
  },
  devtool: 'inline-source-map',
  devServer: {
    historyApiFallback: true,
    contentBase: path.join(__dirname, 'public'),
    open: true,
    compress: true,
    hot: true,
    port: 9000,
  },
  plugins: [ 
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: 'style.css',
    }),
    new HtmlWebpackPlugin({
      inject: false,
      hash: true,
      template: './src/index.html',
      filename: 'index.html'
    }),

  ]
};