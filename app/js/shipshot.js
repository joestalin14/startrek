import { GameFunc, gameFuncClass } from './gamefunc.js'
import { klingonsClass } from './klingons.js'
import { counterClass } from './counter.js'
class ShipShot extends GameFunc {
  constructor () {
    super()
    this.weaponHandler = this.photonTorpedo.bind(this)
    this.stopShotHandler = this.removeWeapon.bind(this)
    this.mobileWeaponHandler = this.mobileDevicePhotonTorpedo.bind(this)
    this.stopMobileShotHandler = this.removeMobileWeapon.bind(this)
  }

  addWeapon () {
    window.addEventListener('keydown', this.weaponHandler)
    window.addEventListener('touchstart', this.mobileWeaponHandler)
  }

  removeWeapon () {
    window.removeEventListener('keydown', this.weaponHandler)
  }

  removeMobileWeapon () {
    window.removeEventListener('touchstart', this.mobileWeaponHandler)
  }

  startShotMethods () {
    const startBtn = this.startBtn
    startBtn.addEventListener('click', () => {
      if (gameFuncClass.state === 'stop') {
        this.addWeapon()
      }
    })
    const stopBtn = this.stopBtn
    stopBtn.addEventListener('click', () => {
      if (gameFuncClass.state === 'play') {
        this.removeWeapon()
        this.removeMobileWeapon()
        const allTorpedo = document.querySelectorAll('torpedo')
        for (const torpedo of allTorpedo) {
          torpedo.remove()
        }
      }
    })
    const pauseBtn = this.pauseBtn
    pauseBtn.addEventListener('click', () => {
      if (gameFuncClass.state === 'play') {
        this.removeWeapon()
        this.removeMobileWeapon()
        const allTorpedo = document.querySelectorAll('torpedo')
        for (const torpedo of allTorpedo) {
          torpedo.style.webkitAnimationPlayState = 'paused'
        }
      } else if (gameFuncClass.state === 'paused') {
        this.addWeapon()
        const allTorpedo = document.querySelectorAll('torpedo')
        for (const torpedo of allTorpedo) {
          torpedo.style.webkitAnimationPlayState = 'running'
        }
      }
    })
  }

  photonTorpedo (event) {
    if (event.key === 'ArrowUp') {
      const ship = this.ship
      const field = this.klingonsField
      const torpedo = document.createElement('span')
      torpedo.classList.add('torpedo')
      field.append(torpedo)
      torpedo.style.left = ship.offsetLeft + ship.offsetWidth / 2 - 2 + 'px'
      torpedo.style.top = ship.offsetTop + 'px'
      torpedo.findMethod = setInterval(() => {
        torpedo.onanimationend = function () {
          torpedo.remove()
          clearInterval(torpedo.findMethod)
        }
        const klingons = document.querySelectorAll('.klingon')
        for (const klingon of klingons) {
          const tCoords = torpedo.getBoundingClientRect()
          const kCoords = klingon.getBoundingClientRect()
          const condition = (tCoords.left > kCoords.left &&
               tCoords.left < kCoords.left + kCoords.width &&
               tCoords.top < kCoords.bottom)
          if (condition) {
            if (!klingon.classList.contains('banged-klingon')) {
              klingon.querySelector('.klingon-img').src = './img/bang.png'
              klingon.classList.add('banged-klingon')
              torpedo.remove()
              setTimeout(() => {
                counterClass.totalCount += 10
                klingon.remove()
                klingonsClass.createKlingon()
              }, 500)
              clearInterval(torpedo.findMethod)
            }
          }
        }
      }, 10)
    }
  }

  mobileDevicePhotonTorpedo (event) {
    if (event.target.closest('.btn-shot')) {
      const ship = this.ship
      const field = this.klingonsField
      const torpedo = document.createElement('span')
      torpedo.classList.add('torpedo')
      field.append(torpedo)
      torpedo.style.left = ship.offsetLeft + ship.offsetWidth / 2 - 2 + 'px'
      torpedo.style.top = ship.offsetTop + 'px'
      torpedo.findMethod = setInterval(function () {
        torpedo.onanimationend = function () {
          torpedo.remove()
          clearInterval(torpedo.findMethod)
        }
        const klingons = document.querySelectorAll('.klingon')
        for (const klingon of klingons) {
          const tCoords = torpedo.getBoundingClientRect()
          const kCoords = klingon.getBoundingClientRect()
          const condition = (tCoords.left > kCoords.left &&
              tCoords.left < kCoords.left + kCoords.width &&
              tCoords.top < kCoords.bottom)
          if (condition) {
            if (!klingon.classList.contains('banged-klingon')) {
              klingon.querySelector('.klingon-img').src = './img/bang.png'
              klingon.classList.add('banged-klingon')
              torpedo.remove()
              setTimeout(() => {
                counterClass.totalCount += 10
                klingon.remove()
                klingonsClass.createKlingon()
              }, 500)
              clearInterval(torpedo.findMethod)
            }
          }
        }
      }, 10)
    }
  }
}
export const shipShotClass = new ShipShot()
