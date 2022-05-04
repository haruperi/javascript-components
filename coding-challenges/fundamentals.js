'use strict'

// JavaScript Fundamentals – Part 1
// Challenge 1
const mark = {
    fullName: "Mark Miller",
    mass: 78,
    height: 1.69,
    calcBMI() {
        return this.mass / (this.height ** 2)
    }
}

const john = {
    fullName: "John Smith",
    mass: 92,
    height: 1.95,
    calcBMI() {
        return this.mass / (this.height ** 2)
    }
}

const bmi = (person) => person.mass / (person.height ** 2)
const markHigherBMI = bmi(mark) > bmi(john)

// Challenge 2
const displayBMI = () => {
    if (markHigherBMI)
        console.log(`Mark's BMI ${bmi(mark).toFixed(2)} is higher than John's ${bmi(john).toFixed(2)}!`)
    else
        console.log(`John's ${bmi(john).toFixed(2)} BMI is higher than Mark's ${bmi(mark).toFixed(2)}!`)
}


// Challenge 3
const dolphins = [97, 112, 101]
const koalas = [109, 96, 106]

const calcAverage = (arr) => {
    return Math.round((arr.reduce((a, b) => a + b)) / arr.length)
}

const winner = (dolphins, koalas) => {
    if (calcAverage(dolphins) > calcAverage(koalas) && calcAverage(dolphins) >= 100)
        console.log(`The Dolphins WIN`)
    else if (calcAverage(dolphins) < calcAverage(koalas) && calcAverage(koalas) >= 100)
        console.log(`The Koalas WIN`)
    else if (calcAverage(dolphins) === calcAverage(koalas) && calcAverage(koalas) >= 100)
        console.log(`Its a draw`)
    else
        console.log(`There is no winner`)
}


// Challenge 4
const calcTip = (amount) => (amount >= 50 && amount <= 300) ? amount * 0.15 : amount * 0.20
const receipt = (amount) => `The bill was ${amount}, the tip was ${calcTip(amount)}, and the total value ${amount + calcTip(amount)}`


// JavaScript Fundamentals – Part 2
// Challenge 1
const avgDolhins = calcAverage([85, 54, 41])
const avgKoalas = calcAverage([23, 34, 27])
const checkWinner = (avgDolhins, avgKoalas) => {
    if (avgDolhins >= avgKoalas * 2)
        console.log(`Dolphins win (${avgDolhins} vs. ${avgKoalas})`)
    else if (avgKoalas >= avgDolhins * 2)
        console.log(`Koalas win (${avgKoalas} vs. ${avgDolhins})`)
    else
        console.log(`There is no winner`)
}

// Challenge 2
const bills = [125, 555, 44]
const tips = bills.map(bill => calcTip(bill))
const totals = bills.map(bill => bill + calcTip(bill))


// Challenge 3
const displayBmiObj = () => {
    if (mark.calcBMI() > john.calcBMI())
        console.log(`Mark's BMI ${mark.calcBMI().toFixed(2)} is higher than John's ${john.calcBMI().toFixed(2)}!`)
    else
        console.log(`John's ${john.calcBMI().toFixed(2)} BMI is higher than Mark's ${mark.calcBMI().toFixed(2)}!`)
}

// Challenge 4
// Done above


// Developer Skills & Editor Setup
// Challenge 1

const printForecast = (arr) => {
    arr.forEach((temp, day) => {
        console.log(`${temp}ºC in ${day + 1} days`)
    })
}

printForecast([17, 21, 23])
