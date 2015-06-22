module.exports = function(grunt) {

	grunt.config('copy', {

		main: {
			files: [
			{
				expand: true, 
				cwd: 'asset/css',
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
				cwd: 'asset/',
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