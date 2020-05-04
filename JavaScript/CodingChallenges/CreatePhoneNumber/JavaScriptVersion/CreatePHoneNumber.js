function createPhoneNumber(numbers) {
    // let string = "\"(";
    // string += numbers[0];
    // string += numbers[1];
    // string += numbers[2];
    // string += ") ";
    // string += numbers[3];
    // string += numbers[4];
    // string += numbers[5];
    // string += "-";
    // string += numbers[6];
    // string += numbers[7];
    // string += numbers[8];
    // string += numbers[9];
    // string +=  "\"";

    let string = "(" + numbers[0] + numbers[1] + numbers[2] + ") " + numbers[3] + numbers[4] + numbers[5] + "-" + numbers[6] + numbers[7] + numbers[8] + numbers[9];
    

    // string = string + numbers[1];
    // numbers.forEach(element => {
    //     string += element
        
    // });
    console.log(string)
    return string;
}

createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);
// Test.assertEquals(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]), "(123) 456-7890");