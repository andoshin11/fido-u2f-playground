// @ts-check
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

const isProd = process.env.NODE_ENV === 'production'

/**
 * @type {import('webpack').Configuration}
 */
module.exports = {
  mode: isProd ? 'production' : 'development',
  entry: './index.ts',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  devServer: {
    port: 8080,
    hot: true
  },
  resolve: {
    extensions: [".js", ".ts", ".tsx", ".vue"],
    alias: {
      vue: "vue/dist/vue.js",
      '@': path.resolve(__dirname, 'src')
    }
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'vue-style-loader',
            options: {
              sourceMap: false,
              shadowMode: false
            }
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: false,
              importLoaders: 4,
              modules: true,
              localIdentName: '[local]_[hash:base64:5]'
            }
          }
        ]
      },
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: 'babel-loader'
          },
          {
            loader: 'ts-loader',
            options: {
              transpileOnly: true,
              appendTsSuffixTo: ['\\.vue$'],
            }
          },
        ],
        exclude: /node_modules/
      },
      {
        test: /\.(j|t)sx$/,
        use: [
          {
            loader: 'vue-jsx-hot-loader'
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html'
    }),
    new VueLoaderPlugin(),
    new ForkTsCheckerWebpackPlugin({
      workers: 2,
      vue: true
    })
  ]
}
