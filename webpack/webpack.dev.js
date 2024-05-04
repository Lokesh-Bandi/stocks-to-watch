const webpack = require('webpack');
module.exports = {
  mode: 'development',
  devtool: 'cheap-module-source-map',
  plugins: [
    new webpack.DefinePlugin({
      'process.env.developer': JSON.stringify('Lokesh Bandi -dev'),
    }),
  ],
};
