const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
    entry: "./src/index.js",
    mode: "production",
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "Webpack demo",
            template: "./src/index.html"
        })
    ],
    devServer: {
        port: 3001,
        compress: true,
        static: {
            directory: path.join(__dirname, 'dist'),
        },
        //  contentBase: './dist',
    },
    devTools: 'inline-source-map'

}