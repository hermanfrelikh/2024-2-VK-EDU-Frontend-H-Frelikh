'use strict';

const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');

const SRC_PATH = path.resolve(__dirname, 'src');
const BUILD_PATH = path.resolve(__dirname, 'build');

module.exports = {
    context: SRC_PATH,
    entry: {
        main: './main.js',
        index: './index.js'
    },
    output: {
        path: BUILD_PATH,
        filename: '[name].bundle.js'
    },
    module: {
        strictExportPresence: true,
        rules: [
            {
                test: /\.js$/,
                include: SRC_PATH,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env']
                        },
                    },
                ],
            },
            {
                test: /\.css$/,
                include: SRC_PATH,
                use: [
                    {
                        loader: MiniCSSExtractPlugin.loader,
                    },
                    {
                        loader: 'css-loader',
                    },
                ],
            },
        ],
    },
    plugins: [
        new MiniCSSExtractPlugin({
            filename: '[name].css',
        }),
        new HTMLWebpackPlugin({
            filename: 'main.html',
            template: './main.html',
            chunks: ['main']
        }),
        new HTMLWebpackPlugin({
            filename: 'index.html',
            template: './index.html',
            chunks: ['index']
        })
    ],
    devServer: {
        static: BUILD_PATH,
        compress: true,
        port: 9001,
        open: 'main.html',
    }
    
};

