import path from 'path';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
  entry: './src/main.js',           // your main JS file
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true                     // clean dist/ before build
  },
  module: {
    rules: [
      // JS
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',  // optional, if you want ES6 transpiling
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      // SCSS + Tailwind
      {
        test: /\.s[ac]ss$/i,
        use: [
          MiniCssExtractPlugin.loader, // extracts CSS into file
          'css-loader',                // translates CSS into JS
          {
            loader: 'postcss-loader',  // Tailwind + autoprefixer
            options: {
              postcssOptions: {
                plugins: [
                  'tailwindcss',
                  'autoprefixer'
                ]
              }
            }
          },
          'sass-loader'                // compiles SCSS to CSS
        ]
      },
      // Static assets (images/fonts)
      {
        test: /\.(png|jpe?g|gif|svg|woff2?|ttf|eot)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'assets/[name][ext]'
        }
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'main.css'
    })
  ],
  resolve: {
    extensions: ['.js']
  },
  devServer: {
    static: path.resolve(__dirname, 'dist'),
    port: 8080,
    hot: true,
    open: true
  },
  mode: 'development'
};
