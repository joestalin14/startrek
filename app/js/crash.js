import { GameFunc, gameFuncClass } from './gamefunc.js'
import { gameOverClass } from './gameover.js'
class Crash extends GameFunc {
  constructor () {
    super()
    this.trash = document.getElementsByClassName('trash')
    this.klingons = document.getElementsByClassName('klingon')
    this.klingonsShot = document.getElementsByClassName('klingon-shot')
    this.crash = null
  }

  startCrashMethods () {
    const startBtn = this.startBtn
    const stopBtn = this.stopBtn
    const pauseBtn = this.pauseBtn
    startBtn.addEventListener('click', () => {
      if (gameFuncClass.state === 'stop') {
        this.crashAll()
      }
    })
    stopBtn.addEventListener('click', () => {
      if (gameFuncClass.state === 'play') {
        clearInterval(this.crash)
      }
    })
    pauseBtn.addEventListener('click', () => {
      if (gameFuncClass.state === 'play') {
        clearInterval(this.crash)
      } else if (gameFuncClass.state === 'paused') {
        this.crashAll()
      }
    })
  }

  crashFromElement (elems) {
    this.crash = setInterval(() => {
      for (const elem of elems) {
        const ship = this.ship
        const e = elem.getBoundingClientRect()
        const s = ship.getBoundingClientRect()
        const sx1 = s.left
        const sy1 = s.top + 15
        const sx2 = s.right
        const sy2 = s.bottom
        const ex1 = e.left
        const ey1 = e.top
        const ex2 = e.right
        const ey2 = e.bottom
        const condition = (sx1 < ex2 && sx2 > ex1 && sy1 < ey2 && sy2 > ey1)
        if (condition) {
          const shipImg = ship.querySelector('.ship-img')
          shipImg.src = '../img/ship-destroy.png'
          gameOverClass.message()
          console.log('crash!')
        }
      }
    }, 1)
  }

  crashAll () {
    this.crashFromElement(this.trash)
    this.crashFromElement(this.klingons)
    this.crashFromElement(this.klingonsShot)
  }
}
export const crashClass = new Crash()
