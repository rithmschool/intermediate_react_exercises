module.exports = {
  // The absolute path to your project
  context: __dirname + "/",
  // the entry point for our app
  entry: './main.jsx',
  // where to put the compiled output (what our script tag will link to)
  output: {
    // where does it go?
    path: __dirname + "/",
    // what is the file called?
    filename: 'bundle.js'
  },
  // how can we debug our bundle? for production, we can use 'source-map'
  devtool: 'inline-source-map',
  module: {
    rules: [{
      //Check for all js files
      test: /\.jsx?$/,
      // Don't include node_modules directory in the search for js files
      exclude: /node_modules/,
      // Use the babel-loader plugin to transpile the javascript
      use: [{
        loader: 'babel-loader',
        options: { presets: ['es2015'] }
      }]
    }]
  }
};