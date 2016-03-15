var gulp = require('gulp');

var sass=require('gulp-sass');
var concat=require('gulp-concat');
var uglify =require('gulp-uglify');
var rename=require('gulp-rename');
var gutil = require('gulp-util');

gulp.task('sass', function() {
   var cssTask1 = gulp.src('styles/app.scss')
        .pipe(sass())
        .pipe(gulp.dest('build'))
        .pipe(sass().on('error', gutil.log));

        return cssTask1;
     });
gulp.task('scripts', function() {
    var cssTask2 = gulp.src('scripts/**/*.js')
    .pipe(concat('app.js'))
    .pipe(gulp.dest('build'));

    return cssTask2;
});

gulp.task('default', ['sass', 'scripts']);