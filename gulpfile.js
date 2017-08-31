var gulp = require ('gulp');
var sass = require ('gulp-sass');
var watch = require('gulp-watch');

//sass task
gulp.task('sass', function () {
	return gulp.src('sass/**/*.sass')
					.pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
					.pipe(gulp.dest('css'));
});

//task watch
gulp.task('watch', function () {
	gulp.watch('sass/**/*.sass', ['sass']);
});

//defualt task
gulp.task('default', ['sass', 'watch']);