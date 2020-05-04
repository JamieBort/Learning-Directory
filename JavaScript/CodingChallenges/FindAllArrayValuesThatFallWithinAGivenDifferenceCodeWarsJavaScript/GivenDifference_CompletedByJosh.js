class GroupByDifference {
    constructor(numbers) {
        this.numbers = numbers; // Why this line of code? Why not ommit it? Or 'numbers = numbers'?
    };
    find(diff) {

        console.log(this.numbers);
        this.difference = diff; // Seems like 'this.difference = diff;' should be 'this.diff = difference;' instead. If I am reading it correctly it's assigning 'diff' to 'this.difference'. 

        // Initialize an output array. 
        let output = [];
        let indices = [];
        // Iterate through 'this.numbers'.
        for (let i = 0; i < this.numbers.length; i++) {
            // In a nested loop, iterate again through this.numbers.
            for (let j = 0; j < this.numbers.length; j++) {
                // If the absolute value of numbers[j] - numbers[i] <= difference, push numbers[j] into the output array.
                console.log(this.numbers[j] + ' - ' + this.numbers[i] + " = " + Math.abs(this.numbers[j] - this.numbers[i]));
                if (Math.abs(this.numbers[j] - this.numbers[i]) <= diff && (i != j)) {
                    // console.log("pushing " + this.numbers[j]);
                    indices.push(i);
                }
            }
        }

        for (let t = 0; t < indices.length; t++) {
            for (let s = t + 1; s < indices.length; s++) {
                if (indices[t] == indices[s]) {
                    indices.splice(s, 1);
                    s--;
                }
            }
        }

        for (let r = 0; r < indices.length; r++) {
            output.push(this.numbers[indices[r]]);
        }

        // sorting the output array
        output.sort(function compareFunction(a, b) { // Can be annonomous. I included 'compareFunction' to help reinforce the syntax.
            return a - b;
          });
        
        // Return output array.
        return output;
    }
}
let nums = [5, 32, 5, 1, 31, 70, 30, 8];
let difference = 2;
let foo = new GroupByDifference(nums);
console.log(foo.find(difference));