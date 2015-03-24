var gulp 		 = require('gulp');
var gls  		 = require('gulp-live-server');
var sass 	     = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');

// Sass compiling
// Load the npm source and the theme
gulp.task('sass', function () {
	gulp.src('src/scss/app.scss')
	.pipe(sass({
        outputStyle: 'compressed',
        errLogToConsole: true,
		includePaths: [
			'node_modules/nmss-theme-prototype/theme',
			'node_modules/nmss/src',
		]
	}))
	.pipe(autoprefixer('last 2 version'))
	.pipe(gulp.dest('dist/css'));
});


gulp.task('default', function() {

    var server = gls.static('dist');
    server.start();

	gulp.watch('src/scss/**/*.scss', ['sass']);
	gulp.watch(['dist/**/*.css', 'dist/**/*.html'], server.notify);
});