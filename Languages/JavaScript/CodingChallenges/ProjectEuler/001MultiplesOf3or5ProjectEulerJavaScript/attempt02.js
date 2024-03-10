// from: https://projecteuler.net/problem=1
// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
// Find the sum of all the multiples of 3 or 5 below 1000.

function multiples() {
    var array = [];
    for (i = 1; i < 1000; i++) {
        if ((i % 3 == 0) || i % 5 == 0) {
            array.push(i);
        }
    }
    console.log(array);
    console.log("The multiples of 3 and 5 are: " + array);
    //    now to add the individual elemens of the array together
    var a = 0;
    array.forEach(function (element) {
        
        a += element;
        // console.log(a);

    });
    console.log(a);
    console.log("The sum of all the multiples of 3 or 5 below 1000 are: " + a);

}
multiples();