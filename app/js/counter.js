import { GameFunc, gameFuncClass } from './gamefunc.js'
class Counter extends GameFunc {
  constructor () {
    super()
    this.timerId = null
    this.totalCount = 0
  }

  startCounterMethods () {
    const startBtn = this.startBtn
    const stopBtn = this.stopBtn
    const pauseBtn = this.pauseBtn
    startBtn.addEventListener('click', () => {
      if (gameFuncClass.state === 'stop') {
        this.startCount()
      }
    })
    stopBtn.addEventListener('click', () => {
      if (gameFuncClass.state === 'play') {
        this.stopCounter()
      }
    })
    pauseBtn.addEventListener('click', () => {
      if (gameFuncClass.state === 'play') {
        this.pauseCounter()
      } else if (gameFuncClass.state === 'paused') {
        this.startCount()
      }
    })
  }

  startCount () {
    this.timerId = setInterval(() => {
      this.totalCount += 1
      this.counterField.innerHTML = this.totalCount
    }, 500)
  }

  pauseCounter () {
    clearInterval(this.timerId)
  }

  stopCounter () {
    clearInterval(this.timerId)
    this.totalCount = 0
    this.counterField.innerHTML = this.totalCount
  }
}
export const counterClass = new Counter()
