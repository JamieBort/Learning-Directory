// to cover tomorrow:
// promises,
// try/catch block,
// event loop,
// debugging

// // try/catch/finally block
// {
//   let j = 0;
//   try {
//     // const bool = true;
//     const bool = true;
//     if (bool === true) {
//       var test = false;
//     } else {
//       var test = true;
//     }
//     if (test === true) {
//       j = 10;
//     } else {
//       j = 9;
//     }
//     // lets you test a block of code for errors
//   } catch (error) {
//     // lets you catch handle (or address) the errors
//     console.log("There was an error:", error);
//   } finally {
//     // lets you execute code regardless of whether an error was triggered
//     console.log("j:", j);
//   }
// }

// try/throw/finally block
try {
  console.log("In the try block");

  if (true) {
    console.log("In the if block");
    throw new SyntaxError("There was a syntax error.");
  }
} catch (error) {
  console.log("There was an error:", error);
  // console.log("There was an error:", error.SyntaxError);
  // console.log("There was an error:", error.console);
  // console.log("There was an error:", error.error);
  // console.log("There was an error:", error.log);
} finally {
  console.log(`\n\n The code continues to run....`);
}
