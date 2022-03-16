// The Array object is used to store multiple values in a single variable with the  syntax. Arrays use numbers to access the elements inside of them. The indexes are zero-based, so arrayName[0] returns the first item, then [1] returns the second, then [2] returns the third, and so on.

// Array Properties and Methods

//length - sets or returns the number of elements in an array.
    var numbers = [1, 2, 3, 4, 5];
console.log(numbers.length) //5
numbers.length = 3
console.log(numbers.length) //3 - numbers is now [1, 2, 3]


//concat() - joins 2 or more arrays together and returns a copy of the arrays. Does not change the original array.
    var numArr1 = [1, 2, 3];
var numArr2 = [4, 5, 6]
var allTheNumbers = numArr1.concat(numArr2)
console.log(allTheNumbers, numArr1, numArr2)
//[1, 2, 3, 4, 5, 6], [1, 2, 3], [4, 5, 6]

//copyWithin() - *(index position to copy to, optional starting index, optional ending index)* - copies array values to another position in the array, overwriting the original value. Modifies the original array.
    var fruits = ["peach", "orange", "apple", "banana"]
fruits.copyWithin(2, 0)
console.log(fruits) //["peach", "orange", "peach", "orange"]


//entries() - returns an Array Iterator object (gives access to the .next() and .value method) with key/value pairs. For each item in the original array, the new object will contain an array with the index as the key and the item as the value
var array1 = ['a', 'b', 'c'];
var iterator1 = array1.entries();
console.log(iterator1.next().value);
//expected output: Array [0, "a"]
console.log(iterator1.next().value);
//expected output: Array [1, "b"]


//filter() - creates a new array with only the elements from the original array that pass a test. The syntax is let newArr = ogArr.filter(callbackFunction) The callback function is used to test each element in the ogArr and returns those elements to newArr.
var ogArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var newArr = ogArr.filter(even => (even % 2 === 0))
console.log(newArr, ogArr)
//[2, 4, 6, 8, 10], [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


//find() findIndex() - returns the first value that passes the test. The syntax is let found = ogArr.find(callbackFunction) The callback function is used to test each element in the ogArr until a truthy value is found and returns a single value. findIndex() returns the index of the value.
    var ogArr = [10, 20, 30, 40];
var found = ogArr.find(element => (element > 10))
console.log(found)
//20


//flat() - creates a new array from an array and unnests it to the specified level. The syntax is let flat = ogArr.flat(1) The default parameter is 1 and will flatten one nested level, but can be changed to increase the amount you want to flatten until it is a single array returned.
    const ogArray = [1, 2, [3, 4, [5]]]
ogArray.flat() // [1, 2, 3, 4, [5]]
ogArray.flat(2) // [1, 2, 3, 4, 5]


//flatMap() - maps each element using a mapping function, then flattens the result into a new array. The syntax is let flatMap = ogArr.flatMap(callbackFunction) The callback function is used to produce an element of the new array and then flattens the array to a depth of 1.
const ogArray = [1, 2, 3, 4, 5]
ogArray.flatMap(num => [num, num * 2])
// [1, 2, 2, 4, 3, 6, 4, 8, 5, 10]


//forEach() - is similar to a for loop and runs the callback function over every element in an array. The syntax is ogArr.forEach((element, index, array) => callback function) Modifies the original array.
    var ogArr = [5, 10, 15, 20]
ogArr.forEach((element, index, arr) => (arr[index] = element * 10))
console.log(ogArr)
//[50, 100, 150, 200]


//from() - returns a new array from anything with a length property or iterable object (basically other arrays).
var myArr = Array.from("ABCDEFG")
console.log(myArr)
//►(7) ["A", "B", "C", "D", "E", "F", "G"]


//includes() - checks if an array includes an element, the fromIndex is an optional argument.
    var arr = ['a', 'b', 'c']
arr.includes('c')
//true


//indexOf() lastIndexOf() - checks if an array includes an element and returns the first position/index where it can be found. The fromIndex is an optional argument. lastIndexOf() starts at the end and returns the first index where it is found.
    var shopList = ['milk', 'bread', 'eggs']
const addToList = (shopList, item) =>
    shopList.indexOf(item) === -1 ?
        shopList.push(item) : null
addToList(shopList, 'cheese')
console.log(shopList, shopList.indexOf('cheese'))
//►['milk', 'bread', 'eggs', 'cheese'], 4


//join() - joins all elements of an array together in a string. A seperator can optionally be called as well, if no seperator is specified, a comma is used.
    var names = ["Brittney", "Joe"]
