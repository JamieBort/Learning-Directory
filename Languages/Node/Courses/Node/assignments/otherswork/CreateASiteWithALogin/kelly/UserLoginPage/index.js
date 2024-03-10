// ==========Require Packages =======================
const express = require("express");
const expressHandlebars = require("express-handlebars");
const bodyParser = require("body-parser");
const expressValidator = require("express-validator");
const session = require("express-session");
const app = express();

// =========BOILER PLATE (turns "ON" reuired packages) ============

// For handlebars ================
app.engine("handlebars", expressHandlebars());
app.set("views", "./views"); //pulling template in from views folder
app.set("view engine", "handlebars");

// For express-session ============
app.use(
  session({
    secret: "CROWpoe", //in the future, this is not something you would want hard coded here bc you don't want the public to have access to passwords on github
    resave: false, //doesnt save without changes
    saveUninitialized: true //creates a session
  })
);

//for express ====================
//use the term "public" because it refers to "public" folder you created in your project folder
app.use(express.static("public"));

// ======HARD CODE USER NAME and PASSWORDS for SECURE DATABASE=========
//This will usually never be hardcoded here because it will be public info if you post to GitHub. It will actually be in a secure database

let topsecret = [{
    username: "Doug",
    password: "rattleballs"
  },
  {
    username: "Lexi",
    password: "bubblegum"
  },
  {
    username: "Kaitlin",
    password: "lemonbar"
  }
];

// Now, we need to PARSE data, then will will VALIDATE it ==========

//For body-parser Turn it "ON" by the variable name ================
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

// For express-validator =============
app.use(expressValidator());

//========ENDPOINTS (aka the web pages the user will see) ============

//path to "home"
app.get("/", function(req, res) {
  //if the user's info is not stored redirect
  if (!req.session.victim) {
    res.redirect("/login")
    //if the user is recognized, render the home page
  } else {
    // res.send("You're home!");
    res.render("home", {
      username: req.session.victim
    });
  }
});

//PATH TO LOGIN ==============
app.get("/login", function(req, res) {
  res.render("login")
});

//send user info after the user submits it =======
app.post("/login", function(req, res) {
  let user = req.body;

  // ========= VALIDATION ==================
  req.checkBody("username", "Username is required").notEmpty();
  req.checkBody("password", "Enter Password!").notEmpty();

  let errors = req.validationErrors();

  if (errors) {
    //if there is an error, print it ======
    res.render("login", {errors: errors});
  } else {
    let users = topsecret.filter(function(userCheck) {
      return userCheck.username === req.body.username;
    });

    //if that user does not exist, return an error on the login page
    if (users.length === 0) {
      let not_a_user = "User not found. Please create an account."
      res.render("login", {something: not_a_user});
      return;
    }

    let user = users[0];

    //if the passwords match, direct to the homepage
    if (user.password === req.body.password) {
      req.session.victim = user.username;
      res.redirect("/");
    } else {
      let not_ur_password = "Donk."
      res.render("login", {something: not_ur_password});
    }
  }
});

//==== LAST STEP OF CODE:  make express listen on port 3000 =======
app.listen(3000, function() {
  console.log("The app is running");
});
