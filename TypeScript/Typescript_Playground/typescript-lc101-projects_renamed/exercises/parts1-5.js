// URL for the instructions: 
// https://education.launchcode.org/intro-to-professional-web-dev/chapters/typescript/exercises.html 
// Part 1: Declare (5) Variables With Type
var spacecraftName = 'Determination';
var speedMph = 17500;
var kilometersToMars = 225000000;
var kilometersToTheMoon = 384400;
var milesPerKilometer = 0.621;
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
function getDaysToLocation(kilometersAway) {
    var milesAway = kilometersAway * milesPerKilometer;
    var hoursToLocation = milesAway / speedMph;
    var getDaysToLocation = hoursToLocation / 24; // do I need this one?
    return getDaysToLocation;
}
// 2. Print out the days to Mars.
//      a. Move the output statement from part 2 below your new function.
//      b. Refactor the template literal to use ${getDaysToLocation(kilometersToMars)} and ${spacecraftName}.
// console.log(`The spacecraft name is ${spacecraftName} and the days to Mars is ${daysToMars}.`)
console.log("SECOND. The spacecraft name is " + spacecraftName + " and it is " + getDaysToLocation(kilometersToMars) + " the days to Mars.");
// 3. Print out the days to the Moon.
// Add another output statement and template literal using ${getDaysToLocation(kilometersToTheMoon)} and ${spacecraftName}.
console.log("THIRD. The spacecraft name is " + spacecraftName + " and it is " + getDaysToLocation(kilometersToTheMoon) + " the days to the Moon.");
// Use the terminal in VSCode to recompile your .ts file, then run the parts1-5.js file again.
// Move your output statement from part 2 here. Update the template literal to call
// the function and print the outputs for a Mars trip and a moon trip.
// Part 4: Create a Spacecraft Class
// Create an instance of the class here:
// Move your output statements from part 3 here. Update the template literals use the
// instance of the class.
// Part 5: Export and Import the SpaceLocation Class
// Add the required import statement BEFORE the part 1 concent.
// Add the printDaysToLocation function to the Spacecraft class.
// Paste in the code from step 6 here:
