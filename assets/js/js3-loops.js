// Loops

// While loop
let start = 0; // when to start
while (start < 10) { // when to stop
    console.log(start);
    start = start + 2; // how to get to the next item
}
// Use while loop only  when you dont know how many times the code will execute , else use for loop
// do ... while loop executes at least once

// For loop
for ( start; stop; step ) {
    // do this thing
}

for (let i = 0; i < 6; i = i + 1) {
    console.log("Printing out i = " + i);
}








/*
Loop through the numbers 1 to 100
If the number is divisible by 3, print "Fizz"
If the number is divisible by 5, print "Buzz"
If the number is divisible by both 3 and 5, print "FizzBuzz"
If the number is not divisible by 3 or 5, print the number
* */


/*

 Use the following `while` loop to write out the song "99 bottles of juice".
Log the your lyrics to the console.

 Note
   - Each line of the lyrics needs to be logged to the same line.
   - The pluralization of the word "bottle" changes from "2 bottles" to "1 bottle" to "0 bottles".

99 bottles of juice on the wall! 99 bottles of juice! Take one down, pass it around... 98 bottles of juice on the wall!
98 bottles of juice on the wall! 98 bottles of juice! Take one down, pass it around... 97 bottles of juice on the wall!
...
2 bottles of juice on the wall! 2 bottles of juice! Take one down, pass it around...
1 bottle of juice on the wall!
1 bottle of juice on the wall! 1 bottle of juice! Take one down, pass it around...
0 bottles of juice on the wall!

while (your stop condition goes here ) {
     check value of num
     print lyrics using num
     don't forget to check pluralization on the last line!
     decrement num
}
 */



/*
  NASA's countdown to launch includes checkpoints where NASA engineers complete certain technical tasks. During the final minute, NASA has 6 tasks to complete:

Orbiter transfers from ground to internal power (T-50 seconds)
Ground launch sequencer is go for auto sequence start (T-31 seconds)
Activate launch pad sound suppression system (T-16 seconds)
Activate main engine hydrogen burnoff system (T-10 seconds)
Main engine start (T-6 seconds)
Solid rocket booster ignition and liftoff! (T-0 seconds)
NOTE: "T-50 seconds" read as "T-minus 50 seconds".

Directions:
Write a while loop that counts down from 60 seconds and:

If there's a task being completed, it prints out the task
If there is no task being completed, it prints out the time as T-x seconds
Use the task and time descriptions described above.
 */


/*
Rewrite the while loop as a for loop
var x = 9;
while (x >= 1) {
    console.log("hello " + x);
    x = x - 1;
}
 */


/*
Fix the for loop
for (x < 10; x++) {
    console.log(x);
}
 */


/*
Fix the for loop
for (var k = 0 k < 200 k++) {
    console.log(k);
}
 */

/*
Use a for loop to calculate a factorial
 */

/*

 * Write a nested for loop to print out all of the different seat combinations in the theater.
 * The first row-seat combination should be 0-0
 * The last row-seat combination will be 25-99
 *
 * Things to note:
 *  - the row and seat numbers start at 0, not 1
 *  - the highest seat number is 99, not 100
 */


/*
There are elections in your country! In a small town, there are only 50 voters.
Use a for loop to simulate the 50 people voting, by logging a string like this to
the console (for numbers 1 to 50): 'Voter number 1 is currently voting'

 */


/*
1. Store this array of arrays into a variable called 'listOfNeighbours'
[['Canada', 'Mexico'], ['Spain'], ['Norway', 'Sweden',
'Russia']];
2. Log only the neighbouring countries to the console, one by one, not the entire
arrays. Log a string like 'Neighbour: Canada' for each country
3. You will need a loop inside a loop for this. This is actually a bit tricky, so don't
worry if it's too difficult for you! But you can still try to figure this out anyway
 */
