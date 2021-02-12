const path = require('path');
const config = {
    // entry: './src/index.js',
    entry: './3.letVs_ConstVs_var_ES6.js',
    output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
    },
    module: {
    rules: [
        {
            test: /\.js$/,
            use: {
                loader: 'babel-loader'
            }
        }
    ]
    }
}
module.exports = config;