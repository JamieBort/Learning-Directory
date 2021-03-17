// URL for the instructions: 
// https://education.launchcode.org/intro-to-professional-web-dev/chapters/typescript/exercises.html 
// Part 1: Declare (5) Variables With Type
// let spacecraftName: string = 'Determination'; // commented out for Part 4.
// let speedMph: number = 17500; // commented out for Part 4.
var kilometersToMars = 225000000;
var kilometersToTheMoon = 384400;
// let milesPerKilometer: number = 0.621; // commented out for Part 4.
// Part 2: Print Days to Mars
// In the same file you opened in Part 1, do the following.
// Declare and assign these variables.
// Remember: variable declarations in TypeScript include the type!
// let milesToMars: number = kilometersToMars * milesPerKilometer;
// let hoursToMars: number = milesToMars / speedMph;
// let daysToMars: number = hoursToMars / 24;
// Write a console.log statement that prints out the days to Mars.
// Use template literal syntax and the variables ${spacecraftName} and ${daysToMars}.
// console.log(`First. The spacecraft name is ${spacecraftName} and the days to Mars is ${daysToMars}.`) // commented out for the next steps.
// Use the terminal in VSCode to compile your .ts file, then use the command node parts1-5.js to run the JavaScript file created during the build process.
// Code an output statement here (use a template literal):
// Part 3: Create a Function ("getDaysToLocation")
// 1.  In the space indicated, define a function that calculates the days it would take to travel to a location.
//      a. Function name getDaysToLocation
//      b. Parameter
//              kilometersAway must be a number.
//      c. Returns the number of days to a location.
//              Use the same calculations as in Part 2.1.
//              Inside the function, make the variable names generic. Use milesAway and hoursToLocation instead of milesToMars and hoursToMars.
//              The function should declare that it returns a number.
// function getDaysToLocation(kilometersAway: number): number { // commented out for Part 4.
//     let milesAway: number = kilometersAway * milesPerKilometer;
//     let hoursToLocation: number = milesAway / speedMph;
//     let getDaysToLocation: number = hoursToLocation / 24;
//     return getDaysToLocation;
// }
// Move your output statement from part 2 here. Update the template literal to call
// the function and print the outputs for a Mars trip and a moon trip.
// 2. Print out the days to Mars.
//      a. Move the output statement from part 2 below your new function.
//      b. Refactor the template literal to use ${getDaysToLocation(kilometersToMars)} and ${spacecraftName}.
// console.log(`The spacecraft name is ${spacecraftName} and the days to Mars is ${daysToMars}.`)
// console.log(`SECOND. The spacecraft name is ${spacecraftName} and it is ${getDaysToLocation(kilometersToMars)} the days to Mars.`) // commented out for Part 4.
// 3. Print out the days to the Moon.
// Add another output statement and template literal using ${getDaysToLocation(kilometersToTheMoon)} and ${spacecraftName}.
// console.log(`THIRD. The spacecraft name is ${spacecraftName} and it is ${getDaysToLocation(kilometersToTheMoon)} the days to the Moon.`) // commented out for Part 4.
// Use the terminal in VSCode to recompile your .ts file, then run the parts1-5.js file again.
// Part 4: Create a Spacecraft Class
// Create an instance of the class here:
// 2. Move the function getDaysToLocation, defined in Part 3, into the Spacecraft class.
// Remember to place the function after the constructor.
// Update the function to reference the class properties this.milesPerKilometer and this.speedMph.
var Spacecraft = /** @class */ (function () {
    function Spacecraft(name, speedMph) {
        this.milesPerKilometer = 0.621;
        this.name = name;
        this.speedMph = speedMph;
    }
    Spacecraft.prototype.getDaysToLocation = function (kilometersAway) {
        var milesAway = kilometersAway * this.milesPerKilometer;
        var hoursToLocation = milesAway / this.speedMph;
        var getDaysToLocation = hoursToLocation / 24;
        return getDaysToLocation;
    };
    return Spacecraft;
}());
var spaceShuttle = new Spacecraft('Determination', 17500);
// Move your output statements from part 3 here. Update the template literals use the
// instance of the class.
// console.log(`SECOND. The spacecraft name is ${spacecraftName} and it is ${getDaysToLocation(kilometersToMars)} the days to Mars.`) 
// Use template literals, ${spaceShuttle.getDaysToLocation(kilometersToMars)} and ${spaceShuttle.name}.
console.log(spaceShuttle.name + " would take " + spaceShuttle.getDaysToLocation(kilometersToMars) + " days to get to Mars.");
// Use template literals, ${spaceShuttle.getDaysToLocation(kilometersToTheMoon)} and ${spaceShuttle.name}.
console.log(spaceShuttle.name + " would take " + spaceShuttle.getDaysToLocation(kilometersToTheMoon) + " to get to the moon.");
// console.log(`THIRD. The spacecraft name is ${spacecraftName} and it is ${getDaysToLocation(kilometersToTheMoon)} the days to the Moon.`)
// Part 5: Export and Import the SpaceLocation Class
// Add the required import statement BEFORE the part 1 concent.
// Add the printDaysToLocation function to the Spacecraft class.
// Paste in the code from step 6 here:
