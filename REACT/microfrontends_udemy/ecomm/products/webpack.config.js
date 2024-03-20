const HtmlWebpackPlugin = require("html-webpack-plugin");
//const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')
const { ModuleFederationPlugin } = require("webpack").container;

module.exports = {
    mode: 'development',
    devServer: {
        port: 8081
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'products',
            // remoteEntry is like a manifest file(wsdl), it emits metadata about products project
            // container app will read this remoteEntry.js file to know 
            //what does product app do?
            //What are the files product app emit? 
            //what can as a containe access from product app?
            //This is like *.wsdl file in asp.net web services, which contain metadata about the webservice.
            filename: 'remoteEntry.js',
            exposes: {
                './ProductsIndex': './src/bootstrap.js'
            },
            //shared: ['faker'],
            shared: {
                faker: {
                    singleton: true
                }
            }
        }),
        new HtmlWebpackPlugin({
            template: './public/index.html'
        })
    ]
}