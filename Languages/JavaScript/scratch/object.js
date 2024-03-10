array1 = [1,2,3,4]

const object2 = {
    d: 'another string',
    e: {
        // array1,
        // weekdays: ['sun','mon','tue','wed','thu','fri','sat'],
        myarray: ["1", "2", "3", "4"],
        a: [1,2,3,4]
        
    },
    f: true
  };
  
  const object1 = {
    a: 'somestring',
    b: 42,
    c: false
  };
//   console.log(Object.keys(object1));
  console.log("Obejct 2: \n" + Object.keys(object2));
//   console.log(Object.keys(object1[a]));

// for (key in object1) {
//     console.log(object1[key]);
//     }

    for (key in object2) {
        console.log(object2[key]);
        }

        // console.log(object2.d);
        // console.log(object2.e.array1[0]);
        // console.log(array1);


// for (key in factors) {
//     if (factors[key] > 1) {
//       string += '(' + key + '**' + factors[key] + ')'
//     } else {
//       string += '(' + key + ')'
//     }
//   }