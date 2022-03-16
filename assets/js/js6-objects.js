//Objects, collections of properties, are used to store values in property:value pairs with the { } (curly-brace) syntax. Properties can be accessed or changed by using objName.propName or obj['propName'] and methods (functions inside of an object) can be called with objName.propName()

    var objName = {
        color: "blue",
        shape: "circle",
        price: 5,
        otherColors: [
            "yellow",
            "red",
            "green"],
        logShape: function() {
            console.log('I am a' + objName.color + objName.shape + '!')
        }
    }
objName.logShape() // I am a blue circle!


//Object Methods
// Object.assign() - used to copy values from one object to another. Takes a target and a source parameter. Copies the source and modifies the target object.

    const target = {
    name: 'Brittney',
    age: '37'
}

const source = {
    location: 'USA',
    company: 'b.Designed'
}

const newObj = Object.assign(target, source)
console.log(newObj)
// { name: "Brittney", age: "37", company: "b.Designed", location: "USA" }
console.log(target)
// { name: "Brittney", age: "37", company: "b.Designed", location: "USA" }
console.log(source)
// { location: 'USA', company: 'b.Designed' }

// Object.create() - used to create a new object and link it to the prototype object and make it extensible.

    const job = {
    position: 'cashier',
    type: 'hourly',
    isAvailable: true,
    showDetails() {
        const accepting = this.isAvailable ? 'is accepting applications' : "is not currently accepting applications";

        console.log(`The ${this.position} position is ${this.type} and ${accepting}.`);
    }
};

// Use Object.create to pass properties
const barista = Object.create(job);

barista.position = "barista";
barista.showDetails();
// The barista position is hourly and is accepting applications.


//Object.entries() - creates a nested array of the key/value pairs of an obj.

    const person = {
    name: 'Brittney',
    age: '37',
    location: 'USA'
}

const entries = Object.entries(person)
console.log(entries)

/* (3) […]
​
0: Array [ "name", "Brittney" ]
​
1: Array [ "age", "37" ]
​
2: Array [ "location", "USA" ]
​
length: 3

*/



// Object.freeze() - prevents properties on an object from being changed, added, or removed.

    const user = {
    username: 'Majestix',
    password: '********'
}

const newUser = Object.freeze(user)

//newUser.password = 'password'
newUser.online = true
//newUser.username = ''

console.log(newUser)
// { username: 'Majestix', password: '********' }



// Object.fromEntries() - transforms a list of key/value pairs into an object.

    const entries = [
    ['name', 'Brittney'],
    ['age', '37']
]

const obj = Object.fromEntries(entries)

console.log(obj)

// { name: 'Brittney', age: '37' }


//Object.keys() - creates an array containing the keys (the left side properties) of an object.

    const user = {
    name: 'username',
    password: '********',
    online: false
}

const keys = Object.keys(user)
console.log(keys)
// ["name", "password", "online"]


// Object.seal() - prevents new properties from being added to an object, but still allows properties to be changed.

    const user = {
    username: 'Majestix',
    password: '********'
}

const newUser = Object.freeze(user)

//newUser.password = 'password'
newUser.online = true
//newUser.username = ''

console.log(newUser)
// { username: '', password: 'password' }


// Object.values() - creates an array of the values (the right side properties) of an object.)

const user = {
    name: 'username',
    password: '********',
    online: false
}

const values = Object.values(user)
console.log(values)
// ["username", "********", "false"]


//How to use methods to alter data

const users = {
    username0: 'Majestix',
    username1: 'AugusLumos',
    username2: 'Inferiumbra'
}

Object.keys(obj).forEach((key, index) => {
    console.log(key, obj[key])
})
/*
username0 Majestix
username1 AugusLumos
username2 Inferiumbra
*/

Object.values(obj).forEach(value => {
    console.log(value)
})

/*
Majestix
AugusLumos
Inferiumbra
*/

Object.entries(obj).forEach(value => {
    console.log(value)
})

/*
["username0", "Majestix"]
["username1", "AugusLumos"]
["username2", "Inferiumbra"]
*/

Object.entries(obj).map(value => {
    return value[1] + value[0].replace('username', '')
})

// ["Majestix0", "AugusLumos1", "Inferiumbra2"]


//Dynamic Property Values

const name = 'Brittney'
const obj = {
    [name]: 'name',
    [1 + 2]: 3
}
console.log(obj) // Brittney: 'name', 3: 3


/*
Create an object called 'myCountry' for a country of your choice, containing
properties 'country', 'capital', 'language', 'population' and
'neighbours' (an array like we used in previous assignments)
 */

/*
1. Using the object from the previous assignment, log a string like this to the
console: 'Finland has 6 million finnish-speaking people, 3 neighbouring countries
and a capital called Helsinki.'
2. Increase the country's population by two million using dot notation, and then
decrease it by two million using brackets notation.
 */

/*
1. Add a method called 'describe' to the 'myCountry' object. This method
will log a string to the console, similar to the string logged in the previous
assignment, but this time using the 'this' keyword.
2. Call the 'describe' method
3. Add a method called 'checkIsland' to the 'myCountry' object. This
method will set a new property on the object, called 'isIsland'.
'isIsland' will be true if there are no neighbouring countries, and false if
there are. Use the ternary operator to set the property.
 */


/*

//see if you can follow the example open() method and create the close() method.

var umbrella = {
    color: "pink",
    isOpen: true,
    open: function() {
        if (umbrella.isOpen === true) {
            return "The umbrella is already opened!";
        } else {
            umbrella.isOpen = true;
            return "Julia opens the umbrella!";
        }
    },
    // your code goes here
};
 */


/*
Using the given object:

var savingsAccount = {
  balance: 1000,
  interestRatePercent: 1,
  deposit: function addMoney(amount) {
    if (amount > 0) {
      savingsAccount.balance += amount;
    }
  },
  withdraw: function removeMoney(amount) {
    var verifyBalance = savingsAccount.balance - amount;
    if (amount > 0 && verifyBalance >= 0) {
      savingsAccount.balance -= amount;
    }
  }
};
add a printAccountSummary() method that returns the following account message:

Welcome!
Your balance is currently $1000 and your interest rate is 1%.
 */


/*
Create an object called facebookProfile. The object should have 3 properties:

your name
the number of friends you have, and
an array of messages you've posted (as strings)
The object should also have 4 methods:

postMessage(message) - adds a new message string to the array
deleteMessage(index) - removes the message corresponding to the index provided
addFriend() - increases the friend count by 1
removeFriend() - decreases the friend count by 1
 */


/*
Here is an array of donut objects.

var donuts = [
  { type: "Jelly", cost: 1.22 },
  { type: "Chocolate", cost: 2.45 },
  { type: "Cider", cost: 1.59 },
  { type: "Boston Cream", cost: 5.99 }
];
Directions:
Use the forEach() method to loop over the array and print out the following donut summaries using console.log.

Jelly donuts cost $1.22 each
Chocolate donuts cost $2.45 each
Cider donuts cost $1.59 each
Boston Cream donuts cost $5.99 each
 */