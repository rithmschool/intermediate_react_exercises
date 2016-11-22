module.exports={
	entry: "./index.js",
	output: {
		filename: "bundle.js",
		path: "./"
	},
	module: {
		loaders: [{
			loader: "babel",
			test: /\.jsx?$/,
			exclude: /node_modules/
		}]
	}
}