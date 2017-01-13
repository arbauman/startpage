var gulp = require('gulp');
var cleanCSS = require('gulp-clean-css');
var concatCSS = require('gulp-concat-css');
var stripCSS = require('gulp-strip-css-comments');

gulp.task('minify', function() {
  return gulp.src('styles/*.css')
  .pipe(stripCSS({preserve: false}))
  .pipe(concatCSS('style.css'))
  .pipe(cleanCSS({compatibility: 'ie8'}))
  .pipe(gulp.dest('docs'));
});
