const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

module.exports = {
    mode: 'development',
    // Entry point
    entry: './src/index.js',
    // Output config
    output: {
        // Bundled file and path
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    devServer: {
        static: './dist'
    },
    module: {
        rules: [
            {
                test: /\.js$/, 
                exclude: /node_modules/, 
                loader: 'babel-loader'
            },
            {
                test: /\.scss$/i,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        // options: {
                        //     hmr: process.env.NODE_ENV === 'development',
                        // },
                    },
                    'css-loader',
                    'postcss-loader',
                    'sass-loader'
                ]
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Development',
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css',
        })
    ]
}