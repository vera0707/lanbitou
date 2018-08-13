const path = require('path');
const glob = require('glob');
const webpack = require("webpack");
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const PurifyCSSPlugin = require('purifycss-webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');


module.exports = {
    entry: {
        main: './src/main.js'
    },
    output:{
        path: path.resolve(__dirname,'dist'),
        filename: '[name]-[hash].js'
    },
    module:{
        rules: [
            {
                test: /\.(css|less$)$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: ["css-loader","less-loader","postcss-loader"]
                })
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            name: 'assets/[name]-[hash].[ext]',
                            limit: 8192,
                            outputPath: ''
                        }
                    }
                ]
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ["env","react"]
                    }
                }
            }
        ]
    },
    plugins:[
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        new ExtractTextPlugin("common.css"),
        // new PurifyCSSPlugin({
        //     paths: glob.sync(path.join(__dirname, 'src/*.html'))
        // }),
        // new CopyWebpackPlugin([
        //    {
        //        from: 'path/to/file.txt',
        //        to: 'file/without/extension',
        //        toType: 'file'
        //    }
        // ])
        new webpack.ProvidePlugin({
            react: 'react'
        }),
    ],
    // optimization:{
    //     splitChunks: {
    //         cacheGroups: {
    //             react:{
    //                 chunk: 'initial',
    //                 name: 'react',
    //                 enforce: true
    //             }
    //         }
    //     }
    // },
    devServer: {
        proxy:{
            '': 'http://localhost:3000/',
            secure: false,
            changeOrigin: true
        },
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        open: true,
        host: 'localhost',
        port: 9000
    }
};