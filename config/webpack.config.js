const PATH = require('path');
const HTMLWEBPACKPLUGIN = require('html-webpack-plugin');
console.log(__dirname)

const ROOT_DIRECTORY = PATH.join(__dirname, '../'); // the root of your project
const PUBLIC_DIRECTORY = PATH.join(ROOT_DIRECTORY, 'public'); // the root of the frontend, i.e. html file

const CONFIG = {
  entry: [PATH.resolve(__dirname, '../src/index.jsx')], // the main JavaScript file of the project
  output: {
    // instructions for compiling the code
    path: PATH.resolve(__dirname, '../dist'), // the file where the compiled code should go
    filename: 'bundle.js', // the file name of the compiled code
    publicPath: '/', // specifies the base PATH for all the assets within your application.
  },
  mode: 'development', // tells webpack to use its built-in optimizations according to the mode
  resolve: {
    // instructions on how to resolve modules
    modules: [PATH.resolve('node_modules'), 'node_modules'], // tells webpack where to look for node_modules
	extensions: ['.js', '.jsx'], // tells webpack to use the following extensions when looking for modules
  },
  performance: {
    // notifies you if assets and entry points exceed a specific file limit
    hints: false,
  },
  plugins: [
    // plugins we are using to help with compiling
    new HTMLWEBPACKPLUGIN({
      // used to add the JavaScript code to the HTML
      template: PATH.join(PUBLIC_DIRECTORY, 'index.html'),
    }),
  ],
  module: {
    // helpers we want webpack to use
    rules: [
      // specific instructions for each helper
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' }, // transpile JavaScript files
	  { test: /\.jsx$/, exclude: /node_modules/, loader: 'babel-loader' }, // transpile JavaScript files
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      }, // transpile css files
      {
        test: /\.(png|svg|jpg|gif|pdf)$/,
        use: ['file-loader', 'url-loader']
      }, // transpile image files
    ],
  },
};

module.exports = CONFIG;