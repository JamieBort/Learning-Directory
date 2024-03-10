// code = [5, 7, 1, 4];
// k = 3;
// Output: [12,10,16,13]

code = [2, 4, 9, 3];
k = -2;
// Output: [12,5,6,13]

var decrypt = function (code, k) {
    const tempArray = new Array(code.length);
    if (k === 0) { return tempArray.fill(0); }

    let tempVariable = 0;

    // If k < 0, replace the ith number with the sum of the previous k numbers.
    if (k < 0) {
        k = -k;
        for (let j = 0; j < code.length; j++) {
            let t = 1;
            while (t <= k) {
                tempVariable += code[(j + t) % code.length];
                t++;
            }
            // console.log("j: ",j);
            // console.log("t: ",t);
            tempArray[j] = tempVariable;
            tempVariable = 0;
            t = 1;
        }
        // let a =tempArray.shift();
        // console.log(a);
        tempArray.push(tempArray.shift());
        // console.log(tempArray);

        // for (let index = code.length - 1; index >= 0; index--) {
        //     console.log(code[index]);
        //     // let t = 0;
        //     // while (t < k) {
        //     //     tempVariable += code[index];
        //     //     t++;
        //     // }
        //     // console.log(tempVariable);
        //     // // tempArray[index] = tempVariable;
        //     // t=0;
        //     // tempVariable = 0;

        //     // console.log(index)
        //     // let t = 1;
        //     // while (t <= k) {
        //     //     console.log(code[index]);
        //     //     // tempVariable +=code[index];
        //     //         t++;
        //     // }
        // }
        // console.log(k);
        // console.log("k<0");
    }

    // If k > 0, replace the ith number with the sum of the next k numbers
    // if (k > 0) {
    //     for (let j = 0; j < code.length; j++) {
    //         let t = 1;
    //         while (t <= k) {
    //             tempVariable += code[(j + t) % code.length];
    //             t++;
    //         }
    //         // console.log("j: ",j);
    //         // console.log("t: ",t);
    //         tempArray[j] = tempVariable;
    //         tempVariable = 0;
    //         t = 1;
    //     }
    // }

    console.log(tempArray);
}
decrypt(code, k);