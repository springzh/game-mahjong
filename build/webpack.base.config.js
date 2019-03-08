'use strict';
const pkg = require('../package.json');

module.exports = {
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
      },
      {test: /\.css$/, use: ['style-loader', 'css-loader', 'postcss-loader']},
      {
        test: /\.less$/,
        use: ['style-loader', 'css-loader', 'postcss-loader', 'less-loader']
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        exclude: /node_modules/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 1,
            name: pkg.version + '/asset/img/[name].[ext]?v=[hash:7]'
          }
        },
      },
      {
        test: /\.(mp3|mp4)$/,
        exclude: /node_modules/,
        use: {
          loader: 'url-loader',
          options: {
            fallback: 'file-loader',
            limit: 10000,
            name: pkg.version + '/asset/medias/[name].[ext]?v=[hash:7]'
          }
        },
      }
    ]
  }
};