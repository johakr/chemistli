const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackInlineSourcePlugin = require('html-webpack-inline-source-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin');
const glob = require('glob');
const PurifyCSSPlugin = require('purifycss-webpack');

console.log(__dirname);

module.exports = {
  entry: {
    bundle: ['./src/app/index.js', './scss/index.scss'],
    polyfills: ['./src/app/utils/polyfill'],
    sw: ['./src/serviceworker/index.js'],
  },
  output: {
    path: path.join(__dirname, 'public'),
    filename: '[name].js',
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
      },
      {
        test: /\.s?css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader?minimize=true', 'sass-loader'],
        }),
      },
    ],
  },
  plugins: [
    new ExtractTextPlugin('[name].css'),
    new PurifyCSSPlugin({
      paths: [
        ...glob.sync(path.join(__dirname, 'src/app/**/*.js')),
        ...glob.sync(path.join(__dirname, 'scss/**/*.scss')),
      ],
      purifyOptions: {
        minify: true,
      },
    }),
    new HtmlWebpackPlugin({
      title: 'Chemist.li',
      template: 'src/index.ejs',
      minify: {
        collapseWhitespace: true,
      },
      inlineSource: /\.css$/,
      excludeChunks: ['polyfills', 'sw'],
    }),
    new ScriptExtHtmlWebpackPlugin({
      defaultAttribute: 'async',
    }),
    new HtmlWebpackInlineSourcePlugin(),
  ],
};
