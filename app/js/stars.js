import {randomizer} from './index.js';

export class Stars {
    constructor(starsFieldDom) {
        this.starsField = starsFieldDom;
    }
    createStarDOM() {
        let star = document.createElement('span');
        star.classList.add('star');
        let starsFieldWidth = this.starsField.offsetWidth;
        let starsFieldHeight = this.starsField.offsetHeight;
        let left = randomizer(0, starsFieldWidth);
        let top = randomizer(-starsFieldHeight, -5);
        star.style.left = left + 'px';
        star.style.top = top + 'px';
        let coef = starsFieldHeight/(starsFieldHeight + -top);
        star.style.animationDuration = 5/coef + 's';
        return star;
    }
    createStar() {
        let star = this.createStarDOM();
        this.starsField.append(star);
    }
    createAllStars() {
        for (let i=0; i<60; i++) {
            this.createStar();
        }
    }
}
