module.exports = function(grunt) {

	grunt.initConfig({

		pkg: require('./package.json'),

		paths:{

			sass:{
				src:'assets/sass',
				dest:'assets/css'
			},

			js:{
				src:'assets/js',
				dest:'assets/js'
			}

		}

	});

	/* Load per-task config from separate files. */
	grunt.loadTasks('grunt');

	/* Register alias */
	grunt.registerTask('default',['php', 'sass', 'autoprefixer', 'watch']);

	grunt.registerTask('dist',['sass', 'autoprefixer', 'copy']);

}