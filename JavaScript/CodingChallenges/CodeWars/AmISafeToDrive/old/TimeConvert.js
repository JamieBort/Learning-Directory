// from: https://stackoverflow.com/questions/10893613/how-can-i-convert-time-to-decimal-number-in-javascript
function timeStringToFloat(firstTime, secondTime) {
  // split string into hours and minues. Assign each to a different variable.

  // var hoursMinutes =// convert to hours and minutes
  // var hours = //
  // var minutes = //
  console.log("hello");


  var firstVaribale = firstTime.split(':');
  var secondVaribale = secondTime.split(':');
  console.log(firstVaribale);
  console.log(secondVaribale);
  var hourDifference = secondVaribale[0] - firstVaribale[0];
  var secondDiffence = secondVaribale[1] - firstVaribale[1];
  console.log(hourDifference);
  console.log(secondDiffence);
  if (secondDiffence < 0) {
    console.log("something needs to be done!");
    --hourDifference;
    secondDiffence = -1 * secondDiffence;
  }
  console.log(hourDifference);
  console.log(secondDiffence);
  // console.log(words[0]);
  // console.log(typeof(words[0]));
  return;//
}

timeStringToFloat("11:59", "24:00");