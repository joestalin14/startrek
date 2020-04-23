import { GameFunc, gameFuncClass } from './gamefunc.js'
export class Klingons extends GameFunc {
  constructor () {
    super()
    this.klingonsFieldWidth = this.klingonsField.offsetWidth
    this.klingonsFieldHeight = this.klingonsField.offsetHeight
  }

  startKlingonsMethods () {
    let allKlingons
    let allKlingonsShots
    const startBtn = this.startBtn
    startBtn.addEventListener('click', () => {
      if (gameFuncClass.state === 'stop') {
        this.createAllKlingons()
      }
    })
    const stopBtn = this.stopBtn
    stopBtn.addEventListener('click', () => {
      if (gameFuncClass.state === 'play') {
        this.klingonsField.innerHTML = ''
      }
    })
    const pauseBtn = this.pauseBtn
    pauseBtn.addEventListener('click', () => {
      if (gameFuncClass.state === 'play') {
        allKlingons = document.querySelectorAll('.klingon')
        for (const klingon of allKlingons) {
          klingon.style.webkitAnimationPlayState = 'paused'
        }
        allKlingonsShots = document.querySelectorAll('.klingon-shot')
        for (const shot of allKlingonsShots) {
          shot.style.webkitAnimationPlayState = 'paused'
        }
      } else if (gameFuncClass.state === 'paused') {
        allKlingons = document.querySelectorAll('.klingon')
        for (const klingon of allKlingons) {
          klingon.style.webkitAnimationPlayState = 'running'
        }
        allKlingonsShots = document.querySelectorAll('.klingon-shot')
        for (const shot of allKlingonsShots) {
          shot.style.webkitAnimationPlayState = 'running'
        }
      }
    })
  }

  numberOfColumns () {
    const bodyWidth = document.body.offsetWidth
    let result
    switch (true) {
      case (bodyWidth >= 1200):
        result = 9
        break
      case (bodyWidth >= 992):
        result = 7
        break
      case (bodyWidth >= 768):
        result = 5
        break
      default:
        result = 3
    }
    return result
  }

  createKlingonDOM () {
    const klingon = document.createElement('span')
    klingon.classList.add('klingon')
    const klingonImg = document.createElement('img')
    klingonImg.classList.add('klingon-img')
    klingonImg.src = `./img/klingon${this.randomizer(1, 2)}.png`
    klingon.append(klingonImg)
    const columns = this.numberOfColumns()
    const left = (this.klingonsFieldWidth / columns) * this.randomizer(1, columns) - (this.klingonsFieldWidth / (columns * 2)) - klingon.offsetWidth / 2
    const top = this.randomizer(-this.klingonsFieldHeight * 5, -30)
    klingon.style.left = left + 'px'
    klingon.style.top = top + 'px'
    const coef = this.klingonsFieldHeight / (this.klingonsFieldHeight + top * (-1))
    klingon.style.animationDuration = 8 / coef + this.randomizer(-10, 10) * 0.2 + 's'
    klingon.shootMethod = setInterval(() => {
      if (klingon.offsetTop > 0 && gameFuncClass.state === 'play') {
        const speed = (this.klingonsFieldHeight - klingon.offsetTop) / 150
        const klingonShot = document.createElement('span')
        klingonShot.classList.add('klingon-shot')
        klingonShot.style.left = left + klingon.offsetWidth / 2 + 'px'
        klingonShot.style.top = klingon.offsetTop + 30 + 'px'
        klingonShot.style.animationDuration = speed + 's'
        this.klingonsField.append(klingonShot)
        klingonShot.onanimationend = function () {
          klingonShot.remove()
        }
      }
    }, 2000)
    this.addNewKlingon = klingon
    return klingon
  }

  createKlingon () {
    const klingon = this.createKlingonDOM()
    this.klingonsField.append(klingon)
  }

  createAllKlingons () {
    for (let i = 0; i < 6; i++) {
      this.createKlingon()
    }
  }
}
export const klingonsClass = new Klingons()
