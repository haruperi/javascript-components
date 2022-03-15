// 4.0 JAVASCRIPT FLOW CONTROL - CONDITIONALS
// if
const varIf = false
let varTrue = ""
let varFalse = ""
const ratingVar = 3
let ratingStar = ""

if (varIf){
    varTrue = "its TRUE"
}

// if else
if (varIf) {
    varTrue = "its TRUE"
} else {
    varFalse = "its TRUE"
}

// ternary
varIf === true ? varTrue = "its TRUE" : varFalse = "its TRUE"

//Switch
switch (ratingVar) {
    case 1:
        ratingStar = "One Star"
        break;
    case 2:
        ratingStar = "Two Star"
        break;
    case 3:
        ratingStar = "Three Star"
        break;
    case 4:
        ratingStar = "Four Star"
        break;
    case 5:
        ratingStar = "Five Star"
        break;

    default:
        ratingStar = "Zero Star"
        break;
}


// 5.0 JAVASCRIPT LOGICAL OPERATORS
// can be && or || or !
if (3<4 && 5>2) {
    let  num  = "Some Text..."
}

/************************************************************************************************************
                                                 EXERCISES
 **********************************************************************************************************/

/*
1. If your country's population is greater that 33 million, log a string like this to the
console: 'Portugal's population is above average'. Otherwise, log a string like
'Portugal's population is 22 million below average' (the 22 is the average of 33
minus the country's population)
2. After checking the result, change the population temporarily to 13 and then to
130. See the different results, and set the population back to original
 */

/*
  Write an if...else statement that prints `even` if the
  number is even and prints `odd` if the number is odd.

  Note - make sure to print only the string "even" or the string "odd"
 */

/*
Write a series of conditional statements that:

Prints "not a group" if musicians is less than or equal to 0
Prints "solo" if musicians is equal to 1
Prints "duet" if musicians is equal to 2
Prints "trio" if musicians is equal to 3
Prints "quartet" if musicians is equal to 4
Prints "this is a large group" if musicians is greater than 4

change the value of `musicians` to test your conditional statements
 */



/*
Since this might be your first time playing a murder mystery, we've simplified things quite a bit to make it easier. Here's what we know! In this murder mystery there are:

four rooms: the ballroom, gallery, billiards room, and dining room,
four weapons: poison, a trophy, a pool stick, and a knife,
and four suspects: Mr. Parkes, Ms. Van Cleve, Mrs. Sparr, and Mr. Kalehoff.
We also know that each weapon corresponds to a particular room, so…

the poison belongs to the ballroom,
the trophy belongs to the gallery,
the pool stick belongs to the billiards room,
and the knife belongs to the dining room.
And we know that each suspect was located in a specific room at the time of the murder.

Mr. Parkes was located in the dining room.
Ms. Van Cleve was located in the gallery.
Mrs. Sparr was located in the billiards room.
Mr. Kalehoff was located in the ballroom.
To help solve this mystery, write a combination of conditional statements that:

sets the value of weapon based on the room and
sets the value of solved to true if the value of room matches the suspect's room
Afterwards, use this template to print a message to the console if the mystery was solved:

__________ did it in the __________ with the __________!
What goes into the three blank spaces? You can fill in the blanks with the name of the suspect, the room, and the weapon! For example, an output string may look like:

Mr. Parkes did it in the dining room with the knife!
Be sure to watch out for any extra or missing characters (including spaces and punctuation marks) in your output string as well!

 change the value of `room` and `suspect` to test your code
 */

/*
Use the following variables in your solution:

balance - the account balance
isActive - if account is active
checkBalance - if you want to check balance
Hint: The variable balance could be a value less than, greater than, or equal to 0. The variables isActive and checkBalance are booleans that can be set to true or false.

example
If checkBalance equals true and isActive equals false, then Your account is no longer active. should be printed to the console.

let balance = 325.00;
let checkBalance = true;
let isActive = false;

// change the values of `balance`, `checkBalance`, and `isActive` to test your code
 */






/*
  Write a single if statement that logs out the message:

  "I'd like two scoops of __________ ice cream in a __________ with __________."

  ...only if:
    - flavor is "vanilla" or "chocolate"
    - vessel is "cone" or "bowl"
    - toppings is "sprinkles" or "peanuts"

  We're only testing the if statement and your boolean operators.
  It's okay if the output string doesn't match exactly.
  // change the values of `flavor`, `vessel`, and `toppings` to test your code
 */




