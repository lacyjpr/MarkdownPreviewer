// Boilerplate credit Kornil: https://github.com/Kornil/simple-react-app

const path = require('path');
const webpack = require('webpack');
const HTMLWebpackPlugin = require('html-webpack-plugin');

const dev = process.env.NODE_ENV !== 'production' && process.argv.indexOf('-p') === -1;

const HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
    template: path.join(__dirname, '/src/index.html'),
    filename: 'index.html',
    inject: 'body',
});

const DefinePluginConfig = new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify('production'),
});

const UglifyJsPluginConfig = new webpack.optimize.UglifyJsPlugin({
    sourceMap: true,
    beautify: false,
    mangle: {
        screw_ie8: true,
    },
    compress: {
        screw_ie8: true,
    },
    comments: false,
});

module.exports = {
    devServer: {
        host: 'localhost',
        port: '3000',
        hot: true,
        headers: {
            'Access-Control-Allow-Origin': '*',
        },
    },
    entry: [
        'react-hot-loader/patch',
        path.join(__dirname, '/src/index.jsx'),
    ],
    devtool: 'cheap-module-source-map',
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loaders: ['babel-loader'],
            },
            {
                test: /\.scss$/,
                loader: 'style-loader!css-loader!sass-loader',
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                },
            },
        ],
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, '/dist'),
    },
    plugins: dev ?
    [
        HTMLWebpackPluginConfig,
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(),
    ] :
  [HTMLWebpackPluginConfig, DefinePluginConfig, UglifyJsPluginConfig],
};