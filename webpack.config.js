const path = require("path");
const htmlPlugin = require("html-webpack-plugin");
const cssPlugin = require("mini-css-extract-plugin");

module.exports = {
	entry: "./index.js",
	output: {
		filename: "budle.js",
		path: path.resolve(__dirname, "Dist"),
	},
	mode: "development",
	devtool: false,
	devServer: {
		port: 3874,
		inline: true,
		hot: true,
		open: true,

		compress: true,
	},
	module: {
		rules: [
			{
				test: /\.(js||jsx)?$/,
				use: {
					loader: "babel-loader",
				},
			},
			{
				test: /\.css?$/,
				use: [cssPlugin.loader, "css-loader"],
			},
			{
				test: /\.(jpg||png)?$/,
				use: "url-loader",
			},
		],
	},
	plugins: [
		new htmlPlugin({
			template: "./index.html",
		}),

		new cssPlugin({
			filename: "[name].css",
			chunkFilename: "[id].css",
		}),
	],
};
