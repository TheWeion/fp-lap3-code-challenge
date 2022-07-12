const PATH = require('path');
const HTMLWEBPACKPLUGIN = require('html-webpack-plugin');

const CONFIG = {
	entry: PATH.resolve(__dirname, 'src/index.js'),
	output: {
		path: PATH.resolve(__dirname, 'dist'),
		filename: 'bundle.js',
		publicPath: '/',
		clean: true
	},
	plugins: [ new HTMLWEBPACKPLUGIN({ template: PATH.resolve(__dirname, 'src/index.html') }) ],
	module: {
		rules: [
			{
				test: /\.jsx$/,
				exclude: /node_modules/,
				loader: 'babel-loader'
			},
			{
				test: /\.css$/,
				use: [ 'style-loader', 'css-loader' ]
			},
			{
				test: /\.scss$/,
				use: [ 'style-loader', 'css-loader', 'sass-loader' ]
			},
			{
				test: /\.html$/,
				use: [ 'html-loader' ]
			},
			{
				test: /\.(png|jpg|gif)$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: '[name].[ext]',
							outputPath: 'assets/'
						}
					}
				]
			}
		]
	},
	mode: "none"
};

module.exports = CONFIG;