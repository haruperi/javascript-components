'use strict'

//boolean
let isCool: boolean = true

// number
let age: number = 56

// string
let eyeColor: string = 'brown'

// Array
let pets: string[] = ['cat', 'dog', 'pig']

// Object
let user: object = {
    fname: 'Rufaro',
    age: age
}

// null and undefined
let meh: undefined = undefined
let noo: null = null

// Tuple
let basket: [string, number]
basket = ['basketball', 5]

// Enum
enum Size {
    Small = 1,
    Medium = 2,
    Large = 3
}

let sizeName: string = Size[2]

// Any (dont use)
let whatever: any = 'dont use'
whatever = 5

// Function return types
const sumFnc = (): void => {
    console.log("Sum function")
}

const sum = (a: number, b: number): number => {
    return a + b
}

const neverFnc = (): never => {
    throw Error("For func with no return or endpoint")
}


// Interface
interface RobotArmy {
    count: number,
    type: string,
    magic?: string
}

let fightRobotArmy = (robots: RobotArmy) => {
    console.log("Fight")
}


// Class
class Animal {
    private readonly name: string = 'Lion'

    constructor(name: string) {
        this.name = name;
    }

    sound(): string {
        return `${this.name} roars`
    }
}

// Union
let confused: string | number = 'hello'
