// from: https://www.codewars.com/kata/mexican-wave

// wave("hello") => ["Hello", "hEllo", "heLlo", "helLo", "hellO"]

function wave() {
    var array = [];
    var string = " hello you ";
    console.log(string.indexOf(" "));
    for (i = 0; i < string.length; i++) {
        if (string.indexOf(' ') === i) {

            console.log("there is a space at :" + i);
            
        } else {
            // if ((i = string.length - 1) && (string.indexOf(' ') === i)) {
            //     console.log("there is a space at the end");
            // } else {

                array.push(string.slice(0, i) + string[i].toUpperCase() + string.slice(i + 1, string.length));
            }
        }
        console.log(array);
        return array;
    }

    wave();
