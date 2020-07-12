const fetch = require("node-fetch"); // might need to run: npm i node-fetch --save
require('dotenv').config();
console.log(process.env); // The contents of the .env file.
console.log(process.env.api_key); // The contents of the .env file.
console.log(process.env.api_token); // The contents of the .env file.

var myString = 'https://api.trello.com/1/members/me/boards?key='+api_key+'&token='+api_token;

var api_key = process.env.api_key;
var api_token = process.env.api_token;

async function getAll(){
    let response = await fetch('https://api.trello.com/1/members/me/boards?key='+api_key+'&token='+api_token);
    let data = await response.json();
    return data;
}

var port = 4000;
const http = require('http');
var server = http.createServer(function (request, response) {
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.end("Hello World!\n", getAll().then(data => console.log(data[0].name)));
    
});

console.log("Listening in on: http://localhost:",port);
server.listen(port);
