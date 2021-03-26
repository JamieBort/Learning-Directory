/**
 * @param {number[]} code
 * @param {number} k
 * @return {number[]}
 */

/**
 * Worked on this with Julia.
 */


// code = [5,7,1,4], k = 3

var decrypt = function(code, k) {
    let secondArray = [...code];
    
    
//     k = 0
    if(k===0){
        return code.fill(0);
    }
    
//     k > 0 
    if(k>0){
        code.forEach( (num, index)=>{
            code[index] = secondArray[(index+1)%code.length] + secondArray[(index+2)%code.length] + secondArray[(index+3)%code.length]
        })   
    }
    
        return code;
    
    // let index =0;
    // let k = 3;
    // console.log(3%3)
    // console.log((index+1) % k)
    
};