module.exports = function(grunt) {

	grunt.config('sass', {

		dist: {                           
			options: { 
				style: 'compressed',
				update: true
			},

			files: {                       
				'<%= paths.sass.dest %>/style.min.css': '<%= paths.sass.src %>/style.scss',
			}
		}

	});

	grunt.loadNpmTasks('grunt-contrib-sass');

};