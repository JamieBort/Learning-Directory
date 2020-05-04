function queueTime(customers, n) {
    //TODO
    var grandTotal = 0;
    var firstArrayTotal = 0;
    var secondArrayTotal = 0;

    if (customers.length == 0) {
        grandTotal = 0;
    } else {
        if (n === 1) {
            customers.forEach(element => {
                grandTotal += element;
            });
            console.log("Total of the first and only till is: " + grandTotal);
            return grandTotal;

        } else if (n === 2) {
            var firstArray = [];
            var secondArray = [];

            firstArray.push(customers[0]);
            secondArray.push(customers[1]);

            // If total of first array > total of second array. Is that right?
            if (secondArrayTotal > firstArrayTotal) {
                secondArray.push(customers[2]);
            } else {
                firstArray.push(customers[2]);
            }

            
            // Logic: 10 - 2 -3 > 0 so the next element goes in the second till.
            if (customers[0] + customers[2] > customers[1]) { // this is not right.
                secondArray.push(customers[3]);
            } else {
                firstArray.push(customers[3]);
            }
            console.log("total of first array: " + firstArrayTotal);
            console.log("total of second array: " + secondArrayTotal);
            console.log(firstArray);

            firstArray.forEach(function (element) { // Other ways to sum the integer elements of an array: https://stackoverflow.com/questions/1230233/how-to-find-the-sum-of-an-array-of-numbers
                firstArrayTotal += element;
            });
            console.log("total of first array: " + firstArrayTotal);

            console.log(secondArray);

            secondArray.forEach(function (element) {
                secondArrayTotal += element;
                // return secondArrayTotal
            });
            console.log("total of second array: " + secondArrayTotal);
        }

        if (firstArrayTotal > secondArrayTotal) {
            grandTotal = firstArrayTotal;
        } else {
            grandTotal = secondArrayTotal;
        }
    }

    console.log("Grand total of is: " + grandTotal);
    return grandTotal;
}

// queueTime([], 1); // We expect 0. We got 0.
// queueTime([1, 2, 3, 4], 1) // We expect 10. We got 10.
// queueTime([5, 3, 4], 1) // We expect 12. We got 12.
queueTime([10, 2, 3, 3], 2) // We expect 10. We got 10.
// queueTime([2, 3, 10], 2) // We expect 12. We got 12.
// queueTime([2, 2, 3, 3, 4, 4], 2) // We expect 9. We got 5.