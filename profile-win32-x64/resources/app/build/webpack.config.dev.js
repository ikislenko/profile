'use strict'

const webpack = require('webpack')
const { VueLoaderPlugin } = require('vue-loader')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const path = require('path')


module.exports = {
	mode: 'development',
	devServer: {
		hot: true,
		watchOptions: {
			poll: true
		}
	},
	entry: [
		'./src/app.js'
	],
	module: {
		rules: [
			{
				test: /\.vue$/,
				use: 'vue-loader'
			},
			{
				test: /\.styl(us)?$/,
				use: [
					MiniCssExtractPlugin.loader,
					'css-loader',
					'stylus-loader'
				]
			},
			{
				test: /\.js$/,
				use: 'babel-loader'
			},
			{
				test: /\.(js|vue)$/,
				use: 'eslint-loader',
				enforce: 'pre'
			}
		]
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new VueLoaderPlugin(),
		new HtmlWebpackPlugin({
			filename: 'index.html',
			template: 'index.html',
			inject: true
		}),
		new CopyWebpackPlugin([{
			from: resolve('static/img'),
			to: resolve('dist/static/img'),
			toType: 'dir'
		}]),
		new MiniCssExtractPlugin({
			filename: 'main.css'
		})
	]
}

function resolve(dir)
{
	return path.join(__dirname, '..', dir)
}