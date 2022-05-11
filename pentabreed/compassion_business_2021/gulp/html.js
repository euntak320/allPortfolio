const gulp = require('gulp'),
  liveReload = require('./helper/liveReload'),
  plumber = require('gulp-plumber'),
  plumberErrorHandler = require('./helper/plumberErrorHandler'),
  fileInclude = require('gulp-file-include'),
  replace = require('gulp-replace'),
  del = require('del');

const branch = require('./branch');

const task = (_, includeChange = false) => {
  const option = includeChange ? {} : { since: gulp.lastRun(task) };

  return gulp
    .src([`${branch}/template/**/*.html`, `!${branch}/template/include/**/*`], option)
    .pipe(
      plumber({
        errorHandler: plumberErrorHandler
      })
    )
    .pipe(
      fileInclude({
        basepath: `${branch}`,
        indent: true
      })
    )
    .pipe(replace(/.*<%(.*)%>.*\n/g, ''))
    .pipe(gulp.dest(`${branch}/html/`))
    .pipe(liveReload());
};
task.displayName = 'html';

const watchHanlder = path => {
  task(() => {}, path.indexOf('include') > -1);
};

const watch = () => {
  const watch = gulp.watch([`${branch}/template/**/*.html`]);

  watch.on('add', watchHanlder);
  watch.on('change', watchHanlder);
  watch.on('unlink', watchHanlder);

  return watch;
};

const clean = callback => {
  del([`${branch}/html/`]);
  callback();
};
clean.displayName = 'html:clean';

const dist = () => {
  return gulp.src([`${branch}/html/**/*`]).pipe(gulp.dest(`${branch}/dist/html/`));
};
dist.displayName = 'html:dist';

module.exports = task;
module.exports.watch = watch;
module.exports.clean = clean;
module.exports.dist = dist;
