// Initializing a class definition
class Hero {
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

let hero = new Hero("Jim", 3);
hero.greet();