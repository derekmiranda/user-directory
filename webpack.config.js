const path = require('path');
const webpack = require('webpack');

const WDS_PORT = 8000;

const productionMode = process.env.NODE_ENV === "production";
const plugins = productionMode ?
  [
    new webpack.optimize.UglifyJsPlugin({
      comments: false,
      minimize: true,
      compress: {
        warnings: false,
        drop_console: true
      },
    })
  ] :
  [
    new webpack.HotModuleReplacementPlugin()
  ]

const devPlugins =

  module.exports = {
    entry: [
      './client',
    ],
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'public/dist'),
      publicPath: 'dist',
    },
    plugins,
    module: {
      loaders: [
        {
          test: /\.(jsx?)$/,
          loader: 'babel-loader',
          exclude: /node_modules/,
          include: [path.resolve(__dirname, './client')],
        },
        {
          test: /(\.css|\.scss|\.sass)$/,
          include: [path.resolve(__dirname, './client/css')],
          loaders: ['style-loader', 'css-loader', 'sass-loader'],
        },
      ]
    },
    devServer: {
      contentBase: './public',
      inline: true,
      hot: true,
    },
  }