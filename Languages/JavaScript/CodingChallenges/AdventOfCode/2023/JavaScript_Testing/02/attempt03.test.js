const attempt03 = require("./attempt03");
const initialValue = 0;

const testCase01 = `sdpgz3five4seven6fiveh`;
const testCase01Sum = 35;
// console.log("testCase01Sum:", testCase01Sum);

const testCase02 = `sdpgz3five4seven6fiveh
876mbxbrntsfm`;
const testCase02Sum = [35, 86].reduce((accumulator, currentValue) => accumulator + currentValue, initialValue);

const testCase05 = `sdpgz3five4seven6fiveh
876mbxbrntsfm
fivek5mfzrdxfbn66nine8eight
554qdg
ninevsgxnine6threesix8`;
const testCase05Sum = [35, 86, 58, 54, 98].reduce((accumulator, currentValue) => accumulator + currentValue, initialValue);

// test("Find the numbers and sum them:", () => expect(attempt03(testCase01)).toBe(testCase01Sum));

test("Find the numbers and sum them:", () => expect(attempt03(testCase02)).toBe(testCase02Sum));

// test("Find the numbers and sum them:", () => expect(attempt03(testCase05)).toBe(testCase05Sum));
