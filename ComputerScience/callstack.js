// To cover

// call stack example 01
{
  function multiply(param01, param02) {
    return param01 * param02;
  }

  function square(params03) {
    return multiply(params03);
  }

  function printSquare(param04) {
    const squared = square(param04);
    console.log("logging to the console");
    console.log(squared);
  }
  // printSquare(4);
}

// call stack example 02
{
  function foo() {
    console.log("In foo().");
    try {
      throw new SyntaxError("my error");
    } catch (error) {
      console.log("the error....", error);
    } finally {
      console.log("this still runs....");
    }
  }
  function bar() {
    console.log("In bar().");
    foo();
  }
  function baz() {
    console.log("In baz().");
    bar();
  }
  baz();
}

// console.log("One");
// console.log("2");
// console.log("3");
