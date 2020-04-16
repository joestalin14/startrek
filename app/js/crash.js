import {gameOver} from './index.js';
export class Crash {
    constructor(ship) {
        this.ship = ship;
        this.trash = document.querySelectorAll('.trash');
        this.klingons = document.getElementsByClassName('.klingon');
        this.klingonsShot = document.getElementsByClassName('klingon-shot');
    }
    crashFromElement(elems) {
        let crash = setInterval(() => {
            for (let elem of elems) {
                let ship = this.ship;
                let e = elem.getBoundingClientRect();
                let s = ship.getBoundingClientRect();
                let sx1 = s.left;
                let sy1 = s.top + 15;
                let sx2 = s.right;
                let sy2 = s.bottom;
                let ex1 = e.left;
                let ey1 = e.top;
                let ex2 = e.right;
                let ey2 = e.bottom;
                let condition = (sx1<ex2 && sx2>ex1 && sy1<ey2 && sy2>ey1);
                if(condition) {
                    let shipImg = ship.querySelector('.ship-img');
                    shipImg.src = '../img/ship-destroy.png';
                    gameOver.message();
                }
            }
        }, 1);
    }
    crashAll() {
        this.crashFromElement(this.trash);
        this.crashFromElement(this.klingons);
        this.crashFromElement(this.klingonsShot);
    }
}
