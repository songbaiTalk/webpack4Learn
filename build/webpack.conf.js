
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
    context: path.resolve(__dirname, '../'),
    entry: {
        en1: './src/mainOne.js',
        en2: './src/mainTwo.js'

    },
    output: {
        filename: '[name][hash].js',
        path: path.resolve(__dirname, '../dist')
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'index.html'
        })
    ],
    devServer: {
        contentBase: path.join(__dirname, "../dist")
    }
}