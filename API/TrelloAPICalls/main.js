const fetch = require("node-fetch"); // might need to run: npm i node-fetch --save
// require('dotenv').config(); // path to a .env file that is local
require('dotenv').config({ path: './../../.env' }); // path to the "global" .env file.

// console.log("the whole process env:");
// console.log(process.env); // The contents of the .env file.
console.log("the whole api key:");
console.log(process.env.api_key); // The contents of the .env file.
// console.log(process.env.api_token); // The contents of the .env file.

// var api_key = DELETED
// var api_token = DELETED

var api_key = process.env.api_key;
var api_token =process.env.api_token;

// var myString = 'https://api.trello.com/1/members/me/boards?key='+api_key+'&token='+api_token;

// var myString = 'https://api.trello.com/1/members/me/boards?key='+'b2b04ca8f818a58b607c8e226d68003e'+'&token='+'e3e3dccf8143f51db990f253506a49a226ff6ef7dfd8439c9c96d9818016451a';

var api_key = process.env.api_key;
var api_token = process.env.api_token;

async function getAll(){
    let response = await fetch('https://api.trello.com/1/members/me/boards?key='+api_key+'&token='+api_token);
    // let response = await fetch(myString);
    let data = await response.json();
    return data;
}

var port = 4000;
const http = require('http');
var server = http.createServer(function (request, response) {
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.end("Hello World!\n", getAll().then(data => console.log(data[0].name))); // When the local host page is refreshed, data[0].name is logged to the consol. I now need to learn Node.js better so I can send the data object to the page.
    
});

console.log("Listening in on: http://localhost:",port);
server.listen(port);
