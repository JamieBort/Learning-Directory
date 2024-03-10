let firstname = "Brenda";
let time = "morning"
let sentence = `Good ${time}, ${firstname}.`;
console.log(sentence);

function blogpost(title, date, content) {
  let post = `
  // <article>
  //   <h2>${title}</h2>
  //   <span id = "date">${date}</span>
  //   <div class = "post">${content}</div>
  // </article>


  let article = document.createElement( 'article' );
  let h2 = document.createElement( 'h2' );
  let span = document.createElement( 'span' );
  let div = document.createElement( 'div' );

  let h2Text = document.createTextNode( "${title}" );
  let spanText = document.createTextNode( '${date}' );
  let divText = document.createTextNode( "${content}" );


  document.body.appendChild ( article );
  article.appendChild( h2 );
  article.appendChild( span );
  article.appendChild( div );

  h2.appendChild( h2Text );
  span.appendChild( spanText );
  div.appendChild( divText );
`;

console.log(post);
}

blogpost("Intro to Hang Gliding", "April 1st", "Lorem ipsum dolor...");

// let article = document.createElement( 'article' );
// let h2 = document.createElement( 'h2' );
// let span = document.createElement( 'span' );
// let div = document.createElement( 'div' );
//
// let h2Text = document.createTextNode( "${title}" );
// let spanText = document.createTextNode( '${date}' );
// let divText = document.createTextNode( "${content}" );
// // let divText = document.createTextNode( `${content}` );
//
// document.body.appendChild ( article );
// article.appendChild( h2 );
// article.appendChild( span );
// article.appendChild( div );
//
// h2.appendChild( h2Text );
// span.appendChild( spanText );
// div.appendChild( divText );
