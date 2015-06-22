module.exports = function(grunt) {

	grunt.initConfig({

		pkg: require('./package.json'),

		paths:{

			base_src: 'src',
			base_dest: 'asset',
			wp_theme_dir: '../wp/wp-content/themes/newsdc',

			sass:{
				src:'<%= paths.base_src %>/sass',
				dest:'<%= paths.base_dest %>/css'
			},

			js:{
				src:'<%= paths.base_src %>/js',
				dest:'<%= paths.base_dest %>/js'
			}

		}

	});

	/* Load per-task config from separate files. */
	grunt.loadTasks('grunt');

	/* Register alias */
	grunt.registerTask('default',['php', 'sass', 'autoprefixer', 'watch']);

	grunt.registerTask('dist',['sass', 'autoprefixer', 'copy']);

}