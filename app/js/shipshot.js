import {klingonsMaker, counter} from './index.js';
export class ShipShot {
    constructor(shipDom, klingonsField) {
        this.ship = shipDom;
        this.field = klingonsField;
        this.weaponHandler = this.photonTorpedo.bind(this);
        this.mobileWeaponHandler = this.mobileDevicePhotonTorpedo.bind(this);
        this.stopShotHandler = this.removeWeapon.bind(this);
        this.stopMobileShotHandler = this.removeMobileWeapon.bind(this);
    }
    addWeapon() {
        window.addEventListener('keydown', this.weaponHandler);
        window.addEventListener('touchstart', this.mobileWeaponHandler);
    }
    removeWeapon() {
        window.removeEventListener('keydown', this.weaponHandler);
    }
    removeMobileWeapon() {
        window.removeEventListener('touchstart', this.mobileWeaponHandler);
    }
    photonTorpedo() {
        if(event.key == 'ArrowUp') {
            let ship = this.ship;
            let field = this.field;
            let torpedo = document.createElement('span');
            torpedo.classList.add('torpedo');
            field.append(torpedo);
            torpedo.style.left = ship.offsetLeft + ship.offsetWidth/2 - 2 + 'px';
            torpedo.style.top = ship.offsetTop + 'px';
            torpedo.find = setInterval(() => {
                torpedo.onanimationend = function () {
                    torpedo.remove();
                    clearInterval(torpedo.find);
                }
                let klingons = document.querySelectorAll('.klingon');
                for (let klingon of klingons) {
                    let tCoords = torpedo.getBoundingClientRect();
                    let kCoords = klingon.getBoundingClientRect();
                    let condition = (tCoords.left > kCoords.left
                        && tCoords.left < kCoords.left + kCoords.width
                        && tCoords.top < kCoords.bottom);
                    if (condition) {
                        if (!klingon.classList.contains('banged-klingon')) {
                            klingon.querySelector('.klingon-img').src = './img/bang.png';
                            klingon.classList.add('banged-klingon');
                            torpedo.remove();
                            counter.totalCount += 10;
                            setTimeout(() => {
                                klingon.remove();
                                klingonsMaker.createKlingon();
                            }, 500);
                            clearInterval(torpedo.find);
                        }
                    }
                }
            }, 10);
        }
    }
    mobileDevicePhotonTorpedo() {
        if(event.target.closest('.btn-shot')) {
            let ship = this.ship;
            let field = this.field;
            let torpedo = document.createElement('span');
            torpedo.classList.add('torpedo');
            field.append(torpedo);
            torpedo.style.left = ship.offsetLeft + ship.offsetWidth/2 - 2 + 'px';
            torpedo.style.top = ship.offsetTop + 'px';
            torpedo.find = setInterval(function() {
                torpedo.onanimationend = function () {
                    torpedo.remove();
                    clearInterval(torpedo.find);
                }
                let klingons = document.querySelectorAll('.klingon');
                for (let klingon of klingons) {
                    let tCoords = torpedo.getBoundingClientRect();
                    let kCoords = klingon.getBoundingClientRect();
                    let condition = (tCoords.left > kCoords.left
                        && tCoords.left < kCoords.left + kCoords.width
                        && tCoords.top < kCoords.bottom);
                    if (condition) {
                        if (!klingon.classList.contains('banged-klingon')) {
                            klingon.querySelector('.klingon-img').src = './img/bang.png';
                            klingon.classList.add('banged-klingon');
                            torpedo.remove();
                            counter.totalCount += 10;
                            setTimeout(() => {
                                klingon.remove();
                                klingonsMaker.createKlingon();
                            }, 500);
                            clearInterval(torpedo.find);
                        }
                    }
                }
            }, 10);
        }
    }
}
