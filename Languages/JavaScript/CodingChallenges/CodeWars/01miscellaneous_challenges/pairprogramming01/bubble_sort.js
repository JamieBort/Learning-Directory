const bubbleSort = function(array) {

}

let array = [1,8,4,6,7,3,2,5]

// Bubble sort looks at the first two elements of the array and decides if they are in order or not
  //Look at 1 and 8 - says "they're okay, don't change them"
// If they aren't in order, it switches them into the correct order

//  x x
// [1,8,4,6,7,3,2,5]
//    x x - need to switch
// [1,8,4,6,7,3,2,5]
//      x x - need to switch
// [1,4,8,6,7,3,2,5]
//        x x - need to switch
// [1,4,6,8,7,3,2,5]
//          x x - need to switch
// [1,4,6,7,8,3,2,5]
//            x x - need to switch
// [1,4,6,7,3,8,2,5]
//              x x - need to switch
// [1,4,6,7,3,2,8,5]
//  x x - start looking here again
// [1,4,6,7,3,2,5,8]
