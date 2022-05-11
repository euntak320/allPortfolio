'use strict';

const gulp = require('gulp'),
  del = require('del'),
  html = require('./gulp/html'),
  image = require('./gulp/image'),
  sass = require('./gulp/sass'),
  font = require('./gulp/font'),
  media = require('./gulp/media'),
  babel = require('./gulp/babel'),
  connect = require('./gulp/connect');

const watch = callback => {
  sass.watch();
  image.watch();
  html.watch();
  babel.watch();
  callback();
};
const clean = gulp.parallel(
  (() => {
    const task = callback => {
      del(['dist']);
      callback();
    };
    task.displayName = 'dist:clean';

    return task;
  })(),
  html.clean,
  sass.clean,
  babel.clean
);
const dist = gulp.parallel(html.dist, babel.dist, image.dist, font.dist, media.dist, sass.dist);
const build = gulp.series(clean, sass, babel, html);
const serve = gulp.series(build, watch, connect);

exports.build = build;
exports.dist = gulp.series(build, dist);
exports.serve = serve;
exports.default = serve;

exports.clean = clean;
