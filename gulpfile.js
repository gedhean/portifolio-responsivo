var gulp = require('gulp');
var sass = require('gulp-ruby-sass');
//sass task
gulp.task('sass', function(){
	return sass('sass/*.sass').pipe(gulp.dest('css'));
});

//defualt task
gulp.task('default', function(){
	console.log("olá");
});