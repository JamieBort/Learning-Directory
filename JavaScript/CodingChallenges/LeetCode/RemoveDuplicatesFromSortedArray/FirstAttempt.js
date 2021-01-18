nums = [1, 1, 2];
var solution = removeDuplicates(nums);
console.log(solution);

// var removeDuplicates = function (nums) {
function removeDuplicates (parameter) {
    console.log("Original array:", parameter);
    for (let index = 0; index < parameter.length; index++) {
        // find the elements that match the element adjacen to it.
        if(parameter[index]==parameter[index+1]){
            console.log("index:", index);
            // console.log("index+1");
        }
    }
    modifiedArray=parameter.slice(1);
    console.log("modifiedArray:", modifiedArray);
    // return [1,2];
    // return parameter.slice(1);
    return modifiedArray;
}