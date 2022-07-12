const PATH = require('path');
const CONFIG = require('./webpack.config.js');

CONFIG.devServer = {
	historyApiFallback: true,
	contentBase: PATH.resolve('src'),
	port: 8080,
	hot: true,
	open: true,
	watchContentBase: true,
	mode: 'development'
};

CONFIG.devtool = 'inline-source-map';

module.exports = CONFIG;