// Select the DOM elements that we need
let body          = document.getElementsByTagName( "body" )[ 0 ];
let kitten_button = document.getElementById( "kitten_button" );
let tokyo_button  = document.getElementById( "tokyo_button" );
let metal_button  = document.getElementById( "metal_button" );

// Set up callback functions for the events
function switchToKittenTheme(){
    body.id = "kittens";
}
function switchToTokyoTheme(){
    body.id = "tokyo";
}
function switchToMetalTheme(){
    body.id = "metal";
}

// Event Listeners
kitten_button.addEventListener( "click", switchToKittenTheme );
tokyo_button.addEventListener( "click", switchToTokyoTheme );
metal_button.addEventListener( "click", switchToMetalTheme );