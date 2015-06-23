module.exports = function(grunt) {

	grunt.config('copy', {

		main: {
			files: [
			{
				expand: true,
				cwd: 'sources/',
				src: ['index.php','assets/**','gruntfile.js'],
				dest: 'dist/'
			},
			]
		}

	});

	grunt.loadNpmTasks('grunt-contrib-copy');

};