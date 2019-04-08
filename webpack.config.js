const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    mode: 'development',
    entry: {
        index: './server/js/index.js'

    },
    devtool: 'inline-source-map',
    devServer: {
        // historyApiFallback: true,
        hot: true,
        inline: true,
        host: 'localhost', // Defaults to `localhost`
        port: 3000, // Defaults to 8080
        proxy: {
          '/api/': 'http://localhost:8080',
          }
        
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            title: 'Reservation System',
            inlineSource: '.(js|css)$' // embed all javascript and css inline
        }),
        new webpack.HotModuleReplacementPlugin({
            // multiStep: true
          })
    ],
    output: {
        filename: '[name].bundle.js',
        chunkFilename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [{
            test: /\.sass$/,
            use: ['style-loader',
                'css-loader',
                "sass-loader"
            ],
        }, ],
    },
    node: {
        fs: 'empty'
    },
};