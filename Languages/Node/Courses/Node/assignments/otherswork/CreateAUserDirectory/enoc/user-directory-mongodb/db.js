var MongoClient = require('mongodb').MongoClient;

var status = null;


exports.connect = function(url, done) {
  if (status) return done();

  MongoClient.connect(url, function(err, db) {
    if (err) return done(err);
    status = db;
    done();
  });
};

exports.get = function() {
  return status;
};

exports.close = function(done) {
  if (status) {
    status.close(function(err, result) {
      status = null;
      state.mode = null;
      done(err);
    });
  }
};
