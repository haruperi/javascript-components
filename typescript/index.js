'use strict';
//boolean
let isCool = true;
// number
let age = 56;
// string
let eyeColor = 'brown';
// Array
let pets = ['cat', 'dog', 'pig'];
// Object
let user = {
    fname: 'Rufaro',
    age: age
};
// null and undefined
let meh = undefined;
let noo = null;
// Tuple
let basket;
basket = ['basketball', 5];
// Enum
var Size;
(function (Size) {
    Size[Size["Small"] = 1] = "Small";
    Size[Size["Medium"] = 2] = "Medium";
    Size[Size["Large"] = 3] = "Large";
})(Size || (Size = {}));
let sizeName = Size[2];
// Any (dont use)
let whatever = 'dont use';
whatever = 5;
// Function return types
const sumFnc = () => {
    console.log("Sum function");
};
const sum = (a, b) => {
    return a + b;
};
const neverFnc = () => {
    throw Error("For func with no return or endpoint");
};
let fightRobotArmy = (robots) => {
    console.log("Fight");
};
// Class
class Animal {
    constructor(name) {
        this.name = 'Lion';
        this.name = name;
    }
    sound() {
        return `${this.name} roars`;
    }
}
// Union
let confused = 'hello';
