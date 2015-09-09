'use strict';

module.exports = function(grunt) {
  //require('load-grunt-tasks')(grunt);
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-connect');

  var gruntConfig = {
    copy: {
      jquery: {
        expand: true,
        cwd: 'bower_components/jquery/dist/',
        src: 'jquery.js',
        dest: 'app/scripts/'
      },
      all: {
        files: [
          {
            expand: true,
            cwd: 'bower_components/jquery/dist/',
            src: 'jquery.js',
            dest: 'app/scripts/'
          },
          {
            expand: true,
            cwd: 'bower_components/bootstrap/dist/js/',
            src: 'bootstrap.js',
            dest: 'app/scripts/'
          }
        ]
      }
    },
    connect: {
      options: {
        port: 9600,
        hostname: 'localhost',
        base: 'app',
        keepalive: true,
        open: true
      },
      serve: {
        options: {
          port: 9601
        }
      }
    },
    sass: {

    }
  };

  grunt.initConfig(gruntConfig);

  grunt.registerTask('dependencies', [
    'copy:jquery'
  ]);
};