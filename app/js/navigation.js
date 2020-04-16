let openNav = document.querySelector('.nav-btn');
let gameNav = document.querySelector('.game-navigation');
openNav.addEventListener('click', function() {
    this.classList.toggle('opened');
    gameNav.classList.toggle('opened');
    for (let text of document.querySelectorAll('.gn-text')) {
        text.classList.remove('opened');
    }
})
let gameControlBtn = document.querySelector('.game-control-btn');
let gameControlText = document.querySelector('.game-control-text');
gameControlBtn.addEventListener('click', function() {
    gameControlText.classList.add('opened');
});
let closeControlText = document.querySelector('.control-text-close');
closeControlText.addEventListener('click', function() {
    gameControlText.classList.remove('opened');
});
let aboutAuthorBtn = document.querySelector('.about-author-btn');
let aboutAuthorText = document.querySelector('.about-author-text');
aboutAuthorBtn.addEventListener('click', function() {
    aboutAuthorText.classList.add('opened');
});
let closeAuthorText = document.querySelector('.author-text-close');
closeAuthorText.addEventListener('click', function() {
    aboutAuthorText.classList.remove('opened');
});
let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);
