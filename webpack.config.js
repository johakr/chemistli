const glob = require('glob');
const path = require('path');

const CompressionPlugin = require('compression-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const PurifyCSSPlugin = require('purifycss-webpack');
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin');

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
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.s?css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              implementation: require('sass'),
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
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
    new CompressionPlugin({
      filename: '[path][base].gz[query]',
      algorithm: 'gzip',
    }),
    new CompressionPlugin({
      filename: '[path][base].br[query]',
      algorithm: 'brotliCompress',
    }),
  ],
};
