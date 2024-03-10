// document.getElementById("demo").innerHTML = 5 + 6;

var moment = require("moment");

// document.getElementById("demo").innerHTML = 5 + 6;
// var moment = require('moment');
moment().format();
document.getElementById("demo").innerHTML = moment([2011, 2, 12]).isDST();


// console.log(moment([2011, 2, 12]).isDST());
// console.log(moment().isDST());