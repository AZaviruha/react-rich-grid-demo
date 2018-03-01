const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackHarddiskPlugin = require('html-webpack-harddisk-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const resolve = dir => path.resolve(__dirname, '..', dir);
const DEBUG = process.env.NODE_ENV !== 'production' ? true : false;

module.exports = {
  entry: {
    app: resolve('src/index.js')
  },

  output: {
    path: resolve('out/'),
    filename: 'app.js'
  },

  resolve: {
    modules: ['node_modules/', 'src/'],
    extensions: ['.js', '.jsx', '.json'],
    alias: {
      '@': resolve('src/'),
      '@lib': resolve('src/lib'),
      '@main': resolve('src/main'),
      '@screens': resolve('src/screens'),
      '@components': resolve('src/components')
    }
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: [resolve('src')],
        loader: 'babel-loader',

        options: {
          presets: ['env', 'stage-3', 'react'],
          plugins: [
            'react-hot-loader/babel',
            'transform-decorators-legacy',
            ['transform-runtime', { polyfill: false }]
          ]
        }
      },

      {
        test: /\.less$/,
        use: DEBUG
          ? ['style-loader', 'css-loader', 'less-loader']
          : ExtractTextPlugin.extract({
              fallback: 'style-loader',
              use: ['css-loader', 'postcss-loader', 'less-loader']
            })
      }
    ]
  },

  devServer: {
    contentBase: resolve('out'),
    // compress: true,
    host: '0.0.0.0',
    port: 9001,
    historyApiFallback: {
      index: 'index.html'
    },
    hotOnly: true, // hot module replacement. Depends on HotModuleReplacementPlugin
    https: false, // true for self-signed, object for cert authority
    noInfo: true // only errors & warns on hot reload
  },

  plugins: [
    new ExtractTextPlugin({
      filename: 'app.[contenthash].css'
    }),

    new HtmlWebpackPlugin({
      title: 'Mentat',
      template: resolve('src/templates/index.ejs'),
      cache: false,
      alwaysWriteToDisk: true
    }),

    new HtmlWebpackHarddiskPlugin(),

    new webpack.HotModuleReplacementPlugin()
  ]
};
