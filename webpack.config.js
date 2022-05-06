const path = require('path');

module.exports = {
    entry: './src/index.js',
    mode: 'development',
    target: ['web', 'es5'],
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.(png|jpe?g|gif|svg)$/i,
                use: [
                    {
                        loader: 'file-loader',
                    },
                ],
            },
            {
                test: /\.m?js$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [ ['@babel/preset-env', { "useBuiltIns": "entry", corejs: '3' }] ]
                    }
                }
            }
        ],
    }
};