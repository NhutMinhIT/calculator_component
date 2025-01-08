const webpack = require('@cypress/webpack-preprocessor');

module.exports = (on) => {
    const options = {
        webpackOptions: {
            resolve: {
                extensions: ['.ts', '.tsx', '.js', '.jsx'],
            },
            module: {
                rules: [
                    {
                        test: /\.tsx?$/,
                        exclude: /node_modules/,
                        use: [
                            {
                                loader: 'ts-loader',
                                options: { transpileOnly: true },
                            },
                        ],
                    },
                ],
            },
        },
    };

    on('file:preprocessor', webpack(options));
};