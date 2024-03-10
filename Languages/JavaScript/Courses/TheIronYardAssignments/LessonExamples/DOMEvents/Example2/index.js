var headerElement = document.getElementById("header");

// Adding a "mouseover" event listener to "header"
headerElement.addEventListener("mouseover", ourCallBack);

// The "ourCallBack()" function is called whenever our declared event listener is triggered.
function ourCallBack() {
    if( headerElement.style.color === "red" ){
        headerElement.style.color = "blue";
    }else{
        headerElement.style.color = "red";
    }
}
