/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function (num) {
    // define variables
    let myObject = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    }
    let I = 1;
    let V = 5;
    let X = 10;
    let L = 50;
    let C = 100;
    let D = 500;
    let M = 1000;
    let string = "";

    if (num <= 3) {
        for (let i = 0; i < num; i++) {
            string += "I";
        }
    } else if (num === (V - I)) {
        string = "IV"
    } else if (num === (X - I)) {
        string = "IX"
    } else if (num === (L - I)) {
        string = "IL"
    } else if (num === (C - I)) {
        string = "IC"
    } else if (num === (D - I)) {
        string = "ID"
    } else if (num === (M - I)) {
        string = "IM"
    }
    // else if (num === 5) {
    //     string = "V";
    // }
    // if num = 6, treat it like (num = 5) + (num = 1).


    else { console.log("not figured out yet.") }
function five(){
    if(num ===5){
        string = "V"
    }
}

    console.log(string);
    return string;
};
intToRoman(5);