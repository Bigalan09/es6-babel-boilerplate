const nodeExternals = require("webpack-node-externals");
const path = require('path');

let env = process.env.WEBPACK_ENV;

module.exports = {
    entry: path.resolve(__dirname, 'app.js'),
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'app.js'
    },
    target: "node",
    externals: [nodeExternals()],
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: "babel-loader",
                include: __dirname,
                exclude: /node_modules/
            }
        ]
    }
};