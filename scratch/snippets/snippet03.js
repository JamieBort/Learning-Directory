// recursion example
// source: https://www.programiz.com/javascript/recursion

// function recurse() {
//         // function code
//         recurse();
//         // function code
//     }

//     recurse();

let t = 5;
function recurse() {
        if (t>0) {
                console.log("t: ",t);
                t--;
                recurse();
        }
        else {
                // stop calling recurse()
                console.log("t is now: ",t);
        }
}

recurse();