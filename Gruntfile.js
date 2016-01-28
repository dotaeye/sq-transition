var webpack = require('webpack');
var path = require('path');
var fs = require('fs');
var babelrc = fs.readFileSync('./.babelrc');
var babelLoaderQuery = {};

try {
    babelLoaderQuery = JSON.parse(babelrc);
    console.log(babelLoaderQuery);
} catch (err) {
    console.error('==>     ERROR: Error parsing your .babelrc.');
    console.error(err);
}

module.exports = function (grunt) {
    require("load-grunt-tasks")(grunt);

    grunt.initConfig({

  		clean: ['./dist','./lib'],

  		less: {
            dev: {
                files: {
                    "./dist/sq-transition.css": "./assets/sq-transition.less"
                }
            },
            example: {
                files: {
                    "./example/example.css": "./example/example.less"
                }
            },
            prod: {
                files: {
                    "./dist/sq-transition.min.css": "./assets/sq-transition.less"
                },
                options: {
                    compress: true
                }
            }
        },
        webpack: {
        	dev: {
   				resolve: {
                    extensions: ['', '.js', '.jsx']
                },
                entry: './src/sq-transition.js',
                output: {
                    path: './dist',
                    filename: 'sq-transition.js'
                },
                module:{
                	 loaders: [{
                            test: /\.jsx?$/,
                            exclude: /node_modules/,
                            loaders: ['babel?' + JSON.stringify(babelLoaderQuery)]
                     }]
                }
        	},
            example: {
                resolve: {
                    extensions: ['', '.js', '.jsx']
                },
                entry: './example/example.js',
                output: {
                    path: './example',
                    filename: 'example.bundle.js'
                },
                module:{
                    loaders: [{
                        test: /\.jsx?$/,
                        exclude: /node_modules/,
                        loaders: ['babel?' + JSON.stringify(babelLoaderQuery)]
                        }
                    ]
                }
            },
        	lib: {
   				resolve: {
                    extensions: ['', '.js', '.jsx']
                },
                entry: './src/sq-transition.js',
                output: {
                    path: './lib',
                    filename: 'sq-transition.js'
                },
                module:{
                	 loaders: [{
                            test: /\.jsx?$/,
                            exclude: /node_modules/,
                            loaders: ['babel?' + JSON.stringify(babelLoaderQuery)]
                        }
                    ]
                },
                externals: {
                    react: 'React',
                    'react-dom': 'ReactDOM',
                    'classnames': 'classnames',
                    blacklist: 'blacklist'
                }
        	},
        	prod: {
				resolve: {
                    extensions: ['', '.js', '.jsx']
                },
                entry: './src/sq-transition.js',
                output: {
                    path: './dist',
                    filename: 'sq-transition.min.js'
                },
                module:{
                	 loaders: [{
                            test: /\.jsx?$/,
                            exclude: /node_modules/,
                            loaders: ['babel?' + JSON.stringify(babelLoaderQuery)]
                        }
                    ]
                },
                plugins: [
                	new webpack.optimize.UglifyJsPlugin({
                        compress: {
                            warnings: false
                        },
                        output: {
                            comments: false
                        }
                    })
                ]

        	}
        }
    });
	grunt.registerTask('default', ['clean', 'less:dev','less:example','less:prod','webpack:lib','webpack:dev','webpack:example','webpack:prod']);
}