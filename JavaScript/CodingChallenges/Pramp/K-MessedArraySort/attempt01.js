// attempt01

// Method: first create a sorted list function, irrespective of k.

// input:
const arr = [1, 4, 5, 2, 3, 7, 8, 6, 10, 9],
  // const arr = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1],
  k = 2;

// output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// // More examples from the internet
// Input: arr[] = {6, 5, 3, 2, 8, 10, 9}, K = 3
// Output: arr[] = {2, 3, 5, 6, 8, 9, 10}

// Input: arr[] = {10, 9, 8, 7, 4, 70, 60, 50}, k = 4
// Output: arr[] = {4, 7, 8, 9, 10, 50, 60, 70}

const sortKMessedArray = (param01) => {
  // Check. Is arr[0] less than every number in the array?
  for (let j = 0; j < param01.length - 1; j++) {
    console.log("param01[j]:", param01[j]);
    console.log("-------------------");
    for (let index = j + 1; index < param01.length; index++) {
      if (param01[j] <= param01[index]) {
        console.log("Do nothing.");
        console.log("param01[index]:", param01[index]);
      } else {
        console.log("Switch them.");
        console.log("param01[index]:", param01[index]);
        [param01[j], param01[index]] = [param01[index], param01[j]];
      }
    }

    console.log("***** param01:", param01);
    console.log("===================");
    console.log("===================");
  }
};
sortKMessedArray(arr);
