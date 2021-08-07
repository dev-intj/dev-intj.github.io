
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const React = require('react');
const ReactDOM = require('react-dom');

module.exports = {
    entry: path.join(__dirname, "src", "index.js"),
    devServer: {
        historyApiFallback: {
            index: './index.html'
        }
    },
    output: {
        path: path.resolve(__dirname, "/"),
    },
    module: {
        rules: [
            {
                test: /\.?js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env", ["@babel/preset-react", {
                            "runtime": "automatic"
                        }]]
                    }
                }
            },
            {
                test: /\.(png|jp(e*)g|svg|gif)$/,
                use: ['file-loader'],
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    // Creates `style` nodes from JS strings
                    "style-loader",
                    // Translates CSS into CommonJS
                    "css-loader",
                    // Compiles Sass to CSS
                    "sass-loader",
                ],
            },
        ]
    },
    plugins: [
        new webpack.ProvidePlugin({
            "React": "react",
        }),
        new HtmlWebpackPlugin({
            inject: true,
            template: path.join(__dirname, "src", "index.html"),
            favicon: "./src/assets/images/favicon.ico"
        }),
    ],
}