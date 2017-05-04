var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');
var path = require('path');

module.exports = {
  context: __dirname,
  devtool: debug ? "inline-sourcemap" : null,
  entry: {
    pos: "./sales/pos/app.js",
  },
  module:{
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: [ "react", "es2015", "es2016", 'stage-0'],
          plugins: ['transform-es2015-modules-commonjs',
                    'react-html-attrs',
                    'transform-decorators-legacy']
        }
      }
    ],
  },
  output: {
    path: __dirname+ "/backend/static/public/js/",
    filename: "[name].js"
  },

  plugins: debug ? [] : [
    new webpack.DefinePlugin({
      'process.env':{
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
  ],

};
