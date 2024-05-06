const webpack = require('webpack');

module.exports = {
  mode: 'development',
  devtool: 'cheap-module-source-map',
  devServer: {
    port: 8084,
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.developer': JSON.stringify('Lokesh Bandi -dev'),
    }),
  ],
};
