var gulp = require('gulp');
var connect = require('gulp-connect');
var open = require('gulp-open');


var copyJquery = 'bower_components/jquery/dist/jquery.js';
var copyAllJs = ['bower_components/jquery/dist/jquery.js', 'bower_components/bootstrap/dist/js/bootstrap.js'];
var copyCss = 'bower_components/bootstrap/dist/css/bootstrap.css';

var connectConfig = {
  port: 9602,
  root: 'app',
  host: 'localhost'
};

gulp.task('dependencies', function(){
  gulp
    .src(copyJquery)
    .pipe(gulp.dest('app/scripts'));
  //gulp
  //  .src(copyCss)
});

gulp.task('sass', funciton(){

});

gulp.task('connect', function(){
  connect
    .server(connectConfig);
  gulp
    .src('')
    .pipe(open({uri: 'http://localhost:9602'}));
});