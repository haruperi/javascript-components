/**************************************************************************************************************
                                     JavaScript Fundamentals – Part 1
 ***************************************************************************************************************/
let consoleStatement

// Coding Challenge #1
const john = {
    mass : 92,
    height : 1.95
}

const mark = {
    mass : 78,
    height : 1.68
}

const bmi = (person) => person.mass / person.height**2
const  markHigherBMI = bmi(mark) > bmi(john)




// Coding Challenge #2
if (markHigherBMI)
    consoleStatement = `Mark's BMI is higher than John's!`
else
    consoleStatement = `John's BMI is higher than Mark's!`

if (markHigherBMI)
    consoleStatement = `Mark's BMI (${bmi(mark)}) is higher than John's (${bmi(john)})!`
else
    consoleStatement = `John's BMI (${bmi(john)}) is higher than Mark's (${bmi(mark)})!`





// Coding Challenge #3
const averageScore = (team) => (team.reduce((sum, acc) => sum + acc))/team.length

const dolphins = [85,54,41]
const koalas = [23,34,27]

if (averageScore(dolphins) > averageScore(koalas) && averageScore(dolphins) >= 100)
    consoleStatement =  `Dolphins win`
else if (averageScore(dolphins) < averageScore(koalas) && averageScore(koalas) >= 100)
    consoleStatement =  `koalas win`
else if (averageScore(dolphins) === averageScore(koalas) && averageScore(koalas) >= 100)
    consoleStatement =  `Its a draw`
else
    consoleStatement =  `There is no winner`





// Coding Challenge #4
//const tipCalculator = bill => (bill > 50 && bill < 300) ? bill*0.15 : bill*0.20
const tipCalculator = bill => {
    if (bill > 50 && bill < 300) return bill*0.15
    if (bill >= 300) return bill*0.20
    return 0
}
const bill = 430
const tip = bill < 50 ? 0 : tipCalculator(bill)
const printReceipt = () => `The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`





/**************************************************************************************************************
 JavaScript Fundamentals – Part 2
 ***************************************************************************************************************/
// Coding Challenge #1
const checkWinner = (avgDolhins, avgKoalas) => {
    if (avgDolhins > avgKoalas && avgDolhins / avgKoalas >= 2)
        return `Dolphins win (${avgDolhins} vs. ${avgKoalas})`
    if (avgDolhins < avgKoalas && avgKoalas / avgDolhins >= 2)
        return `Koalas win (${avgKoalas} vs. ${avgDolhins})`
    return `There is no winner`
}



// Coding Challenge #2 and answer applied to Challenge #4
{
    const bills = [125, 555, 44]
    const tips = bills.map((bill) => tipCalculator(bill))
    const totals = bills.map((bill) => bill + tipCalculator(bill))
}




// Coding Challenge #3
const bmiUsers = {
    user1 : {
        name : "Mark Miller",
        mass : 78,
        height : 1.69
    },
    user2 : {
        name : "John Smith",
        mass : 92,
        height : 1.95
    },
    calcBMI(user){
       return  (user.mass / user.height**2).toFixed(1)
    },
    printInfo(){
        return (this.calcBMI(this.user1) > this.calcBMI(this.user2) ? `Mark's BMI (${this.calcBMI(this.user1)}) is higher than John's (${this.calcBMI(this.user2)})!` : `John's BMI (${this.calcBMI(this.user2)}) is higher than Mark's (${this.calcBMI(this.user1)})!`)
    }

}




/**************************************************************************************************************
                                         Developer Skills & Editor Setup
 ***************************************************************************************************************/
// Coding Challenge #1
const printForecast = (arr) => {
    arr.forEach( (temp , day) => {
        console.log(`${temp}ºC in ${day + 1} days...`)
    })
}

//printForecast([12, 5, -5, 0, 4])





/**************************************************************************************************************
                                               DOM and Events
 ***************************************************************************************************************/
// Coding Challenge #1
//const again = document.querySelector('.again')




/**************************************************************************************************************
                             Data Structures, Modern Operators and Strings
 ***************************************************************************************************************/
const game = {
    team1: 'Bayern Munich',
    team2: 'Borrussia Dortmund',
    players: [
        [
            'Neuer',
            'Pavard',
            'Martinez',
            'Alaba',
            'Davies',
            'Kimmich',
            'Goretzka',
            'Coman',
            'Muller',
            'Gnarby',
            'Lewandowski',
        ],
        [
            'Burki',
            'Schulz',
            'Hummels',
            'Akanji',
            'Hakimi',
            'Weigl',
            'Witsel',
            'Hazard',
            'Brandt',
            'Sancho',
            'Gotze',
        ],
    ],
    score: '4:0',
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
    date: 'Nov 9th, 2037',
    odds: {
        team1: 1.33,
        x: 3.25,
        team2: 6.5,
    },
};

const [player1, player2] = game.players

const [gk, ...fieldPlayers] = player1

const allPlayers = [...player1, ...player2]

const players1Final = [...player1, 'Thiago', 'Coutinho', 'Perisic']

const {team1, draw, team2} = game.odds

const printGoals = (...players) => {
    console.log(players)
    console.log(`${players.length} goals were scored`)
}

//team1 < team2 && console.log('Team 1 is more likely to win');
//team1 > team2 && console.log('Team 2 is more likely to win');


//console.log()p with it on




console.log(typeof  bar)