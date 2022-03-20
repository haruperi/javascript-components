'use strict'
const score0El = document.querySelector('#score--0')
const score1El = document.querySelector('#score--1')
const current0El = document.querySelector('#current--0')
const current1El = document.querySelector('#current--1')
const player0El = document.querySelector('.player--0')
const player1El = document.querySelector('.player--1')
const diceEl = document.querySelector(".dice")
const btnNew = document.querySelector(".btn--new")
const btnRoll = document.querySelector(".btn--roll")
const btnHold = document.querySelector(".btn--hold")


score0El.textContent = 0
score1El.textContent = 0

const scores = [0, 0]
let currentScore = 0
let activePlayer = 0
let playing = true

diceEl.classList.add('hidden')


const switchPlayer = () => {
    activePlayer === 0 ? current0El.textContent = 0 : current1El.textContent = 0
    activePlayer = activePlayer === 0 ? 1 : 0
    currentScore = 0
    player0El.classList.toggle("player--active")
    player1El.classList.toggle("player--active")
}
const rollDice = () => {
    if (playing) {

        const dice = Math.trunc((Math.random() * 6) + 1)
        diceEl.classList.remove('hidden')
        diceEl.src = `assets/img/dice-${dice}.png`

        if (dice !== 1) {
            currentScore += dice
            activePlayer === 0 ? current0El.textContent = currentScore : current1El.textContent = currentScore
        } else {
            saveState()
        }
    }
}

const saveState = () => {
    if (playing) {
        scores[activePlayer] += currentScore
        activePlayer === 0 ? score0El.textContent = scores[activePlayer] : score1El.textContent = scores[activePlayer]

        if (scores[activePlayer] >= 100) {
            diceEl.classList.add('hidden')
            playing = false
            if (activePlayer === 0) {
                player0El.classList.add('player--winner')
                player0El.classList.remove('player--active')
            } else {
                player1El.classList.add('player--winner')
                player1El.classList.remove('player--active')
            }
        } else
            switchPlayer()
    }
}

btnRoll.addEventListener('click', rollDice)
btnHold.addEventListener('click', saveState)
btnNew.addEventListener('click', () => window.location.reload())


