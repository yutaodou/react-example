var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
    template: __dirname + '/src/index.html',
    filename:'index.html',
    insert:'body'
});

module.exports= {
    entry: ['./src/app.js'],
    output: {
        path: path.resolve(__dirname,'dist'),
        filename:'app.bundle.js'
    },
    module: {
      loaders: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'babel',
          query: {
            presets: ['react']
          }
        }
      ]
  },
  plugins: [HtmlWebpackPluginConfig]
}
