// attempt03.js

// By starting with 1 and 2, the first 10 terms will be:
// 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...

// Psuedocode
// cap := 4,000,000
// prev := 0 // I don't need this.
// curr := 1
// total := 0
// while curr < cap:
//     next := prev + curr
//     prev := curr
//     curr := next
//     if curr is even:
//         total := total + curr

cap = 4000000;
// cap = 300;
let [prev,curr] = [1,2];
total = 0;

while (curr < cap) {
    // console.log("prev:",prev);
    // console.log("curr:",curr);
    
    // check for being even
    if(curr%2===0){
        console.log(curr," is even. Add it to the total.");
        total += curr;
    }

    [prev,curr] = [curr, prev + curr] // switch and add them
}

    console.log("Total:",total);