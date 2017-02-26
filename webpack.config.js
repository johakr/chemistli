const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: ['./src/polyfill.js', './src/index.js', './scss/index.scss'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['latest', 'stage-0'],
          'plugins': [
            ['transform-decorators-legacy'],
            ['transform-react-jsx', { 'pragma': 'h' }],
          ],
        },
      },
      {
        test: /\.s?css$/,
        use: [{
          loader: "style-loader"
        }, {
          loader: "css-loader?minify=true"
        }, {
          loader: "sass-loader"
        }],
      }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Chemist.li',
      minify: {
        removeAttributeQuotes: true,
        collapseWhitespace: true,
        useShortDoctype: true,
      },
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
  ],
};
