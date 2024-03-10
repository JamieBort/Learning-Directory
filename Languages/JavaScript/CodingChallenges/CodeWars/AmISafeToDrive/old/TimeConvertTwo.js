function timeStringToMinutesInteger(time) {
  var firstVaribale = time.split(':');
  const totalMinutes = parseInt(firstVaribale[0]) * 60 + parseInt(firstVaribale[1]);
  console.log(typeof (totalMinutes));
}

timeStringToMinutesInteger("4:00");