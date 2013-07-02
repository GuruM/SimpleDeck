/* global module:false */
module.exports = function(grunt) {

	// Project configuration
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		meta: {
			banner:
				'/*!\n' +				
				' */'
		},

		sass: {
			main: {
				files: {
					'main.css': 'src/main.scss'
				}
			}
		},

		haml: {
			main: {
				files: {
					'index.html': 'src/index.haml'
				}
			}
		},

		coffee: {
			main: {
				files : {
					'main.js': 'src/main.coffee'
				}
			}
		},

		watch: {
			main: {
				files: [ 'src/*' ],
				tasks: 'default'
			}
		}

	});

	// Dependencies
	grunt.loadNpmTasks( 'grunt-contrib-coffee' );
	grunt.loadNpmTasks( 'grunt-contrib-haml' );
	grunt.loadNpmTasks( 'grunt-contrib-watch' );
	grunt.loadNpmTasks( 'grunt-contrib-sass' );

	grunt.registerTask( 'default', [ 'sass', 'haml', 'coffee' ] );


	// Serve presentation locally
	grunt.registerTask( 'serve', [ 'watch' ] );

};
