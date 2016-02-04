module.exports = function (grunt) {

  grunt.initConfig({

      sass: {

        dist: {
          options: {
            style: 'expanded',
            compass: true,
            require: 'susy'
          },
          files: {
            'styles/main.css': 'styles/main.scss'
          }
        }
      },

      browserify: {
        dist: {
          files: {
            'build/app.js': ['scripts/init.js']
          }
        }
      }
  });

  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-contrib-sass');

  grunt.registerTask('default', ['browserify', 'sass']);
};
