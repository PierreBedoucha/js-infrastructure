'use strict';

module.exports = function(grunt) {
  require('load-grunt-tasks')(grunt);

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
          },
          {
            expand: true,
            cwd: 'bower_components/bootstrap/dist/css/',
            src: 'bootstrap.css',
            dest: 'app/styles/'
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
      dist: {
        files: {
          'app/styles/style.css': 'app/styles/style.scss'
        }
      }
    },
    concat: {
      dist: {
        src: ['app/scripts/jquery.js', 'app/scripts/bootstrap.js', 'app/scripts/main.js'],
        dest: 'app/dist/awesomeapp.js'
      },
      jsandcss: {
        files: {
          'app/dist/awesomeapp.js': ['app/scripts/jquery.js', 'app/scripts/bootstrap.js', 'app/scripts/main.js'],
          'app/dist/awesomestyle.css': ['app/styles/bootstrap.css', 'app/styles/style.css']
        }
      }
    },
    uglify: {
      jsfiles: {
        files: {
          'app/dist/awesomeapp.min.js': ['app/dist/awesomeapp.js']
        }
      }
    },
    cssmin: {
      cssfiles: {
        files: {
          'app/dist/awesomestyle.min.css': ['app/dist/awesomestyle.css']
        }
      }
    }
  };

  grunt.initConfig(gruntConfig);

  grunt.registerTask('dependencies', [
    'copy:all'
  ]);

  grunt.registerTask('run', [
    'copy:all',
    'sass',
    'concat:jsandcss',
    'uglify:jsfiles',
    'cssmin:cssfiles',
    'connect:serve'
  ])
};