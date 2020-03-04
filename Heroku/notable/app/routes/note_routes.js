// note_routes.js
var ObjectID = require('mongodb').ObjectID;
module.exports = function(app, db) {

    // READ Route.
    // Now you can pick up the pace a bit.
    // Say you wanted to get back the note you just created, by navigating to localhost:8000/notes/{the id}. In this case, that would be localhost:8000/notes/585182bd42ac5b07a9755ea3. 
    // (If you don’t have the ID for one of your notes, you can check on mLab or just create a new one).
  app.get('/notes/:id', (req, res) => {

    // You can grab the id from the URL parameters via req.params.id. However, if you try to just plop in the string into the <> above, it won’t work.
    // MongoDB requires not just an ID as a string, but as an ID object or, as they call it, an ObjectID.
    // Don’t worry, it’s an easy fix. Here’s the full code:
    const id = req.params.id;
    const details = { '_id': new ObjectID(id) };

    // Just like before, you’re going to call a method on your database collection of notes. Here, it’s the aptly named findOne.
    db.collection('notes').findOne(details, (err, item) => {
      if (err) {
        res.send({'error':'An error has occurred'});
      } else {
        res.send(item);
      } 
    });
  });
  
  // Deleting an object is actually pretty much the same as finding an object. You just use the remove function instead of the findOne. Here’s the full code. I’ve highlighted what’s different from your GET:
  app.delete('/notes/:id', (req, res) => {
    const id = req.params.id;
    const details = { '_id': new ObjectID(id) };
    db.collection('notes').remove(details, (err, item) => {
      if (err) {
        res.send({'error':'An error has occurred'});
      } else {
        res.send('Note ' + id + ' deleted!');
      } 
    });
  });
  
  // The PUT is basically a hybrid between READ and CREATE. You find the object, then update it accordingly. If you deleted your only note, time to make another one!
  app.put('/notes/:id', (req, res) => {
    const id = req.params.id;
    const details = { '_id': new ObjectID(id) };
    const note = { text: req.body.body, title: req.body.title };
    db.collection('notes').update(details, note, (err, result) => {
      if (err) {
          res.send({'error':'An error has occurred'});
      } else {
          res.send(note);
      } 
    });
  });
  
  // CREATE route.
  // When the app receives a post request to the ‘/notes’ path, it will execute the code inside the callback- passing in a request object (which contains the parameters or JSON of the request) and a response object (used to reply).
  // You can test this by using Postman to send a POST request to localhost:8000/notes.
app.post('/notes', (req, res) => {

    // MongoDB stores data in collections- which are exactly how they sound. In your case, you want to store your notes in a collection called — you guessed it — notes.
    // Since you pass in your database as the db argument in your routes, you can then access it like so:
    const note = { text: req.body.body, title: req.body.title };
    db.collection('notes').insert(note, (err, result) => {

        // Once the insert is complete (or has failed for whatever reason), you want to either send back an error or send back the newly created note object. Here’s the full note_routes.js:
      if (err) { 
        res.send({ 'error': 'An error has occurred' }); 
      } else {
        res.send(result.ops[0]);
      }
    });
  });
};