console.log(names.join(), names.join(" and "))
//(Brittney, Joe), (Brittney and Joe)


//map() - creates a new array with the results of a callback function on every element in the original array.
    var ogArr = [1, 4, 9, 16]
const doubleArr = ogArr.map(x => x * 2)
console.log(ogArr, doubleArr)
//►[1, 4, 9, 16], [2, 8, 18, 32]


//pop() - modifies an array by taking off the last element, returns the element it removed.
    var myFish = ['angel', 'clown', 'mandarin', 'sturgeon']
var popped = myFish.pop()
console.log(myFish, popped)
//►['angel', 'clown', 'mandarin'], 'sturgeon'


//push() - modifies an array by adding an element specified to the end of the original array and returns the new length.
var myFish = ['angel', 'clown', 'mandarin', 'sturgeon']
myFish.push('sword')
console.log(myFish)
//►['angel', 'clown', 'mandarin', 'sturgeon', 'sword']


//shift() - modifies an array by taking off the first element, returns the element it removed.
    var myFish = ['angel', 'clown', 'mandarin', 'sturgeon']
var shifted = myFish.shift()
console.log(myFish, shifted)
//►['clown', 'mandarin', 'sturgeon'], 'angel'


//unshift() - modifies an array by adding an element specified to the beginning of the original array and returns the new length.
var myFish = ['angel', 'clown', 'mandarin', 'sturgeon']
myFish.unshift('sword')
console.log(myFish)
//►['sword', 'angel', 'clown', 'mandarin', 'sturgeon']


//reduce() reduceRight() - executes a reducer function on an array left to right, reduceRight() goes right to left. The syntax is reduce((accumulator, currentValue) => accumulator + currentValue)
const array1 = [1, 2, 3, 4]
const reducedArr = array1.reduce((acc, val) => acc + val)
console.log(reducedArr)
//►10 (1 + 2 + 3 + 4)


//reverse() - reverses the order of the elements in an array.
    const array1 = [1, 2, 3, 4]
const revArr = array1.reverse()
console.log(revArr)
//►[4, 3, 2, 1]



//slice() - returns a copy of an array from the specified positions to a new array. The syntax is arr.slice(beginIndex, endIndex),
const array1 = [1, 2, 3, 4]
const sliced = array1.slice(2, 4)
console.log(sliced)
//►(2) [3, 4]



///splice() - modifies an existing array by removing/replacing existing elements or adding new ones. The syntax is arr.splice(startIndex, deleteCount(optional), 'item'(optional))
var months = ['Jan', 'March', 'April', 'June']
months.splice(1, 0, 'Feb') //inserts at index 1
console.log(months)
//►['Jan', 'Feb', 'March', 'April', 'June']

var months = ['Jan', 'March', 'April', 'June']
months.splice(4, 1, 'May') //replaces 1 element at index 4
console.log(months)
//►['Jan', 'Feb', 'March', 'April', 'May']


//some() - checks if any elements in an array pass the test by the callback function.
const array1 = [1, 2, 3, 4]
var even = element => element % 2 === 0
console.log(array1.some(even))
//true



///toString() - returns a string of the specified arrays elements.
    const array1 = [1, 2, 3, 4]
console.log(array1.toString())
//1,2,3,4



/*******************************************************************************************************************
                                            EXERCISES
 ******************************************************************************************************************/

/*
1. Create an array containing 4 population values of 4 countries of your choice.
You may use the values you have been using previously. Store this array into a
variable called 'populations'
2. Log to the console whether the array has 4 elements or not (true or false)
3. Create an array called 'percentages' containing the percentages of the
world population for these 4 population values. Use the function
'percentageOfWorld1' that you created earlier to compute the 4
percentage values
 */

/*
1. Create an array containing all the neighbouring countries of a country of your
choice. Choose a country which has at least 2 or 3 neighbours. Store the array
into a variable called 'neighbours'
2. At some point, a new country called 'Utopia' is created in the neighbourhood of
your selected country. So add it to the end of the 'neighbours' array
3. Unfortunately, after some time, the new country is dissolved. So remove it from
the end of the array
4. If the 'neighbours' array does not include the country ‘Germany’, log to the
console: 'Probably not a central European country :D'
5. Change the name of one of your neighbouring countries. To do that, find the
index of the country in the 'neighbours' array, and then use that index to
change the array at that index position. For example, you can search for
'Sweden' in the array, and then replace it with 'Republic of Sweden'.
 */


/*
 * let rainbow = ['Red', 'Orange', 'Blackberry', 'Blue']
 *
 * Use only the splice() method to modify the rainbow variable:
 *  - remove "Blackberry"
 *  - add "Yellow" and "Green"
 *  - add "Purple"
 */

