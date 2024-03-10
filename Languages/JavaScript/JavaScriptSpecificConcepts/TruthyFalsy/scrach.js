const truthyArray = [true, {}, [], 42, "0", "false", new Date(), -42, 12n, 3.14, -3.14, Infinity, -Infinity]

truthyArray.forEach(element => { // This code block will  be executed. Because these elements in truthyArray are considered true when encountered in a Boolean context.
    if (element) { console.log(element); }
});

const falsyArray = [false, 0, -0, 0n, "", null, undefined, NaN]
falsyArray.forEach(element => { // This code block will not be executed. Because these elements in falsyArray is considered false when encountered in a Boolean context.
    if (element) { console.log(element); }
});