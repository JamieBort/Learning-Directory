console.log("MATH!!");

// targeting the 'display' id
var display = document.querySelector("#display");
  // selects display input field and sets it to variable input
// console.log(display, "This is the display.");

// targeting the 'num' class
var buttons = document.querySelectorAll('.num');
// console.log(buttons, "These are the buttones.");

  let values = [];
  for (i=0; i<buttons.length; i++){
    // values.push(buttons[i].innerHTML);
    // console.log(values);
    buttons[i].addEventListener('click', function(){
      // the below is code that inserts into the html the value of the buttons selected
      display.innerHTML += event.target.value;
      // the below is code that puts into the 'values' array the value of the buttons selected
      values.push(event.target.value);
      console.log(values);
    });
  }

// targeting the 'equals' id
  var equals = document.querySelector('#equals');
  equals.addEventListener('click', function(){
    console.log(eval(values.join("")), "This displays when the '=' button is selected.");
    // console.log(display, "This is the display.");
    display.innerHTML=(eval(values.join("")));
    console.log(values);
  })

  var clear = document.querySelector('#clear');
  clear.addEventListener('click', function(){

    // this clears the 'values' array of any value
    values = [];

    // similarly, this clears the display html element
    display.innerHTML= " ";
    console.log(values, "This displays when the 'C' button is selected.");
console.log(values);
  })