/*
Create a function called hasEnoughPlayers() that takes the team array as an argument and returns true or false depending on if the array has at least seven players.

let team = ["Oliver Wood", "Angelina Johnson", "Katie Bell", "Alicia Spinnet", "George Weasley", "Fred Weasley", "Harry Potter"]
 */

/*
var captain = "Mal";
var second = "Zoe";
var pilot = "Wash";
var companion = "Inara";
var mercenary = "Jayne";
var mechanic = "Kaylee";

var crew = [captain, second, pilot, companion, mercenary, mechanic];

Use the push() method to add the three new crew members to the crew array.

var doctor = "Simon";
var sister = "River";
var shepherd = "Book";
 */



/*
 * Programming Quiz: Another Type of Loop (6-8)
 *
 * Use the existing `test` variable and write a `forEach` loop
 * that adds 100 to each number that is divisible by 3.
 *
 * Things to note:
 *  - you must use an `if` statement to verify code is divisible by 3
 *  - you can use `console.log` to verify the `test` variable when you're finished looping
 *
 *
 * var test = [12, 929, 11, 3, 199, 1000, 7, 1, 24, 37, 4,
    19, 300, 3775, 299, 36, 209, 148, 169, 299,
    6, 109, 20, 58, 139, 59, 3, 1, 139
];
 */



/*
 * Programming Quiz: I Got Bills (6-9)
 *
 * Use the .map() method to take the bills array below and create a second array
 * of numbers called totals. The totals array should contains each amount from the
 * bills array but with a 15% tip added. Log the totals array to the console.
 *
 * For example, the first two entries in the totals array would be:
 *
 * [57.76, 21.99, ... ]
 *
 * Things to note:
 *  - each entry in the totals array must be a number
 *  - each number must have an accuracy of two decimal points
 *
 *
 * var bills = [50.23, 19.12, 34.01,
    100.11, 12.15, 9.90, 29.11, 12.99,
    10.00, 99.22, 102.20, 100.10, 6.77, 2.22
];
 */




/*
 * Programming Quiz: Nested Numbers (6-10)
 *
 *   - The `numbers` variable is an array of arrays.
 *   - Use a nested `for` loop to cycle through `numbers`.
 *   - Convert each even number to the string "even"
 *   - Convert each odd number to the string "odd"
 *
 * let numbers2 = [
    [243, 12, 23, 12, 45, 45, 78, 66, 223, 3],
    [34, 2, 1, 553, 23, 4, 66, 23, 4, 55],
    [67, 56, 45, 553, 44, 55, 5, 428, 452, 3],
    [12, 31, 55, 445, 79, 44, 674, 224, 4, 21],
    [4, 2, 3, 52, 13, 51, 44, 1, 67, 5],
    [5, 65, 4, 5, 5, 6, 5, 43, 23, 4424],
    [74, 532, 6, 7, 35, 17, 89, 43, 43, 66],
    [53, 6, 89, 10, 23, 52, 111, 44, 109, 80],
    [67, 6, 53, 537, 2, 168, 16, 2, 1, 8],
    [76, 7, 9, 6, 3, 73, 77, 100, 56, 100]
];
 */

/*
 using this array,
let array = ["Banana", "Apples", "Oranges", "Blueberries"];


1. Remove the Banana from the array.

2. Sort the array in order.

3. Put "Kiwi" at the end of the array.

4. Remove "Apples" from the array.

5. Sort the array in reverse order. (Not alphabetical, but reverse
the current Array i.e. ['a', 'c', 'b'] becomes ['b', 'c', 'a'])

you should have at the end:
["Kiwi", "Oranges", "Blueberries"]
 */

/*
// using this array,
const array2 = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];

// access "Oranges".
 */



/*
// Complete the below questions using this array:
const array3 = [
    {
        username: "john",
        team: "red",
        score: 5,
        items: ["ball", "book", "pen"]
    },
    {
        username: "becky",
        team: "blue",
        score: 10,
        items: ["tape", "backpack", "pen"]
    },
    {
        username: "susy",
        team: "red",
        score: 55,
        items: ["ball", "eraser", "pen"]
    },
    {
        username: "tyson",
        team: "green",
        score: 1,
        items: ["book", "pen"]
    },

]

//Create an array using forEach that has all the usernames with a "!" to each of the usernames
//Create an array using map that has all the usernames with a "?" to each of the usernames
//Filter the array to only include users who are on team: red
//Find out the total score of all users using reduce
 */
