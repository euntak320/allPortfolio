const gulp = require('gulp'),
  gulpif = require('gulp-if'),
  liveReload = require('./helper/liveReload'),
  plumber = require('gulp-plumber'),
  sourcemaps = require('gulp-sourcemaps'),
  gulpSass = require('gulp-sass'),
  postCSS = require('gulp-postcss'),
  autoprefixer = require('autoprefixer'),
  purifyCSS = require('gulp-purifycss'),
  cleanCSS = require('gulp-clean-css'),
  plumberErrorHandler = require('./helper/plumberErrorHandler'),
  del = require('del');

const branch = require('./branch');
// .src([`${branch}/src/${branch}/sass/*.scss`, `${branch}/src/${branch}/sass/**/*.scss`])

const task = () => {
  return gulp
    .src([`${branch}/assets/scss/**/*.scss`])
    .pipe(
      plumber({
        errorHandler: plumberErrorHandler
      })
    )
    .pipe(sourcemaps.init())
    .pipe(
      gulpSass({
        outputStyle: 'expanded'
      })
    )
    .pipe(postCSS([autoprefixer()]))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest(`${branch}/assets/css/`))
    .pipe(liveReload());
};
task.displayName = 'scss';

const watch = () => gulp.watch([`${branch}/assets/scss/**/*.scss`], gulp.series(task));

const clean = callback => {
  del([`${branch}/assets/css/style.css`, `${branch}/assets/css/*.map`]);
  callback();
};
clean.displayName = 'scss:clean';

const dist = () => {
  return gulp
    .src([`${branch}/assets/css/*`])
    //.pipe(purifyCSS(['${branch}/src/assets/js/**/*.js', '${branch}/src/html/**/*.html']))
    //.pipe(cleanCSS())
    .pipe(gulp.dest(`${branch}/dist/assets/css/`));
};
dist.displayName = 'scss:dist';

module.exports = task;
module.exports.watch = watch;
module.exports.clean = clean;
module.exports.dist = dist;
