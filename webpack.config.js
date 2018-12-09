const HtmlWebPlugin = require('html-webpack-plugin'),
      ExtractTextPlugin = require("extract-text-webpack-plugin");
      path = require('path');

const htmlPlugin = new HtmlWebPlugin({
        template: "./src/index.html",
        filename: "./index.html"
      });
const extractPlugin = new ExtractTextPlugin('style.css');

module.exports = {
  stats: "errors-only",
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }, {
        test: /\.(scss)$/,
        use: [{
          loader: 'style-loader', // inject CSS to page
        }, {
          loader: 'css-loader', // translates CSS into CommonJS modules
        }, {
          loader: 'postcss-loader', // Run post css actions
          options: {
            plugins: function () { // post css plugins, can be exported to postcss.config.js
              return [
                require('precss'),
                require('autoprefixer')
              ];
            }
          }
        }, {
          loader: 'sass-loader' // compiles Sass to CSS
        }]
      }, {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      }, 
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        use: [{
          loader: 'file-loader',
          options: {
            outputPath: function (fullPath) {
              return `assest/${fullPath}`;
            },
          }
        }]
      }
    ]
  },
  devServer: {
    historyApiFallback: true,
    port: 1234
  },
  plugins: [
    htmlPlugin,
    extractPlugin
  ],
  resolve: {
    modules: [
      path.join(__dirname, './node_modules'),
      path.join(__dirname, './src')
    ], 
    alias: {
      styles: path.resolve(__dirname, './src/styles')
    }
  },
  resolveLoader: {
    modules: [
      path.join(__dirname, './node_modules')
    ]
  }
}
