'use strict';

const  path = require('path');

module.exports = {
  context: path.resolve(__dirname, 'src'),
  entry: './index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public')
  },
  mode: 'development',
  watch: true,
  devtool: 'source-map',

  module: {
      rules:[
          {
              test: /\.js$/,
              exclude: /node_modules/,
              use: {
                  loader: 'babel-loader',
                  options: {
presets:[
                        ["@babel/preset-env", {
                            targets: {
                                edge: "17",
                                firefox: "60",
                                chrome: "67",
                                safari: "11.1",
                                ie: "11"
                              },
                        }]
                      ]
                  }
              }
          }
      ]
  }
};