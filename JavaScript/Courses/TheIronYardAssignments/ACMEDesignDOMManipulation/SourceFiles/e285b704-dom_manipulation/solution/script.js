let portfolioData = [
    {
        img : "img/boat.jpg",
        h2 : "Boats"
    },
    {
        img : "img/hair.jpg",
        h2 : "Hair Styles"
    },
    {
        img : "img/shirts.jpg",
        h2 : "t Shirts"
    },
    {
        img : "img/dirt.jpg",
        h2 : "Dirt"
    }
];


/***************************************************/
/* 1. Add Hero Content *****************************/
/***************************************************/

let hero = document.getElementById( "hero" );

let heroTitle        = document.createElement( "h1" );
let heroTitleContent = document.createTextNode( "ACME Design Studio" );
let heroText         = document.createElement( "p" );
let heroTextContent  = document.createTextNode( "We are dedicated to producing the best designs in the world." );

heroTitle.appendChild( heroTitleContent );
heroText.appendChild( heroTextContent );
hero.appendChild( heroTitle );
hero.appendChild( heroText );



/***************************************************/
/* 2. Add Portfolio Content ************************/
/***************************************************/
let portfolioList = document.querySelector( "#portfolio ul" );

for( let i = 0; i < portfolioData.length; i++ ){

    let li       = document.createElement( "li" );
    let liImg    = document.createElement( "img" );
    let liH2     = document.createElement( "h2" );
    let liH2Text = document.createTextNode( portfolioData[ i ].h2 );

    liH2.appendChild( liH2Text );

    liImg.setAttribute( "src", portfolioData[ i ].img );

    li.appendChild( liImg );
    li.appendChild( liH2 );

    portfolioList.appendChild( li );
}





/***************************************************/
/* 3. Navigation Dropdown **************************/
/***************************************************/
let dropdown = document.getElementById( "dropdown" );
let nav = document.getElementById( "main_navigation" );

function showDropdown(){
    nav.classList.toggle( "visible" );
}

dropdown.addEventListener( "click", showDropdown );



