const path = require('path');

const outputDirectory = 'dist';

module.exports = {
  entry: ['babel-polyfill', './src/hopLiteJS/index.ts'],
  output: {
    path: path.resolve(__dirname, outputDirectory),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
};