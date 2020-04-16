import {randomizer} from './index.js';
export class Trash {
    constructor(trashFieldDom) {
        this.trashFieldDom = trashFieldDom;
        this.trashFieldWidth = trashFieldDom.offsetWidth;
        this.trashFieldHeight = trashFieldDom.offsetHeight;
    }
    numberOfColumns() {
        let bodyWidth = document.body.offsetWidth;
        let result;
        (bodyWidth >= 1200) ? result = 16 :
            (bodyWidth >= 992) ? result = 12 :
            (bodyWidth >= 768) ? result = 8 :
            (bodyWidth >= 576) ? result = 5 :
            result = 4;
        return result;
    }
    createTrashDom() {
        let trash = document.createElement('span');
        trash.classList.add('trash');
        let trashImg = document.createElement('img');
        trashImg.src = `../img/trash${randomizer(1, 3)}.png`;
        trashImg.classList.add('trash-img');
        trash.append(trashImg);
        let columns = this.numberOfColumns();
        let left = (this.trashFieldWidth/columns) * randomizer(1, columns) - (this.trashFieldWidth/(columns*2)) - trash.offsetWidth/2;
        trash.style.left = left + 'px';
        let top = randomizer(-this.trashFieldHeight, -30);
        trash.style.top = top + 'px';
        let coef = this.trashFieldHeight/(this.trashFieldHeight + top*(-1));
        trash.style.animationDuration = 6/coef + randomizer(-10, 10)*0.2 + 's';
        return trash;
    }
    createTrash() {
        let trash = this.createTrashDom();
        this.trashFieldDom.append(trash);
    }
    createAllTrash() {
        let bodyWidth = document.body.offsetWidth;
        let result;
        (bodyWidth >= 1200) ? result = 9 :
            (bodyWidth >= 992) ? result = 8 :
            (bodyWidth >= 768) ? result = 7 :
            (bodyWidth >= 576) ? result = 6 :
            result = 5;
        for (let i=0; i<result; i++) {
            this.createTrash();
        }
    }
}
