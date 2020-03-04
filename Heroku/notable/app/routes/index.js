// routes/index.js

// Export this function, 'function(app, db)' found in note_routes.js, through your index.js:

const noteRoutes = require('./note_routes');
module.exports = function(app, db) {
  noteRoutes(app, db);
  // Other route groups could go here, in the future
};