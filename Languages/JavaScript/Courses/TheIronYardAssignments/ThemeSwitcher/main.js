// PART 1
// When the "KITTENS" button is "clicked," change the id of body to "kittens"
// When the "NEO TOKYO" button is "clicked," change the id of body to "tokyo"
// When the "HEAVY METAL" button is "clicked," change the id of body to "metal"



var kittensElement =  document.setAttribute ("id", "kittens");
//
// var tokyo_button =  document.setAttribute("id", "tokyo_button");
//
// var metal_button =  document.setAttribute("id", "metal_button");



// Adding a "click" event listener to "header"
headerElement.addEventListener("click", ourCallBack);

// The "ourCallBack()" function is called whenever our declared event listener is triggered.
function ourCallBack() {
    if( headerElement.style.color === "red" ){
        headerElement.style.color = "blue";
    }else{
        headerElement.style.color = "red";
    }
}
