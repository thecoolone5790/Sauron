const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');



module.exports = {
  entry: {
       app: './src/index.js',
       print: './src/print.js'
    },
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist')
    },
  devtool: 'inline-source-map',
     module: {
       rules: [
           {
             test: /\.css$/,
             use: [
               'style-loader',
               'css-loader'
             ]
         },
         {
           test: /\.js$/,
           exclude: /(node_modules|bower_components)/,
           use: {
             loader: 'babel-loader',
             options: {
               presets: ['env']
             }
           }
         }
       ]
    },
     devServer: {
       contentBase: './dist',
       hot: true
    },
     plugins: [
       new webpack.HotModuleReplacementPlugin(),
       new CleanWebpackPlugin(['dist']),
      new HtmlWebpackPlugin({
          title: 'Output Management'
    })

   ],
};