const factorial = (num) => {
        console.log("typeof1: ", typeof (num));
        var result = num;
        if (num === 0 || num === 1) {
                return 1;
        } else if (num < 0) {
                return -1;
        } else if (isNaN(num)) {
                return "Error";
        }
        console.log("typeof2: ", typeof (num))
        while (num > 1) {
                console.log("typeof3: ", typeof (num))
                num = num - 1;
                console.log("typeof4: ", typeof (num))
                result = result * num;
                console.log("typeof5: ", typeof (num));
                console.log("typeof6: ", typeof (result));
        }
        console.log("typeof7: ", typeof (num));
        console.log("typeof8: ", typeof (result));
        return result;
}
console.log(factorial("0"));
// console.log(factorial(0));
//       console.log(factorial(3));
// const obj = new Object();
// const str = new String("0");
// console.log("typeof: ",typeof(str[0]));
// console.log(str[0]);
//       console.log(factorial(obj));
//       console.log(factorial(str[0]));