// server.js
const express        = require('express');
const MongoClient    = require('mongodb').MongoClient;
const bodyParser     = require('body-parser');

// In your server.js, you can use the MongoClient to connect to your DB, and use this to wrap your app setup:
// const db             = require('./config/db'); // I change this line because I was getting the following error: "TypeError: Assignment to constant variable."
// Used with 'MongoClient.connect(db.url, (err, database)' below.
var db             = require('./config/db');
const app            = express();



// Unfortunately, Express can’t process URL encoded forms on its own. That is what the body-parser package is used for.
app.use(bodyParser.urlencoded({ extended: true }));

// Used with 'var db' above.
MongoClient.connect(db.url, (err, database) => {
  if (err) return console.log(err)
   // Make sure you add the database name and not the collection name
  db = database.db("note-api")

  // Import this function, 'function(app, db)' found in note_routes.js, for use in server.js:
  require('./app/routes')(app, db);

// below is what was original.
// const port = 8000;
//   app.listen(port, () => {
//     console.log('We are live on ' + port);
//   });

// I added lines 33-36 to address an issue that I had with Heroku. 
var PORT = process.env.PORT || 8000;
app.listen(PORT, function(){
    console.log("The App is listening on PORT: " + PORT);
});

})

// Now if you run 'npm run dev' (or 'node server.js' if you didn’t install Nodemon) you should see ‘We are live on port 8000’ in the terminal.