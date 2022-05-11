const plumberErrorHandler = function(error) {
  console.log(error.message);
  this.emit("end");
};

module.exports = plumberErrorHandler;
