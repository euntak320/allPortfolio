const gulp = require('gulp');

const dist = () => {
  return gulp.src(['src/assets/font/**/*']).pipe(gulp.dest('dist/assets/font/'));
};
dist.displayName = 'font:dist';

module.exports.dist = dist;
