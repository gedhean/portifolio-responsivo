var gulp = require ('gulp');
var sass = require ('gulp-ruby-sass');
var watch = require('gulp-watch');

//sass task
gulp.task('sass', function () {
	return sass('sass/**/*.sass').pipe(gulp.dest('css'));
});

//task watch
gulp.task('watch', function () {
	gulp.watch('sass/**/*.sass', ['sass']);
});

//defualt task
gulp.task('default', ['sass', 'watch']);