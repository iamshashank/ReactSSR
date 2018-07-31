const path = require('path');
module.exports = {
	//tell webpack wentry point
	entry:'./src/client/client.js',

	//wehere to put output file
	output:{
		filename:'bundle.js',
		path:path.resolve( __dirname,'public')
	},

	//tell webpack to run bable on every js file
	module: {
		rules:[
			{	//this is a regex to find every js file
				test:/\.js?$/,
				//now run loader on every file thaty passes test
				//aka .js files
				loader:'babel-loader',
				//tells webpack to not run on files in certain directories
				exclude:/node_modules/,
				options:{
					presets: [
						'react',
						'stage-0',
						['env',{targets:{browsers:['last 2 versions']}}]
					]
				}
			}
		]
	}
};