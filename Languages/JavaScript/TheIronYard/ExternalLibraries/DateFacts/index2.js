// First, npm needs to be initialized.
// In Terminal type 'npm init'.
// Second, moment needs to be installed.
// In terminal type 'npm install moment'.

var chalk = require('chalk');
var moment = require('moment');

// For formating see https://momentjs.com/
// moment().format();
// console.log(moment());

const first = moment().format('LLLL');
const second = moment().dayOfYear();

var a = moment([moment().get('year'), moment().get('month'), moment().get('day'), moment().get('hour'), moment().get('minute'), moment().get('second')]);

var b = moment([moment().get('year'), moment().get('month'), moment().get('day'), 0, 0, 0]);

const third = a.diff(b) / 1000;

// from lecture:
now = moment();
// midnight = console.log(moment().startOf('day'));

// DDDo
// turn area operator


let fourth;
if (moment().isDST()) {
  fourth = "is";
} else {
  fourth = "is not";
};

let fifth;
if (moment().isLeapYear()) {
  fifth = "is";
} else {
  fifth = "is not";
};

var six = moment();

console.log(`It is ${chalk.blue(first)}.`);
console.log(`It is the ${chalk.magentaBright(second)} day of the year.`);
console.log(`It is ${third} seconds into the day.`);
console.log(`It ${chalk.green(fourth)} during daylight savings time.`);
console.log(`It ${chalk.red(fifth)} not a leap year.`);
console.log(`${six}`);
console.log(moment([2011, 2, 12]).isDST());
console.log(moment().isDST());


  // const six = moment().isoWeeksInYear();
  // const seventh = moment().get('year');
  // const eighth = moment().get('hour');
  // const nineth = moment().get('minute');
  // const tenths = moment().get('second');
  // const eleventh = moment().unix();
