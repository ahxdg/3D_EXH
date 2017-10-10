const path = require('path')
const webpack = require('webpack')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
	entry: {
		app: ['webpack-hot-middleware/client?noInfo=true&reload=true','./src/canvas_ball/index.js']
	},
	plugins: [
		new CleanWebpackPlugin(['dist/canvas_ball']),
		new webpack.HotModuleReplacementPlugin(),
		new HtmlWebpackPlugin({
			title: 'canvas ball',
			template: 'index.html'
		})
	],
	output: {
		filename: '[name].bundle.js',
		path:path.resolve(__dirname,'dist/canvas_ball'),
		publicPath: '/'
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				use: ['babel-loader']
			},
			{
				test: /\.css$/,
				use: ['style-loader','css-loader']
			}
		]
	}
}