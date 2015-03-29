var gulp = require('gulp'),
    log = require('gulp-util').log,
    jade = require('gulp-jade'),
    stylus = require('gulp-stylus'),
    coffee = require('gulp-coffee');

gulp.task('templates', function() {
  var locs = {};
  gulp.src('./src/*.jade')
    .pipe(jade({locals: locs}))
    .pipe(gulp.dest('./'))
});

gulp.task('scripts', function() {
  gulp.src('./src/scripts.coffee')
    .pipe(coffee({bare: true}).on('error', log))
    .pipe(gulp.dest('./assets'))
});

gulp.task('styles', function() {
  gulp.src('./src/styles.styl')
    .pipe(stylus())
    .pipe(gulp.dest('./assets'))
});

gulp.task('watch', function() {
	log('Watching files');
	gulp.watch('./src/*', ['build']);
});

//define cmd line default task
gulp.task('build', ['templates', 'styles', 'scripts']);
gulp.task('default', ['build', 'watch']);
