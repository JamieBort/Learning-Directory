const arr = [11, 22, 33, 44, 55, 66];

var div = document.createElement('div');
var h1 = document.createElement('H1');
var h1two = document.createElement('H1');
var p = document.createElement('p');
var button = document.createElement('button');

h1.innerHTML = "hello world"
h1two.innerHTML = "hello world again"
p.innerHTML = "Click the button to print the current page.";
button.innerHTML = "Print this page.";
div.innerHTML = arr;

document.body.appendChild(h1);
document.body.appendChild(h1two);
document.body.appendChild(div);
document.body.appendChild(p);
document.body.appendChild(button);


var buttonattribute = document.getElementsByTagName("button")[0];   // Get the first <h1> element in the document
var att = document.createAttribute("onclick");       // Create a "class" attribute
att.value = "myFunction()";                           // Set the value of the class attribute
buttonattribute.setAttributeNode(att);                          // Add the class attribute to <h1>

// also: Element.setAttribute(name, value);


function myFunction () {
    window.print();
    console.log("this worked!");
}



console.log(arr);

// arr.length = 3;

// console.log(arr);