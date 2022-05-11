const gulp = require('gulp'),
  connect = require('gulp-connect'),
  open = require('gulp-open');

const branch = require('./branch');

const port = 7000;

const connectOpen = () => {
  gulp.src(`${branch}/html/`, {allowEmpty: true}).pipe(
    open({
      uri: `http://localhost:${port}/html/`,
    }),
  );
};

const task = callback => {
  connect.server(
    {
      root: `${branch}`,
      port,
      livereload: true,
    },
    function() {
      this.server.on('close', callback);
    },
  );
  connectOpen();
};
task.displayName = 'connect';

module.exports = task;
