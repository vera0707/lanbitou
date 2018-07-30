const path = require('path');
const glob = require('glob');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const PurifyCSSPlugin = require('purifycss-webpack');


module.exports = {
    entry: {
        main: './src/main.js'
    },
    output:{
        path: path.resolve(__dirname,'dist'),
        filename: '[name].js'
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
            }
        ]
    },
    plugins:[
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        new ExtractTextPlugin("common.css"),
        new PurifyCSSPlugin({
            paths: glob.sync(path.join(__dirname, 'src/*.html'))
        })
    ],
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        open: true,
        host: 'localhost',
        port: 9000
    }
};