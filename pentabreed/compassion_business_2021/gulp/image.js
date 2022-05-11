const gulp = require('gulp'),
  liveReload = require('./helper/liveReload'),
  imagemin = require('gulp-imagemin');

const branch = require('./branch');

const task = () => {
  return gulp.src([`${branch}/src/assets/image/**/*`]).pipe(liveReload());
};
task.displayName = 'image';

const watch = () => gulp.watch([`${branch}/src/assets/image/**/*`], gulp.series(task));

const dist = () => {
  return gulp
    .src([`${branch}/src/assets/image/**/*`])
    .pipe(imagemin())
    .pipe(gulp.dest(`${branch}/dist/assets/image/`));
};
dist.displayName = 'image:dist';

module.exports = task;
module.exports.watch = watch;
module.exports.dist = dist;
