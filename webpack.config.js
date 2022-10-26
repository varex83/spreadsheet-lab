const path = require('path');
const webpack = require("webpack");
const dotenv = require('dotenv').config({ path: __dirname + '/.env' })
const isDevelopment = process.env.NODE_ENV !== 'production'

module.exports = {
    entry: {
        'my-lib': './src/index.ts',
        'my-lib.min': './src/index.ts'
    },
    output: {
        path: path.resolve(__dirname, 'public', 'dist'),
        filename: 'index.js',
        libraryTarget: 'umd',
        library: 'MyLib',
        umdNamedDefine: true
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js']
    },
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    plugins: [
        new webpack.ProvidePlugin({
            process: 'process/browser',
        }),
    ].filter(Boolean),
}