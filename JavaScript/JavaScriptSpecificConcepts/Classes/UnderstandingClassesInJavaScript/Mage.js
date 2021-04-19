import Hero from './Hero';
// // Initializing a class definition
// class Hero {
//     constructor(name, level) {
//         this.name = name;
//         this.level = level;
//     }

//     // Adding a method to the constructor
//     greet() {

//         console.log(`${this.name} says hello.`);
//         return `${this.name} says hello.`;
//     }
// }

// const hero1 = new Hero('Varg', 1);
// console.log(hero1);

// // let hero = new Hero("Jim", 3);
// // hero.greet();

// Creating a new class from the parent
export default class Mage extends Hero {
    constructor(name, level, spell) {
        // Chain constructor with super
        super(name, level);

        // Add a new property
        this.spell = spell;
    }

    doorBell(){
        console.log("Ding Dong.")
    }
}