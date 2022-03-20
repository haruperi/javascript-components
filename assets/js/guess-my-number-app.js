'use strict';
const body = document.querySelector('body')
const message = document.querySelector('.message')
const number = document.querySelector('.number')
const score = document.querySelector('.score')
const guess = document.querySelector('.guess')
const checkBtn = document.querySelector('.check')
const againBtn = document.querySelector('.again')
const highScore = document.querySelector('.highscore')
let secretNumber = Math.round(Math.random()*20+1)
let playerLives = 10
let maxScore = 0


const reset = () => {
    message.textContent = `Start guessing...`
    body.style.backgroundColor = '#222'
    number.textContent = '?'
    playerLives = 10
    score.textContent = playerLives
    number.style.width = '15rem'
    secretNumber = Math.round(Math.random()*20+1)
}

const game = () => {
    if (!guess.value)
        message.textContent = " ⛔ Please enter a number"
    if (playerLives > 0) {
        if (Number(guess.value) === secretNumber){
            message.textContent = ` 🎊 You WIN, the correct Number is ${secretNumber}`
            highScore.textContent = playerLives > maxScore ? maxScore = playerLives : maxScore
            body.style.backgroundColor = '#60b347'
            number.textContent = secretNumber
            number.style.width = '30rem'
        }
        if (Number(guess.value) !== secretNumber) {
            message.textContent = Number(guess.value) > secretNumber ? "📈 Too High" : "📉 Too Low"
            playerLives--
            score.textContent = playerLives
        }
    }
    if (playerLives === 0) {
        message.textContent = `🧨 You have lost the game! 😭 \n the correct Number is ${secretNumber}`
    }
}

againBtn.addEventListener('click', reset)
checkBtn.addEventListener('click', game)

