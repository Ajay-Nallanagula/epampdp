const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require('webpack').container

module.exports = {
    name: 'billing',
    mode: 'development',
    devServer: {
        port: 8083
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'billing',
            filename: 'remoteEntry.js',
            exposes: {
                './BillingIndex': './src/bootstrap.js'
            }
        }),
        new HtmlWebpackPlugin({
            template: './public/index.html'
        })
    ]
}