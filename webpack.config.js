const path = require('path');

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/assets/',
  },
  module: {
    rules: [
      {
        test: /.(js|jsx)$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        use: ['style-loader', 'css-loader', 'sass-loader'],
        test: /.(css|sass|scss)$/,
      },
      {
        type: 'asset',
        test: /\.(png|svg|jpg|jpeg|gif)/,
      },
    ],
  },
};
