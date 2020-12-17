const gulp = require('gulp');
const browserSync = require('browser-sync').create();

gulp.task('browser-sync', function() {
  browserSync.init({
    server: {
      baseDir: "./public"
    },
    port: process.env.PORT || 80,
    online: true,
    notify: false
  });
});

gulp.task('default', ['browser-sync'], function() {
  gulp.watch("public/**/*").on('change', browserSync.reload);
});
