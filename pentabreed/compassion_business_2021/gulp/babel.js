const gulp = require('gulp'),
  liveReload = require('./helper/liveReload'),
  babel = require('gulp-babel'),
  del = require('del');

const branch = require('./branch');

const task = () => {
  return gulp
    .src(`${branch}/src/assets/babel/*.js`, {
      since: gulp.lastRun(task)
    })
    .pipe(babel())
    .pipe(gulp.dest(`${branch}/src/assets/js/`))
    .pipe(liveReload());
};
task.displayName = 'babel';

const watch = () => gulp.watch([`${branch}/src/assets/babel/**/*.js`], gulp.series(task));

const clean = callback => {
  del([`${branch}/src/assets/js/*.js`]);
  callback();
};
clean.displayName = 'babel:clean';

const dist = () => {
  return gulp.src([`${branch}/src/assets/js/**/*`]).pipe(gulp.dest(`${branch}/dist/assets/js/`));
};
dist.displayName = 'babel:dist';

module.exports = task;
module.exports.watch = watch;
module.exports.clean = clean;
module.exports.dist = dist;
