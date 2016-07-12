/*
This file in the main entry point for defining Gulp tasks and using Gulp plugins.
Click here to learn more. http://go.microsoft.com/fwlink/?LinkId=518007
*/

var gulp = require('gulp'),
    concat = require('gulp-concat');

gulp.task('default', function () {
    return gulp.src('angular/*.js')
        .pipe(concat('angular_app.js'))
        .pipe(gulp.dest('wwwroot/js/'));
});