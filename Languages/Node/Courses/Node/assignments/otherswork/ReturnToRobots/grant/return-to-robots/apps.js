const express = require("express");
const fs = require("fs");
const exBars = require("express-handlebars");
const app = express();
const MongoClient = require("mongodb").MongoClient;
var db;

// Connection URL
var url = "mongodb://localhost:27017/returnToRobos";

// Uses handlebars as the engine
app.engine("handlebars", exBars());
app.set("views", "./views");
app.set("view engine", "handlebars");

// Loads static files
app.use(express.static("css"));

// Home
app.get("/", (req, res) => {
  let collection = db.collection("robots");

  collection.find({}).toArray(function(err, robots) {
    res.render("home", {robots: robots});
  });
});

// Searching
app.get("/searching", (req, res) => {
  let collection = db.collection("robots");

  collection.find({}).toArray(function(err, robots) {
    res.render("searching", {robots: robots});
  });
});

// Employed
app.get("/employed", (req, res) => {
  let collection = db.collection("robots");

  collection.find({}).toArray(function(err, robots) {
    res.render("working", {robots: robots});
  });
});

// Directs each request for specific robots
app.get("/:user", (req, res) => {
  let user = req.params.user;
  let collection = db.collection("robots");

  collection.find({username: user}).toArray((err, robots) => {
    res.render("card", {robots: robots});
  });
});

// Use connect method to connect to the server
MongoClient.connect(url, (err, connection) => {
  db = connection;
  if (!err) {
    console.log("Mongo Good")} else {
      console.log("Mongo Bad");
    };

// Listens to port 3000 for request.
  app.listen(3000, () => console.log("The magic server seems to be working.?!"));
});
