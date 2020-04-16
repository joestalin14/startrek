import {randomizer} from './index.js';
export class Klingons {
    constructor(klingonsField) {
        this.klingonsField = klingonsField;
        this.klingonsFieldWidth = klingonsField.offsetWidth;
        this.klingonsFieldHeight = klingonsField.offsetHeight;
    }
    numberOfColumns() {
        let bodyWidth = document.body.offsetWidth;
        let result;
        (bodyWidth >= 1200) ? result = 9 :
            (bodyWidth >= 992) ? result = 7 :
            (bodyWidth >= 768) ? result = 5 :
            (bodyWidth >= 576) ? result = 3 :
            result = 3;
        return result;
    }
    createKlingonDOM() {
        let klingon = document.createElement('span');
        klingon.classList.add('klingon');
        let klingonImg = document.createElement('img');
        klingonImg.classList.add('klingon-img');
        klingonImg.src = `../img/klingon${randomizer(1, 2)}.png`;
        klingon.append(klingonImg);
        let columns = this.numberOfColumns();
        let left = (this.klingonsFieldWidth/columns) * randomizer(1, columns) - (this.klingonsFieldWidth/(columns*2)) - klingon.offsetWidth/2;
        klingon.style.left = left + 'px';
        let top = randomizer(-this.klingonsFieldHeight*5, -30);
        klingon.style.top = top + 'px';
        let coef = this.klingonsFieldHeight/(this.klingonsFieldHeight + top*(-1));
        klingon.style.animationDuration = 8/coef + randomizer(-10, 10)*0.2 + 's';
        klingon.method = setInterval(() => {
            let pauseBtn = document.querySelector('[name="pause-game"]');
            if (klingon.offsetTop > 0 && pauseBtn.innerHTML == 'Pause') {
                let speed = (this.klingonsField.offsetHeight - klingon.offsetTop)/150;
                let klingonShot = document.createElement('span');
                klingonShot.classList.add('klingon-shot');
                klingonShot.style.left = left + klingon.offsetWidth/2 + 'px';
                klingonShot.style.top = klingon.offsetTop + 30 + 'px';
                klingonShot.style.animationDuration = speed + 's';
                this.klingonsField.append(klingonShot);
                klingonShot.onanimationend = function() {
                    klingonShot.remove();
                };
            }
        }, 2000);
        return klingon;
    }
    createKlingon() {
        let klingon = this.createKlingonDOM();
        this.klingonsField.append(klingon);
    }
    createAllKlingons() {
        for (let i=0; i<6; i++) {
            this.createKlingon();
        }
    }
}
