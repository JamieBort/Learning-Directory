/**
 * @param {number[]} code
 * @param {number} k
 * @return {number[]}
 */
code = [5, 7, 1, 4];
k = 3;

// code = [1,2,3,4];
// k = 0;

// code = [2,4,9,3];
// k = -2;

var decrypt = function (code, k) {
    const newArray = new Array(code.length);
    const length = code.length;
    let talley = 1

    if (k < 0) {  // If k < 0, replace the ith number with the sum of the previous k numbers.
        let sum = code[2];
        sum += 3;
        console.log(sum);
        for (let index = 0; index < length; index++) {
            newArray[index] = code[(index + 2) % length] + code[(index + 3) % length] + code[(index + 4) % length];
        }
    }
    else if (k > 0) { // If k > 0, replace the ith number with the sum of the next k numbers.
        let sum = code[k];
        while (talley < k) {
            sum += code[(k + talley) % length];
            talley++;
        }
        // sum+=code[(k+2)%length];
        console.log(sum);
        console.log(talley);
        newArray[0]=sum;

        sum = code[k+1];
        


        // for (let index = 0; index < length; index++) {
        //     newArray[index] = code[(index + 1) % length] + code[(index + 2) % length] + code[(index + 3) % length];
        // }
    }
    else { newArray.fill(0) } // If k == 0, replace the ith number with 0.

    console.log("newArray:", newArray, ". code:", code, ". k:", k);
    return newArray;
};

decrypt(code, k);