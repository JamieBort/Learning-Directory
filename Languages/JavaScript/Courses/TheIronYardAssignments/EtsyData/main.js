// Since the `data.js` file is loaded in your `index.html` before this one,
// you have access to the `data` variable that contains the Etsy Store data.
// Open your `index.html` page in your browser and you can verify that the following
// is properly working. The `data` variable is an array with 25 items in it
console.log(data);

// 1: Show me how to calculate the average price of all items.
function question1() {
  // Answer:
  let total = 0;
  let average;
  for (var i = 0; i < data.length; i++) {
    total += data[i].price;
    // console.log(a);
  }
  average = total / data.length;
  console.log("The average price is: $" + average.toFixed(2));
  return average;
}



// 2: Show me how to get an array of items that cost between $14.00 and $18.00 USD
function question2() {
  // Answer:
  let array = [];
  for (var i = 0; i < data.length; i++) {
    if (data[i].price < 18 && data[i].price > 14) {
      // console.log(data[i].price);
      array.push(data[i].price);
    }
  }
  console.log("The array of items that cost between $14.00 and $18.00 has the following elements: " + array);
}



// 3: Which item has a "GBP" currency code? Display it's name and price.
function question3() {
  // Answer:
  for (var i = 0; i < data.length; i++) {
    if (data[i].currency_code === "GBP") {
      console.log("The name is '" + data[i].title + "'.");
      console.log("The price is $" + data[i].price);
    }
  }
}


// 4: Display a list of all items who are made of wood.
function question4() {
  // Answer:
  let list = [];
  for (var i = 0; i < data.length; i++) {
    if (data[i].materials.includes("wood")) {
      console.log("'" + data[i].title + "' contains wood.");
      list.push(data[i].title);
      // list[i] = data[i].title
    }
  }
  console.log(list);
  return list;
}


// 5: Which items are made of eight or more materials?
//    Display the name, number of items and the items it is made of.
function question5() {
  // Answer:
  for (var i = 0; i < data.length; i++) {
    if (data[i].materials.length > 7) {
      console.log("'" + data[i].title + "' is made of eight or more materials.");
    }
  }
}


// 6: How many items were made by their sellers?
// Answer:
function question6() {
  // Answer:
  let tally = 0;
  for (var i = 0; i < data.length; i++) {

    if (data[i].who_made === "i_did") {
      // console.log("hello");
      tally += 1;
          }

  }
  console.log(tally + " items were made by their sellers.");
}
