// When refactoring this consult ben's and kelly's

// ========== Define packages ==========
// use express, express-handlebars, body-parser, express-validator, express-session
const express = require('express');
const app = express();



// ========== Define templates ==========

// ========== code for express-session ==========

// ========== tell express how to serve static files ==========

// ========== creating database for usernames and passwords ==========

// ========== ENDPOINTS ==========
app.get('/', (req, res) => res.send('Hello World!'))

// ========== validation ==========

// ========== make express listen on port 3000 ==========

// The following is from: https://stackoverflow.com/questions/18008620/node-js-express-js-app-only-works-on-port-3000
app.set('port', process.env.PORT || 3000); // This code means set your port to the environment variable PORT or if that is undefined then set it to the literal 3000.
app.listen(app.get('port'),
  function () {
    console.log("Express server listening on port " + app.get('port'));
  });