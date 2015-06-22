module.exports = function(grunt) {

	grunt.config('autoprefixer', {

		file: {
			src: [
			'<%= paths.sass.dest %>/*.css'
			]
		}

	});

	grunt.loadNpmTasks('grunt-autoprefixer');

};