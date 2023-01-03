const path = require('path');
const { fileURLToPath } = require('url');
// const { dirname } = require('path');
const Dotenv = require('dotenv-webpack');
const webpack = require('webpack');
const dotenv  = require('dotenv');

dotenv.config();

module.exports = {
  target: 'node',
  entry: {
    main: path.resolve(__dirname, "./src/index.js"),
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "build.js",
    publicPath: "/",
  },
  mode: "production",
  plugins: [
    new webpack.EnvironmentPlugin({
      NODE_ENV: "production",
    }),
  ],
  
};

