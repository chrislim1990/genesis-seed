module.exports = function(grunt) {

	grunt.config('prompt', {

		test: {
			options: {
				questions: [
				{
					config: 'name',
					type: 'input',
					message: 'Project name'
				},
				{
					config: 'grunt-modules',
					type: 'checkbox',
					message: 'Choose grunt modules needed',
					choices: [
					'autoprefixer', 
					'contrib-copy', 
					'contrib-sass', 
					'contrib-watch', 
					'php'
					],
				}
				],
				then: function(results){
					
					var distDir = 'dist/';
					var sourcesDir = 'sources/';

					var packageJson = {
						'name'           : results['name'],
						'version'        : '0.0.0',
						'author'         : 'LX2',
						'private'        : true,
						'devDependencies': {}
					};

					var dependencies = packageJson['devDependencies'];
					var modules = results['grunt-modules'];

					for (var i = modules.length - 1; i >= 0; i--) {
						var moduleName = modules[i];
						var moduleJs = 'grunt/'+moduleName+'.js';
						dependencies['grunt-'+moduleName]= '*';
						grunt.file.copy( sourcesDir + moduleJs, distDir + moduleJs );
					};

					grunt.file.write( distDir+'package.json', JSON.stringify(packageJson, null, 2));

				}
			}
		}
	});

grunt.loadNpmTasks('grunt-prompt');

};