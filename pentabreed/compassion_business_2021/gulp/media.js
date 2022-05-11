const gulp = require('gulp');

const dist = () => {
  return gulp.src(['src/assets/media/**/*']).pipe(gulp.dest('dist/assets/media/'));
};
dist.displayName = 'media:dist';

module.exports.dist = dist;
