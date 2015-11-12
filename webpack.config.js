'use strict';

const NODE_ENV = 'prod'; // dev || prod
const webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {

  devtool: 'source-map',
  debug: NODE_ENV == 'dev',

  entry: {
    main: './js/main.js'
  },
  output: {
    path: __dirname + '/build/',
    filename: '[name].js'
  },

  watch: NODE_ENV == 'dev',

  module: {
    loaders: [
      {exclude: /(node_modules)/, test: /\.js$/, loader: 'babel'}
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: "jquery",
      "_": "underscore"
    }),
    new webpack.NoErrorsPlugin(),
    new ExtractTextPlugin("styles.css")
  ]
};

if (NODE_ENV == 'prod') {
  module.exports.module.loaders.push(
    {test: /\.css$/, loader: ExtractTextPlugin.extract("style", "css")},
    {test: /\.(png||svg)$/, loader: "url-loader?limit=100000"},
    {test: /\.jpg$/, loader: "file-loader"}
  );
  module.exports.plugins.push(
    new webpack.optimize.UglifyJsPlugin({compress: {warnings: false, drop_console: true}})
  )
}