var gulp = require('gulp');
var browserSync = require('browser-sync').create();

gulp.task('browser-sync', function() {
	browserSync.init({
		server: './www'
	});
});

gulp.task('serve', function() {
	browserSync.init({
		server: './www'
	});

	gulp.watch(['www/**/*js', 'www/**/*css', 'www/**/*html'], browserSync.reload);
});