// Select the DOM elements that we need
let body          = document.getElementsByTagName( "body" )[ 0 ];
let kitten_button = document.getElementById( "kitten_button" );
let tokyo_button  = document.getElementById( "tokyo_button" );
let metal_button  = document.getElementById( "metal_button" );

let title   = document.getElementsByTagName( "h1" )[ 0 ];
let content = document.getElementsByTagName( "p" )[ 0 ];


// Text Nodes to hold all of the content
let kitten_title   = document.createTextNode( "Kittens" );
let kitten_content = document.createTextNode( "A kitten, also known as a kitty or kitty cat, is a juvenile cat. After being born, kittens are totally dependent on their mother for survival and they do not normally open their eyes until after seven to ten days." );

let tokyo_title   = document.createTextNode( "Neo Tokyo" );
let tokyo_content = document.createTextNode( "The Neo Tokyo aesthetic has permeated some of the biggest films and novels of the last 40 years, including Blade Runner and Akira." );

let metal_title   = document.createTextNode( "Heavy Metal" );
let metal_content = document.createTextNode( "Heavy metal (or simply metal) is a genre of rock music that developed in the late 1960s and early 1970s, largely in the United Kingdom and the United States." );


// Set up callback functions for the events
function switchToKittenTheme(){
    body.id = "kittens";

    title.childNodes[ 0 ].remove();
    content.childNodes[ 0 ].remove();

    title.append( kitten_title );
    content.append( kitten_content );
}

function switchToTokyoTheme(){
    body.id = "tokyo";

    title.childNodes[ 0 ].remove();
    content.childNodes[ 0 ].remove();

    title.append( tokyo_title );
    content.append( tokyo_content );
}

function switchToMetalTheme(){
    body.id = "metal";

    title.childNodes[ 0 ].remove();
    content.childNodes[ 0 ].remove();

    title.append( metal_title );
    content.append( metal_content );
}

// Event Listeners
kitten_button.addEventListener( "click", switchToKittenTheme );
tokyo_button.addEventListener( "click", switchToTokyoTheme );
metal_button.addEventListener( "click", switchToMetalTheme );








