function deleteNth(arr,n){
   
//    Instatiate an array.
let array = [];
    // push first element into second array.
    array.push(arr[0]);
    if (arr.indexOf(1) === 0){
        console.log(arr.indexOf(1))
    }
    // look at second element is it different than first element?
    if (arr[0] != arr[1]){
        // if so, push it to array
        array.push(arr[1]);
    } else {

        let result = arr.filter(function(element)
            { return element === 1 }).length;
            console.log(result);
                }
            
        

// if not, refer to 'n'. Has the number of occurances of the first element exceeded 'n'?
    // }
    
    
    

console.log(array);
   return array;
  }

  deleteNth([1,1,1,1],2);