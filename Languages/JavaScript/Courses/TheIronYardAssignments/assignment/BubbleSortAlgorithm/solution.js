
let numbers = [4, 5, 1, 8, 9, 2];

function sort(values) {
  var length = values.length - 1;
  do {
    var swapped = false;
    for(var i = 0; i < length; ++i) {
      if (values[i] > values[i+1]) {
        var temp = values[i];
        values[i] = values[i+1];
        values[i+1] = temp;
        swapped = true;
      }
    }
  }
  while(swapped == true)
};
sort([7, 4, 5, 2, 9, 1]);
//finished