/*
Size	Width	Length	Sleeve
S	    18"	    28"	    8.13"
M	    20"	    29" 	8.38"
L	    22"	    30" 	8.63"
XL	    24"	    31" 	8.88"
2XL	    26"	    33" 	9.63"
3XL	    28"	    34"	    10.13"

  Using if/else statements, create a series of logical expressions that logs the size of a t-shirt based on the measurements of:
    - shirtWidth
    - shirtLength
    - shirtSleeve

  Use the chart above to print out one of the following correct values:
    - S, M, L, XL, 2XL, or 3XL

    For example, if…

let shirtWidth = 23; // size L (large)
let shirtLength = 30; // size L (large)
let shirtSleeve = 8.71; // size L (large)
// change the values of `shirtWidth`, `shirtLength`, and `shirtSleeve` to test your code
 */



/*
  Use a series of ternary operator to set the category to one of the following:
    - "herbivore" if an animal eats plants
    - "carnivore" if an animal eats animals
    - "omnivore" if an animal eats plants and animals
    - undefined if an animal doesn't eat plants or animals

  Notes
    - use the variables `eatsPlants` and `eatsAnimals` in your ternary expressions
    - `if` statements aren't allowed ;-)
    // change the values of `eatsPlants` and `eatsAnimals` to test your code
 */


/*
In 2015, the U.S. Bureau of Labor Statistics conducted research to reveal how average salary is directly related to the number of years spent in school. In their findings, they found that people with:

no high school diploma earned an average of $25,636/year,
a high school diploma earned an average of $35,256/year,
an Associate's degree earned an average of $41,496/year,
a Bachelor's degree earned an average of $59,124/year,
a Master's degree earned an average of $69,732/year,
a Professional degree earned an average of $89,960/year,
and a Doctoral degree earned an average of $84,396/year.

 Write a switch statement to set the average salary of a person based on their type of completed education.

// change the value of `education` to test your code
 */

/*
1. Use a switch statement to log the following string for the given 'language':
chinese or mandarin: 'MOST number of native speakers!'
spanish: '2nd place in number of native speakers'
english: '3rd place'
hindi: 'Number 4'
arabic: '5th most spoken language'
for all other simply log 'Great language too :D'
 */


/*
1. If your country's population is greater than 33 million, use the ternary operator
to log a string like this to the console: 'Portugal's population is above average'.
Otherwise, simply log 'Portugal's population is below average'. Notice how only
one word changes between these two sentences!
2. After checking the result, change the population temporarily to 13 and then to
130. See the different results, and set the population back to original
 */


/*
Type Conversion and Coercion
----------------------------------------------------
1. Predict the result of these 5 operations without executing them:
'9' - '5';
'19' - '13' + '17';
'19' - '13' + 17;
'123' < 57;
5 + 6 + '4' + 9 - 4 - 2;
2. Execute the operations to check if you were right
 */

/*
Equality Operators: == vs. ===
---------------------------------------------
1. Declare a variable 'numNeighbours' based on a prompt input like this:
prompt('How many neighbour countries does your country
have?');
2. If there is only 1 neighbour, log to the console 'Only 1 border!' (use loose equality
== for now)
3. Use an else-if block to log 'More than 1 border' in case 'numNeighbours'
is greater than 1
4. Use an else block to log 'No borders' (this block will be executed when
'numNeighbours' is 0 or any other value)
5. Test the code with different values of 'numNeighbours', including 1 and 0.
6. Change == to ===, and test the code again, with the same values of
'numNeighbours'. Notice what happens when there is exactly 1 border! Why
is this happening?
7. Finally, convert 'numNeighbours' to a number, and watch what happens now
when you input 1
8. Reflect on why we should use the === operator and type conversion in this
situation
 */

/*
Logical Operators
1. Comment out the previous code so the prompt doesn't get in the way
2. Let's say Sarah is looking for a new country to live in. She wants to live in a
country that speaks english, has less than 50 million people and is not an
island.
3. Write an if statement to help Sarah figure out if your country is right for her.
You will need to write a condition that accounts for all of Sarah's criteria. Take
your time with this, and check part of the solution if necessary.
4. If yours is the right country, log a string like this: 'You should live in Portugal :)'. If
not, log 'Portugal does not meet your criteria :('
5. Probably your country does not meet all the criteria. So go back and temporarily
change some variables in order to make the condition true (unless you live in
Canada :D)
 */