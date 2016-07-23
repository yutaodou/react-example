var path = require('path')

module.exports= {
    entry: './src/app.js',
    output: {
        path: path.resolve(__dirname,'dist'),
        publicPath:'/assets/',
        filename:'app.bundle.js'
    }
}