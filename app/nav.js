const navBtn = document.querySelector('.nav-btn')
const menuContainer = document.querySelector('.menu-container')
navBtn.addEventListener('click', function () {
  this.classList.toggle('opened')
  menuContainer.classList.toggle('opened')
  for (const text of document.querySelectorAll('.mc-text')) {
    text.classList.remove('opened')
  }
})
const gameControlBtn = document.querySelector('.game-control-btn')
const gameControlText = document.querySelector('.game-control-text')
gameControlBtn.addEventListener('click', function () {
  gameControlText.classList.add('opened')
})
const closeControlText = document.querySelector('.control-text-close')
closeControlText.addEventListener('click', function () {
  gameControlText.classList.remove('opened')
})
const aboutAuthorBtn = document.querySelector('.about-author-btn')
const aboutAuthorText = document.querySelector('.about-author-text')
aboutAuthorBtn.addEventListener('click', function () {
  aboutAuthorText.classList.add('opened')
})
const closeAuthorText = document.querySelector('.author-text-close')
closeAuthorText.addEventListener('click', function () {
  aboutAuthorText.classList.remove('opened')
})
