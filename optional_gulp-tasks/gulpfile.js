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

var styleFolder = 'app/styles';
var scriptFolder = 'app/scripts';
var distFolder = 'app/dist';

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
            .pipe(gulp.dest(scriptFolder));
    streams.push(scriptStream);

    var styleStream =
        gulp
            .src(copyCss)
            .pipe(gulp.dest(styleFolder));
    streams.push(styleStream);

    return merge(streams);
});

gulp.task('sass', function () {
    return gulp
        .src(styleFolder + '/style.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest(styleFolder));
});

gulp.task('concat', ['dependencies', 'sass'], function () {
    var streams = [];

    var scriptStream =
        gulp
            .src([scriptFolder + '/jquery.js', scriptFolder + '/bootstrap.js', scriptFolder + '/main.js'])
            .pipe(concat('awesomeapp.js'))
            .pipe(gulp.dest(distFolder))
            .pipe(uglify())
            .pipe(rename({
                extname: '.min.js'
            }))
            .pipe(gulp.dest(distFolder));
    streams.push(scriptStream);

    var styleStream =
        gulp
            .src([styleFolder  +'/bootstrap.css', styleFolder + '/style.css'])
            .pipe(concat('awesomestyle.css'))
            .pipe(gulp.dest(distFolder))
            .pipe(minifyCss())
            .pipe(rename({
                extname: '.min.css'
            }))
            .pipe(gulp.dest(distFolder));
    streams.push(styleStream);

    return merge(streams);
});

gulp.task('connect', ['concat'], function () {
    connect
        .server(connectConfig);
    gulp
        .src('')
        .pipe(open({uri: 'http://localhost:9602'}));
});

gulp.task('run', ['dependencies', 'sass', 'concat', 'connect']);