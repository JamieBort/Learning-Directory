// var name = "Jhon";
// exports.getName = function() {
//     console.log(name);
//   return name;
// }

// Create Customer class as follows:
export default class Customer {
    constructor(name, level) {
        this.name = name;
        this.level = level;
        console.log("this.level");
    }

    reasignName(){
        this.name="bob";
        console.log("The name has been reassigned to: ", this.name);
        // console.log("name:",name);
        // return this.name;
    }

    // Adding a method to the constructor
    greet() {
        // reasignName();
        console.log(`${this.name} says hello.`);
        // console.log(`${this.name} says hello.`);
        // console.log(name);
        return `${this.name} says hello.`;
    }
}