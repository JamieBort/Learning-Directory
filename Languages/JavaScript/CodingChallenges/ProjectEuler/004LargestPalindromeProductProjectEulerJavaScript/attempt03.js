// attempt03

const a = 999;
let b = 999;
const multiply = (a,b) => a*b;
let result = multiply(a,b);
let length = result.toString().length;
const checkFunction = (param) => {
    // check to see if the outer numbers match
    if(param.toString()[0] === param.toString()[length-1]){
        console.log("the outer numbers match. keep going",param.toString()[0],param.toString()[length-1]);
        console.log("write more code");
        // break;
    }
    else {
        console.log("the outer numbers do NOT match. multiply two new numbers",param.toString()[0],param.toString()[length-1]);
        b--;
    }

}

// console.log("result.toString()[0]:",result.toString()[0]);
// console.log("result.toString()[5]:",result.toString()[length-1]);

// while (b > 991){
while (result.toString()[0]!= result.toString()[length-1]){
    result = multiply(a,b);
    console.log("result:",result);
    // console.log(result);

    // checkFunction(result);

    // check to see if the outer numbers match
    if(result.toString()[0]===result.toString()[length-1]){
        console.log("the outer numbers match. keep going",result.toString()[0],result.toString()[length-1]);
        console.log("write more code");
        break;
    }
    else {
        console.log("the outer numbers do NOT match. multiply two new numbers",result.toString()[0],result.toString()[length-1]);
        b--;
    }

}