const fs = require('fs');
const path = require('path');

const HTMLWebpackPlugin = require('html-webpack-plugin');
// const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

module.exports = {
  entry: path.resolve(__dirname, '..', './src/index.tsx'),
  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js', '.json'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        // exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                ['@babel/preset-env'],
                [
                  '@babel/preset-react',
                  {
                    runtime: 'automatic',
                  },
                ],
                ['@babel/preset-typescript'],
              ],
            },
          },
        ],
      },
      {
        test: /\.css$/,
        exclude: /\.module\.css$/, // Exclude CSS module files
        use: [
          'style-loader', // Inject CSS into the DOM
          'css-loader', // Resolve `@import` and `url()` statements
        ],
      },
      {
        test: /\.module\.css$/i,
        use: [
          'style-loader',
          {
            loader: 'css-loader', // Resolve `@import` and `url()` statements
            options: {
              modules: {
                localIdentName: '[local]--[hash:base64:5]', // Customize the format of generated class names
              },
            },
          },
          {
            loader: 'postcss-loader', // Process CSS with PostCSS
            options: {
              postcssOptions: {
                plugins: [
                  'autoprefixer', // Add vendor prefixes
                  'cssnano', // Minify CSS
                  'postcss-preset-env', // Use future CSS syntax today
                ],
              },
            },
          },
        ],
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/i,
        type: 'asset/resource',
        resourceQuery: { not: /raw/ },
        generator: {
          filename: 'assets/images/[path][name][ext]',
        },
      },
      {
        test: /\.(woff2)$/,
        type: 'asset/resource',
        resourceQuery: { not: /raw/ },
        generator: {
          filename: 'assets/fonts/[name][ext]',
        },
      },
    ],
  },
  output: {
    path: path.resolve(__dirname, '..', './build'),
    filename: 'bundle.js',
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: './src/index.ejs',
      filename: 'index.html',
      templateParameters: {
        title: 'Stocks to watch',
        loader: {
          js: fs.readFileSync(
            path.resolve(__dirname, '..', './src/loader/loader.js'),
            'utf-8'
          ),
        },
      },
    }),
    // new BundleAnalyzerPlugin(), //Visualize for the output file sizes
  ],
};
