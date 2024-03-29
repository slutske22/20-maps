const path = require('path');
const webpack = require('webpack');
const ArcGISPlugin = require('@arcgis/webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const HOST = process.env.HOST || 'localhost';
const PORT = process.env.PORT || 8080;
const PROXY = `http://${HOST}:${PORT}`;

module.exports = {
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		publicPath: '/20-maps/',
	},
	// target:'node', // messes with styled components.  why?
	devtool: 'cheap-module-source-map',
	module: {
		rules: [
			{
				test: /\.(ts|tsx)$/,
				use: ['babel-loader', 'ts-loader'],
				exclude: /node_modules/,
			},
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
				},
			},
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader'],
			},
			{
				test: /\.scss$/,
				use: ['style-loader', 'css-loader', 'sass-loader'],
			},
			{
				test: /\.(png|jpg|JPG|ttf|woff|woff2|svg|gif)$/,
				use: ['file-loader'],
			},
			{
				test: /\.html$/,
				use: [
					{
						loader: 'html-loader',
					},
				],
			},
		],
	},
	devServer: {
		historyApiFallback: true,		
		publicPath: '/20-maps/',
	},
	plugins: [
		new ArcGISPlugin(),
		new HtmlWebpackPlugin({
			template: './src/index.html',
			filename: './index.html',
			favicon: './src/assets/icons/favicon.png',
		}),
		new webpack.HotModuleReplacementPlugin(),
	],
	resolve: {
		modules: [
			path.resolve(__dirname, '/src'),
			path.resolve(__dirname, 'node_modules/'),
		],
		extensions: ['.ts', '.tsx', '.js', '.jsx', '.css', '.scss', '.html'],
	},
	node: {
		process: false,
		global: false,
		fs: 'empty',
	},
};
