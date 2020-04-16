import {Stars} from './stars.js';
import {Trash} from './trash.js';
import {Klingons} from './klingons.js';
import {Counter} from './counter.js';
import {Crash} from './crash.js';
import {ShipMove} from './shipmove.js';
import {ShipShot} from './shipshot.js';
import {GameOver} from './gameover.js';

export function randomizer(min, max) {
    let rand = min - 0.5 + Math.random() * (max - min + 1);
        return Math.round(rand);
}

let starsField = document.querySelector('.stars-field');
let starsMaker = new Stars(starsField);
starsMaker.createAllStars();
let trashField = document.querySelector('.trash-field');
let trashMaker = new Trash(trashField);
let klingonsField = document.querySelector('.klingons-field');
export let klingonsMaker = new Klingons(klingonsField);
let shipDom = document.querySelector('.ship');
let counterDOM = document.querySelector('.game-counter');
export let counter = new Counter(counterDOM);
let shipMove = new ShipMove(shipDom, starsField);
let shipShot = new ShipShot(shipDom, klingonsField);
export let gameOver = new GameOver();

export function startGame() {
    document.querySelector('.ship-img').src = '../img/uss-enterprise.png';
    document.querySelector('.game-over').innerHTML = '';
    if (!document.querySelector('.game-over').hidden) {
        document.querySelector('.game-over').hidden = true;
    }
    trashMaker.createAllTrash();
    klingonsMaker.createAllKlingons();
    shipMove.startMove();
    shipShot.addWeapon();
    counter.startCounter();
    let crash = new Crash(shipDom);
    crash.crashAll();
    let pauseBtn = document.querySelector('[name="pause-game"]');
    pauseBtn.addEventListener('click', pauseGame);
    this.removeEventListener('click', startGame);
    let stopBtn = document.querySelector('[name="stop-game"]');
    stopBtn.addEventListener('click', gameOver.message);
}
export function stopGame() {
    shipMove.stopHandler();
    shipMove.stopMobileHandler();
    shipShot.stopShotHandler();
    shipShot.stopMobileShotHandler();
    let trash = document.querySelectorAll('.trash');
    let klingons = document.querySelectorAll('.klingon');
    let klingonShots = document.getElementsByClassName('klingon-shot');
    for (let trashElem of trash) {
        trashElem.remove();
    }
    for (let klingon of klingons) {
        klingon.remove();
    }
    for (let shot of klingonShots) {
        shot.remove();
    }
    counter.stopCounter();
    let pauseBtn = document.querySelector('[name="pause-game"]');
    pauseBtn.removeEventListener('click', pauseGame);
    let startBtn = document.querySelector('[name="start-game"]');
    startBtn.addEventListener('click', startGame);
    let stopBtn = document.querySelector('[name="stop-game"]');
    stopBtn.removeEventListener('click', gameOver.message);
}
function pauseGame() {
    counter.pauseCounter();
    shipMove.stopHandler();
    shipMove.stopMobileHandler();
    shipShot.stopShotHandler();
    shipShot.stopMobileShotHandler();
    let trash = document.querySelectorAll('.trash');
    let klingons = document.getElementsByClassName('klingon');
    let stars = document.querySelectorAll('.star');
    let klingonShots = document.getElementsByClassName('klingon-shot');
    let allTorpedo = document.getElementsByClassName('torpedo');
    for (let trashElem of trash) {
        trashElem.style.webkitAnimationPlayState = 'paused';
    }
    for (let klingon of klingons) {
        klingon.style.webkitAnimationPlayState = 'paused';
    }
    for (let star of stars) {
        star.style.webkitAnimationPlayState = 'paused';
    }
    for (let shot of klingonShots) {
        shot.style.webkitAnimationPlayState = 'paused';
    }
    for (let torpedo of allTorpedo) {
        torpedo.style.webkitAnimationPlayState = 'paused';
    }
    this.innerHTML = 'Resume';
    this.removeEventListener('click', pauseGame);
    this.addEventListener('click', resumeGame);
}
function resumeGame() {
    counter.startCounter();
    shipMove.startMove();
    shipShot.addWeapon();
    let trash = document.querySelectorAll('.trash');
    let klingons = document.getElementsByClassName('klingon');
    let stars = document.querySelectorAll('.star');
    let klingonShots = document.getElementsByClassName('klingon-shot');
    let allTorpedo = document.getElementsByClassName('torpedo');
    for (let trashElem of trash) {
        trashElem.style.webkitAnimationPlayState = 'running';
    }
    for (let klingon of klingons) {
        klingon.style.webkitAnimationPlayState = 'running';
    }
    for (let star of stars) {
        star.style.webkitAnimationPlayState = 'running';
    }
    for (let shot of klingonShots) {
        shot.style.webkitAnimationPlayState = 'running';
    }
    for (let torpedo of allTorpedo) {
        torpedo.style.webkitAnimationPlayState = 'running';
    }
    this.innerHTML = 'Pause';
    this.removeEventListener('click', resumeGame);
    this.addEventListener('click', pauseGame);
}
let startBtn = document.querySelector('[name="start-game"]');
startBtn.addEventListener('click', startGame);
