function queueTime(customers, n) {
    //TODO

    if (customers.length < 1) {
        return 0;
    }
    if (n === 1) {
        var grandTotal = 0;
        customers.forEach(element => {
            grandTotal += element;
        });
        console.log(grandTotal);
        return grandTotal;
    }

    if (n === 2) {
        var firstArrayTotal = 0;
        var secondArrayTotal = 0;
        var grandTotal = 0;
        var grandTotalArray = [];
        var firstArray = [];
        var secondArray = [];

        firstArray.push(customers[0]);
        secondArray.push(customers[1]);

        // This should be my calback.
        function callbackOne() {
            firstArray.forEach(element => {
                firstArrayTotal += element;
            });
        }

        function callbackTwo() {
            secondArray.forEach(element => {
                secondArrayTotal += element;
            });
        }

        // If the the total for the first array is greater than the total for the second array, then the next elemetn should go into the second array.
        if (firstArrayTotal > !secondArrayTotal) {
            // if (customers[0] === customers[1]){

            firstArray.push(customers[2]);
        } else {
            secondArray.push(customers[2]);
        }
        callbackOne();
        callbackTwo();
        console.log("first array check in: " + firstArray);
        console.log("second array check in: " + secondArray);



        if (firstArrayTotal >! secondArrayTotal) {
            // if (customers[0] === customers[1]){

            firstArray.push(customers[3]);
        } else {
            secondArray.push(customers[3]);
        }
        callbackOne();
        callbackTwo();
        console.log("first array check in: " + firstArray);
        console.log("second array check in: " + secondArray);



        // if (firstArrayTotal >! secondArrayTotal) {
        //     // if (customers[0] === customers[1]){

        //     firstArray.push(customers[4]);
        // } else {
        //     secondArray.push(customers[4]);
        // }
        // callbackOne();
        // callbackTwo();
        // console.log("first array check in: " + firstArray);
        // console.log("second array check in: " + secondArray);




        if (firstArrayTotal >! secondArrayTotal) {
            // if (customers[0] === customers[1]){

            firstArray.push(customers[5]);
        } else {
            secondArray.push(customers[5]);
        }
        callbackOne();
        callbackTwo();
        console.log("first array check in: " + firstArray);
        console.log("second array check in: " + secondArray);






        // Assigning the grand total.
        if (firstArray > secondArray) {
            grandTotalArray = firstArray;
        } else {
            grandTotalArray = secondArray;
        }
        console.log("The total for the first array: " + firstArrayTotal);
        console.log("The total for the second array: " + secondArrayTotal);
        console.log("The grand total array is: " + grandTotalArray);
        grandTotalArray.forEach(element => {
            grandTotal += element;
        });

        console.log("The grand total is: " + grandTotal);
        return grandTotal;
    }

}

//   The tests:
// queueTime([], 1) // should return 0. 
// queueTime([1, 2, 3, 4], 1) // should return 10.
queueTime([2, 2, 3, 3, 4, 4], 2)
// queueTime([1,2,3,4,5], 100)
// queueTime([5,3,4], 1) // should return 12
// queueTime([10,2,3,3], 2) // should return 10
// queueTime([2,3,10], 2) // should return 12.