module.exports = function(grunt) {

  grunt.config('watch', {

    sass:{
      files: [ '<%= paths.sass.src %>/*.scss'],
      tasks: ['sass', 'autoprefixer'],
    },

    livereload: {
      files: [
      '*.php',
      '<%= paths.sass.dest %>/*.css',
      ],

      options: { livereload: 7000 },
    }
    
  });

  grunt.loadNpmTasks('grunt-contrib-watch');

};