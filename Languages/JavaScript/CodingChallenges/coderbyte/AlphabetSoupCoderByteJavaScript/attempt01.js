const str = "AlphabetSoup";
// const str = "alphabetsoup";

function AlphabetSoup(str) {
    let array = [];
    const lowerString = str.toLowerCase();
    for (let index = 0; index < str.length; index++) {
        array.push(lowerString[index]);
    }
    array.sort();
    // console.log(array);
    return array;
}
// AlphabetSoup(str);
console.log(AlphabetSoup(str));