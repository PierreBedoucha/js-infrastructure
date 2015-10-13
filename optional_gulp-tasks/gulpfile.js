var gulp = require('gulp');
var connect = require('gulp-connect');
var open = require('gulp-open');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var minifyCss = require('gulp-minify-css');
var merge = require('merge-stream');


var copyJquery = 'bower_components/jquery/dist/jquery.js';
var copyAllJs = ['bower_components/jquery/dist/jquery.js', 'bower_components/bootstrap/dist/js/bootstrap.js'];
var copyCss = 'bower_components/bootstrap/dist/css/bootstrap.css';

var connectConfig = {
  port: 9602,
  root: 'app',
  host: 'localhost'
};

gulp.task('dependencies', function () {
  var streams = [];

  var scriptStream =
    gulp
      .src(copyAllJs)
      .pipe(gulp.dest('app/scripts'));
  streams.push(scriptStream);

  var styleStream =
    gulp
      .src(copyCss)
      .pipe(gulp.dest('app/styles'));
  streams.push(styleStream);

  return merge(streams);
});

gulp.task('sass', function () {
  return gulp
    .src('app/styles/style.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('app/styles'));
});

gulp.task('concat', ['dependencies', 'sass'], function () {
  var streams = [];

  var scriptStream =
    gulp
    .src(['app/scripts/jquery.js', 'app/scripts/bootstrap.js', 'app/scripts/main.js'])
    .pipe(concat('awesomeapp.js'))
    .pipe(gulp.dest('app/dist/'));
  streams.push(scriptStream);

  var styleStream =
    gulp
    .src(['app/styles/bootstrap.css', 'app/styles/style.css'])
    .pipe(concat('awesomestyle.css'))
    .pipe(gulp.dest('app/dist/'));
  streams.push(styleStream);

  return merge(streams);
});

gulp.task('minify', ['concat'], function () {
  var streams = [];

  var scriptStream =
    gulp
    .src('app/dist/awesomeapp.js')
    .pipe(uglify())
    .pipe(rename({
      extname: '.min.js'
    }))
    .pipe(gulp.dest('app/dist'));
  streams.push(scriptStream);

  var styleStream =
    gulp
    .src('app/dist/awesomestyle.css')
    .pipe(minifyCss())
    .pipe(rename({
      extname: '.min.css'
    }))
    .pipe(gulp.dest('app/dist'));
  streams.push(styleStream);

  return merge(streams);
});

gulp.task('connect', ['minify'], function () {
  connect
    .server(connectConfig);
  gulp
    .src('')
    .pipe(open({uri: 'http://localhost:9602'}));
});

gulp.task('run', ['dependencies', 'sass', 'concat', 'minify', 'connect']);