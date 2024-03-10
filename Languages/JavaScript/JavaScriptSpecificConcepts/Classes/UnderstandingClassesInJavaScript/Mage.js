import Hero from './Hero';

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