var gulp = require('gulp');
var gls  = require('gulp-live-server');
var sass = require('gulp-sass');

// Sass compiling
// Load the npm source and the theme
gulp.task('sass', function () {
	gulp.src('scss/app.scss')
	  .pipe(sass({
	    includePaths: [
	    	'node_modules/nmss-theme-sportmaniacs/theme',
	    	'node_modules/nmss/src',
    	]
	  }))
	  .pipe(gulp.dest('dist/css'));
});


gulp.task('default', function() {

    var server = gls.static('dist');
    server.start();

	gulp.watch('src/scss/**/*.scss', ['sass']);
	gulp.watch(['dist/**/*.css', 'dist/**/*.html'], server.notify);
});