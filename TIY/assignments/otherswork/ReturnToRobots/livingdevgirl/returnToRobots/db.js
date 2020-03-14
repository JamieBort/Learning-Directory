const MongoClient = require('mongodb').MongoClient;

let connection = null;

exports.connect = function(url, done) {
  if (connection) return done();

  MongoClient.connect(url, function(err, db) {
    if (err) return done(err);
    connection = db;
    done();
  });
};

exports.get = function() {
  console.log(connection)
  return connection;
};

exports.close = function(done) {
  if (connection) {
    connection.close(function(err, result) {
      connection = null;
      state.mode = null;
      done(err);
    });
  }
};
