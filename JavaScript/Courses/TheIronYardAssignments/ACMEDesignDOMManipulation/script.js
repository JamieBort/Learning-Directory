let portfolioData = [{
    img: "img/boat.jpg",
    h2: "Boats"
  },
  {
    img: "img/hair.jpg",
    h2: "Hair Styles"
  },
  {
    img: "img/shirts.jpg",
    h2: "t Shirts"
  },
  {
    img: "img/dirt.jpg",
    h2: "Dirt"
  }
];


/***************************************************/
/* 1. Add Hero Content *****************************/
/***************************************************/

// <section id="hero">
// <h1>ACME Design Studio</h1>
// <p>We are dedicated to producing the best designs in the world.</p>
// </section>

let section = document.querySelector('#hero');

// Create a new element
let header1 = document.createElement("h1");

// Create another new element
let paragraph1 = document.createElement("p");

// Append the new element to the parent element
section.appendChild(header1);
section.appendChild(paragraph1);

// Create the text for each element
let header1text = document.createTextNode("ACME Design Studio");
let paragraph1text = document.createTextNode("We are dedicated to producing the best designs in the world.");

// Attach the text nodes to the li nodes
header1.appendChild(header1text);
paragraph1.appendChild(paragraph1text);


/***************************************************/
/* 2. Add Portfolio Content ************************/
/***************************************************/

// <section id="portfolio">
//     <ul>
//        <li>
//             <img src="img/boat.jpg">
//             <h2>Boats</h2>
//         </li>
//         <li>
//             <img src="img/hair.jpg">
//             <h2>Hair Styles</h2>
//         </li>
//         <li>
//             <img src="img/shirts.jpg">
//             <h2>t Shirts</h2>
//         </li>
//         </li>
//             <img src="img/dirt.jpg">
//             <h2>Dirt</h2>
//         </li>
//     </ul>
// </section>

let list = document.querySelector('#portfolio ul');

for (var i = 0; i < portfolioData.length; i++) {

  let item[i] = document.createElement("li");

  let image[i] = document.createElement("img");

  let h2_[i] = document.createElement("h2");

  list.appendChild(item[i]);

  item[i].appendChild(image[i]);

  item[i].appendChild(h2_[i]);

  let text[i] = document.createTextNode(portfolioData[i].h2);

  let image[i] = document.createTextNode(portfolioData[i].h2);

}



/***************************************************/
/* 3. Navigation Dropdown **************************/
/***************************************************/



// HIDDEN:
// <nav id="main_navigation">
//     <a href="index.html">Home</a>
//     <a href="about_us.html">About Us</a>
//     <a href="contact.html">Contact</a>
//     <a href="portfolio.html">Our Work</a>
// </nav>

// VISIBLE:
// <nav id="main_navigation" class="visible">
//     <a href="index.html">Home</a>
//     <a href="about_us.html">About Us</a>
//     <a href="contact.html">Contact</a>
//     <a href="portfolio.html">Our Work</a>
// </nav>
