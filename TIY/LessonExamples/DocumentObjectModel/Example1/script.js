// Select the parent element of all the new content

// Create all of the needed HTML nodes
let wrapper   = document.createElement( "div" );
let header    = document.createElement( "header" );
let main      = document.createElement( "main" );
let title     = document.createElement( "h1" );
let paragraph = document.createElement( "p" );
let link      = document.createElement( "a" );

// Create all of the text nodes
let linkText      = document.createTextNode( "Home" );
let titleText     = document.createTextNode( "Home Page" );
let paragraphText = document.createTextNode( "This is the home page." );

// Set any needed attribute values for the HTML nodes
link.setAttribute('href', '#');
link.setAttribute('id', 'wrapper');

// Build the node tree
document.body.appendChild( wrapper );
wrapper.append( header );
wrapper.append( main );
header.appendChild( link );
main.appendChild( title );
main.appendChild( paragraph );

// Add all of the text to each element
link.appendChild( linkText );
title.appendChild( titleText );
paragraph.appendChild( paragraphText );
