//these are all in the public file served
//from the server info,
//(which is technically in the public static folder
//client side at this point)

function findRobots(){

fetch('../data.js')
 //this gets the promise of the data (we are requesting here...)>>
 .then(response => response.json())
 //here we are parsing the data into a .json file... (syntax off)
 //when using a fat arrow function you dont need to seperate the function from the
 //instantiation of the function

 .then()
  Array.from(document.querySelectorAll('users')).forEach()

  /**
  *  @params {{type}}
  * (DOC BLOCK>)
  */
