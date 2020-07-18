module.exports = {
    entry: ['@babel/polyfill', './src/main2.js'],
    output: {
        path: __dirname + '/public/',
        filename: 'dunble2.js',
    },
    devServer: {
        contentBase: __dirname + '/public'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_module/,
                use: {
                    loader: 'babel-loader',
                }
            }
        ],
    },
};