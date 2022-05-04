'use strict'

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
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski',
        'Hummels'],
    date: 'Nov 9th, 2037',
    odds: {
        team1: 1.33,
        x: 3.25,
        team2: 6.5,
    },
}

const printGoals = (...scorers) => {
    console.log(scorers);
    console.log(`${scorers.length} goals were scored`);
}
/********************************** Challenge One ******************************************/
const [players1, players2] = game.players
const [gk, ...fieldPlayers] = players1
const allPlayers = [...players1, ...players2]
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic']
const {team1, x: draw, team2} = game.odds
printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich')
team1 < team2 && console.log('Team 1 is more likely to win')
team1 > team2 && console.log('Team 2 is more likely to win')


/********************************** Challenge Two ******************************************/
game.scored.forEach((player, goal) => {
    console.log(`Goal ${goal + 1}: ${player}`)
})

let sum = 0
let objLength = 0
for (let key in game.odds) {
    sum += game.odds[key]
    objLength++
}
console.log("Average Odd: ", sum / objLength)

for (const [team, odd] of Object.entries(game.odds)) {
    const teamStr = team === 'x' ? `draw` : `victory ${game[team]}`
    console.log(`Odd of ${teamStr} : ${odd}`)
}

const scorers = {}
game.scored.forEach(scorer => {
    scorers[scorer] = (scorers[scorer] || 0) + 1
})

console.log(scorers)


/********************************** Challenge Three ******************************************/
const gameEvents = new Map([
    [17, '⚽ GOAL'],
    [36, '🔁 Substitution'],
    [47, '⚽ GOAL'],
    [61, '🔁 Substitution'],
    [64, '🔶 Yellow card'],
    [69, '🔴 Red card'],
    [70, '🔁 Substitution'],
    [72, '🔁 Substitution'],
    [76, '⚽ GOAL'],
    [80, '⚽ GOAL'],
    [92, '🔶 Yellow card'],
])


const events = [...new Set(gameEvents.values())]
gameEvents.delete(64)

console.log(`An event happened, on average, every ${90 / gameEvents.size} minutes`)

gameEvents.forEach((value, key) => {
    const output = key <= 45 ? '[FIRST HALF]' : '[SECOND HALF]'
    console.log(output, key, ':', value)
})


/********************************** Challenge Four ******************************************/
const convertVars = (str) => {
    str = str.trim().toLowerCase().split('_')
    str[1] = str[1].replace(/(^\w)/, m => m.toUpperCase())
    str = str.join('')
    return str
}

console.log(convertVars('underscore_case'))
console.log(convertVars(' first_name '))
console.log(convertVars('Some_Variable '))
console.log(convertVars(' calculate_AGE'))
console.log(convertVars('delayed_departure'))

