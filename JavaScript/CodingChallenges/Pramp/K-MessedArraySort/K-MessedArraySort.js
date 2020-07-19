
//  To runt his code, in terminal in this directory run "nodemon IntegerToRoman.js"

input:  arr = [1, 4, 5, 2, 3, 7, 8, 6, 10, 9], k = 2

output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

possible outcomes for arr[0]
[1, 1, 1, x, x, x, x, x, x, x]

possible outcomes for arr[1]
[4, 4, 4, 4, x, x, x, x, x, x]

possible outcomes for arr[2]
[5, 5, 5, 5, 5, x, x, x, x, x]

possible outcomes for arr[3]
[x, 2, 2, 2, 2, 2, x, x, x, x]

Looking at these options we now have to sort the solely the first element.
Our choices are 1, 4, and 5. 
1 will be selected.