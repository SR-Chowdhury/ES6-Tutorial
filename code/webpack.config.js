const path = require('path'); 
const config = { 
    // entry: './src/index.js',
    // entry: './3.letVs_ConstVs_var_ES6.js',
    // entry: './4.Template_&_Multilne_string.js',
    // entry: './5.Setup_webpack-dev-server_ES6.js',
    // entry: './6.ArrowFun_ES6.js',
    // entry: './7.Lexical_this_ES6.js',
    // entry: './8.Enhance_obj_ES6.js',
    // entry: './9.DestructuringArray_ES6.js',
    // entry: './10.Default_para_rest_spread.js',
    // entry: './11.ModuleSystem_import_ES6.js',
    // entry: './12.Class_module_import_ES6.js',
    entry: './13.Class_inheritance_import_ES6.js',
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

