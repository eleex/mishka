var gulp = require('gulp'),
    cleanCSS = require('gulp-clean-css'),
    concat = require('gulp-concat'),
    browserSync = require('browser-sync').create();
 
gulp.task('concat-index', function() {
  return gulp.src('css/index/*.css')
    .pipe(concat('index.css'))
    .pipe(cleanCSS())
    .pipe(gulp.dest('build/index/'))
    .pipe(browserSync.reload({
        stream:true
    }));
});

gulp.task('concat-catalog', function() {
  return gulp.src('css/catalog/*.css')
    .pipe(concat('catalog.css'))
    .pipe(cleanCSS())
    .pipe(gulp.dest('build/catalog/'))
    .pipe(browserSync.reload({
        stream:true
    }));
});

gulp.task('concat-form', function() {
  return gulp.src('css/form/*.css')
    .pipe(concat('form.css'))
    .pipe(cleanCSS())
    .pipe(gulp.dest('build/form/'))
    .pipe(browserSync.reload({
        stream:true
    }));
});

gulp.task('watcher', function(){
  gulp.watch('css/index/*.css', gulp.series('concat-index'));
  gulp.watch('css/catalog/*.css', gulp.series('concat-catalog'));
  gulp.watch('css/form/*.css', gulp.series('concat-form'))
});

gulp.task('serve', function() {
  browserSync.init({
      server: {
          baseDir: "./"
      }
  });
  browserSync.watch('*.html',browserSync.reload)
});

gulp.task('default', gulp.series(
  gulp.parallel('concat-index', 'concat-catalog', 'concat-form'),
  gulp.parallel('watcher', 'serve')
));