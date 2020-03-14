// function getWaterState(tempInCelsius) {
//     let state;
    
//     switch (true) {
//       case (tempInCelsius <= 0): 
//         state = 'Solid';
//         break;
//       case (tempInCelsius > 0 && tempInCelsius < 100): 
//         state = 'Liquid';
//         break;
//       default: 
//         state = 'Gas';
//     }
//     return state;
//   }

// const removeDuplicateItems = arr => [...new Set(arr)];
// removeDuplicateItems([42, 'foo', 42, 'foo', true, true]);
//=> [42, "foo", true]

function removeDuplicates(num) {
    var x,
        len=num.length,
        out=[],
        obj={};
   
    for (x=0; x<len; x++) {
      obj[num[x]]=0;
    }
    for (x in obj) {
      out.push(x);
    }
    return out;
  }
  var Mynum = [1, 2, 2, 4, 5, 4, 7, 8, 7, 3, 6];
  result = removeDuplicates(Mynum);
  console.log(Mynum);
  console.log(result);