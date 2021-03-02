const path = require('path'); 
const config = { 
    // entry: './src/index.js',
    // entry: './03.letVs_ConstVs_var_ES6.js',
    // entry: './04.Template_&_Multilne_string.js',
    // entry: './05.Setup_webpack-dev-server_ES6.js',
    // entry: './06.ArrowFun_ES6.js',
    // entry: './07.Lexical_this_ES6.js',
    // entry: './08.Enhance_obj_ES6.js',
    // entry: './09.DestructuringArray_ES6.js',
    // entry: './10.Default_para_rest_spread.js',
    // entry: './11.ModuleSystem_import_ES6.js',
    // entry: './12.Class_module_import_ES6.js',
    // entry: './13.Class_inheritance_import_ES6.js',
    entry: './14.promise_ES6.js',
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

