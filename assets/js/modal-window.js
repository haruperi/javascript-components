'use strict';

const modal = document.querySelector('.modal')
const overlay = document.querySelector('.overlay')
const btnCloseModal = document.querySelector('.close-modal')
const btnOpenModal = document.querySelectorAll('.show-modal')

const showModal = () => {
    modal.classList.remove('hidden')
    overlay.classList.remove('hidden')
}

const closeModal = () => {
    modal.classList.add('hidden')
    overlay.classList.add('hidden')
}

btnOpenModal.forEach( btn => console.log(btn.addEventListener('click', showModal)))
overlay.addEventListener('click', closeModal)
btnCloseModal.addEventListener('click', closeModal)
document.addEventListener('keydown', (e) => {
    if(e.key === "Escape" && !modal.classList.contains('hidden'))
        closeModal()
})
