// nums = [1, 1, 2];
nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];

var solution = removeDuplicates(nums);
// console.log(solution);
console.log("New Array\n", solution);
// console.log("Wanted Array:", [1,2]);
console.log("Wanted Array\n", [0, 1, 2, 3, 4]);
// var modifiedArray=[];

// var removeDuplicates = function (nums) {
function removeDuplicates(parameter) {
    // var modifiedArray=[];
    console.log("Original array\n", parameter);
    for (let index = 0; index < parameter.length; index++) {
        if (parameter[index] == parameter[index + 1]) {
            console.log("index", index, "and", "element", parameter[index]);
            // var modifiedArray= parameter.slice(1);
            modifiedArray= parameter.slice(1);
            modifiedArray= parameter.slice(3);
        }
        // console.log("parameter:", parameter);
    }
    // return parameter;
    return modifiedArray;
}