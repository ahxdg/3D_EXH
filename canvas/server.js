const express = require('express')
const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')

const app = express()
const config = require('./webpack.dev.js')

const compiler = webpack(config)

app.use(webpackDevMiddleware(compiler, {
	publicPath: config.output.publicPath
}))
app.use(require("webpack-hot-middleware")(compiler))

app.listen(3002, function () {
	console.log('at 3002')
})
