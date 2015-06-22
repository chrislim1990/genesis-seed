module.exports = function(grunt) {

	grunt.config('php', {

		watch: {
			options: { 
				hostname:'0.0.0.0',
				open: true,
				port: 8001
			}
		}

	});

	grunt.loadNpmTasks('grunt-php');

};