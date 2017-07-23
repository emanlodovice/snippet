var path = require('path');
var webpack = require('webpack');
var BundleTracker = require('webpack-bundle-tracker');

module.exports = {
    context: __dirname,
    entry: './src/static/js/index.jsx',

    output: {
        path: __dirname + '/src/static/bundles',
        filename: '[name]_bundle.js'
    },

    plugins: [
        new BundleTracker({filename: './webpack-stats.json'})
    ],

    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.js?$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.less$/,
                loader: 'style-loader'
            },
            {
                test: /\.less$/,
                loader: 'css-loader'
            },
            {
                test: /\.less$/,
                loader: 'less-loader'
            },
        ]
    },

};