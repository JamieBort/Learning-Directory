// Now to generate an array of arrays.
var originalArray = [1, 5, 12, 22, 35];
var arrayOfArrays = [];
function arrayMaker (a,b){
    var dummyArray = [];
    dummyArray.push(a);
    dummyArray.push(b);
    arrayOfArrays.push(dummyArray)
}
arrayMaker(originalArray[0],originalArray[1]); // Looked at 
arrayMaker(originalArray[0],originalArray[2]);
arrayMaker(originalArray[0],originalArray[3]);
arrayMaker(originalArray[0],originalArray[4]);
arrayMaker(originalArray[1],originalArray[2]);
arrayMaker(originalArray[1],originalArray[3]);
arrayMaker(originalArray[1],originalArray[4]);
arrayMaker(originalArray[2],originalArray[3]);
arrayMaker(originalArray[3],originalArray[4]);
console.log(arrayOfArrays);

for (i = 0; i < originalArray.length; i++){
    let j = 1;
    arrayMaker(originalArray[i],)
}