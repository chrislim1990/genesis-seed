module.exports = function(grunt) {

	grunt.config('copy', {

		main: {
			files: [
			{
				expand: true, 
				cwd: 'assets/css',
				src: [
				'style.min.css'
				],
				dest:'<%= paths.wp_theme_dir %>/',
				rename: function(dest, src) {
					return dest + src.replace(".min", "");
				}
			},
			{
				expand: true, 
				cwd: 'assets/',
				src: [
				'img/**'
				], 
				dest:'<%= paths.wp_theme_dir %>'
			},
			],
		},
	});

	grunt.loadNpmTasks('grunt-contrib-copy');

};