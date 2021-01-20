const path = require('path');
const Dotenv = require('dotenv-webpack');

module.exports = {
	mode: 'production',
	//	devtool: 'inline-source-map',
	entry: './src/index.js',
	output: {
		filename: 'main.js',
		path: path.resolve(__dirname, 'dist'),
	},
	plugins: [new Dotenv()],
};
