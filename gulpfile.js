'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');

sass.compiler = require('node-sass');

gulp.task('sass', function() {
    return gulp.src('src/scss/style.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./css'));
});

gulp.task('sass:watch', function() {
    gulp.watch('src/scss/style.scss', ['sass']);
});

gulp.task('watcher', function(){
	

		gulp.watch('src/scss/**/*.scss', gulp.series('sass'));
//    gulp.watch('images/**', gulp.series('test_image'));



});