const webpack = require('webpack')
const path = require('path')
const autoprefixer = require('autoprefixer')

module.exports = {
	// Enable sourcemap with eval mode
	devtool: 'eval',



	entry: [
		'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    './ui/index.js'
	],
	output: {
		publicPath: '/static/',
		path: path.join(__dirname, 'static'),
		// Merging all the file to this filename
		filename: 'bundle.js'
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin()
	],

	// Config Modules
	module: {
		loaders: [
			{
				// Use regular expression to target js and jsx file
				test: /\.(js|jsx)?$/,

				// Exclude file in node_modules
				exclude: /node_modules/,
				loaders: [
					'babel-loader'			// use babel-loader
				]
			},

			{
				// Use regx to target css 
				test: /\.css$/,
				loaders: [
					// Use css-loader before sending to style-loader
					'style-loader',
					'css-loader'
				]
			},

			{
				test: /\.scss$/,
				exclude: /node_modules/,
				loaders: [
					'style-loader',
					{
						loader: 'css-loader',		// Use css-loader to handle css file
						query: {
							sourceMap: true,
						    module: true,
						    localIdentName: '[local]___[hash:base64:5]'
						}
					},
					{
						loader: 'sass-loader',		// Use sass-loader to handle scss file before export to css file
						query: {
							outputStyle: 'expanded',
							sourceMap: true
						}
					},
					'postcss-loader'
				]
			}
		]
	},
	postcss: function () {
		return [autoprefixer]; // Add autoprefixer for css
	},
  // Setup Dev server in react-hot-loader
	devServer: {
		hot: true,
	    inline: false,
	    historyApiFallback: true,
	    proxy: {
	      '/api/*': {
	        target: 'http://127.0.0.1:5000'
	      }
	    }
	  }

}