/**************************
* Bismillahir Rahmanir Rahim
* ES6 T-02
* Intoduction of ECMAScript 2016(ES6) 
* Author : Shihan Chowdhury
* Thanks to - Twinkle Cats 
**************************/

/*
Install ES6 in a project follow below step:
1. run terminal
2. npm init -y

3. npm install --save-dev babel-core
4. npm install --save-dev babel-preset-env
	or
3. npm install --save-dev @babel/core
4. npm install --save-dev @babel/preset-env

5. create a .babelrc file and write 
	{
	    "presets": [
	    	"babel-preset-env"
	    		or
		"@babel/preset-env"
	    ]
	}

6. npm install --save-dev babel-loader
7. npm install --save-dev webpack
8. npm install --save-dev webpack-cli -D
9. create a 'src' folder and create a file 'index.js' in it

10. create a webpack.config.js file and write

	const path = require('path');

	const config = {
	    entry: './src/index.js',
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

10. finally edit package.json file

	  "scripts": {
	    "dev": "webpack --mode development",
	    "build": "webpack --mode production"
	  },
	 
Done. Thanks	 
*/


