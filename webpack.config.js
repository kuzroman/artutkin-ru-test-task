'use strict';

const NODE_ENV = 'dev'; // dev || prod
const webpack = require('webpack');

module.exports = {

  devtool: 'source-map',
  debug: NODE_ENV == 'dev',

  entry: {
    main: './js/main.js',
    //css: './assets/css/main.css'
  },
  output: {
    path: __dirname + '/build/',
    filename: '[name].js'
  },

  watch: NODE_ENV == 'dev',

  module: {
    loaders: [
      {exclude: /(node_modules)/, test: /\.js$/, loader: 'babel'},
      //{test: /\.(css||scss)$/, loaders: ["style", "css?sourceMap", "sass?sourceMap"]},
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: "jquery",
      "_": "underscore"
    }),
    new webpack.NoErrorsPlugin()
  ]
};

if (NODE_ENV == 'prod') {
  module.exports.module.loaders[1].loaders = ["style", "css", "sass"];
  module.exports.module.loaders.push(
    {test: /\.(png||svg)$/, loader: "url-loader?limit=100000"},
    {test: /\.jpg$/, loader: "file-loader"}
  );
  module.exports.plugins.push(
    new webpack.optimize.UglifyJsPlugin({compress: {warnings: false, drop_console: true}})
  )
}