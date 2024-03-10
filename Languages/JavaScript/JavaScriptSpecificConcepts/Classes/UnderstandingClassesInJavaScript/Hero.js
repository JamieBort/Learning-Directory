// Initializing a class definition
export default class Hero {
    constructor(name, level) {
        this.name = name;
        this.level = level;
    }

    // Adding a method to the constructor
    greet() {
        console.log(`${this.name} says hello.`);
        return `${this.name} says hello.`;
    }
}