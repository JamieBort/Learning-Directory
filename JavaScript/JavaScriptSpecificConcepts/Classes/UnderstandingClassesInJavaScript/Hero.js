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

// // Creating a new class from the parent
// class Mage extends Hero {
//     constructor(name, level, spell) {
//         // Chain constructor with super
//         super(name, level);

//         // Add a new property
//         this.spell = spell;
//     }
// }

// const hero1 = new Hero('Varg', 1);
// console.log(hero1);

// const hero2 = new Mage('Lejon', 2, 'Magic Missile');
// console.log(hero2);

// // let hero = new Hero("Jim", 3);
// // hero.greet();

