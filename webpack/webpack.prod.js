const webpack = require('webpack');

module.exports = {
  mode: 'production',
  devtool: 'source-map',
  devServer: {
    historyApiFallback: true,
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.developer': JSON.stringify('Lokesh Bandi -prod'),
    }),
  ],
};
