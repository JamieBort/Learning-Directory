const express = require('express');
// console.log(express);

const mustacheExpress = require('mustache-respress');
//tell express to use mustacheExpress
app.engine('mustache', mustacheExpress());
//tell express where to find my views
app.set('views', './views');
app.set('view engine', 'mustache');
// find the templates that I am using in this views directly

// tell express how to serve static files
app.use(express.static('public'));

const moment = require(moment());


const app = express();
// console.log(app);

// confugure the / path (the web rout)

app.get("/", function(request, response) {
  // request and response are objects
  // response.send(`<h1>hello, world. I am alive!!</h1>< href="/food"> go to food</a>`); not doing something right here
});
// app.get("/", function(req, res) {});
// app.get("/", function(fred, belva) {});

// show some food
app.get('/food', function(req, res){
  res.send('Apple')
})


app.get("/", function(request, response) {
  response.rend('Home', {
    formattedDate: new Date()
  });
}



// make express listen on port 3000
app.listen(3000);
