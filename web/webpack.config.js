// @ts-check
const path = require('path')

const isProd = process.env.NODE_ENV === 'production'

/**
 * @type {import('webpack').Configuration}
 */
module.exports = {
  mode: isProd ? 'production' : 'development',
  entry: './index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
}