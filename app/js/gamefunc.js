export class GameFunc {
  constructor () {
    this.ship = document.querySelector('.ship')
    this.shipImg = document.querySelector('.ship-img')
    this.field = document.querySelector('.stars-field')
    this.trashField = document.querySelector('.trash-field')
    this.counterField = document.querySelector('.score-inner')
    this.klingonsField = document.querySelector('.klingon-field')
    this.gameOverField = document.querySelector('.game-over-field')
    this.startBtn = document.querySelector('[name="start-game"]')
    this.stopBtn = document.querySelector('[name="stop-game"]')
    this.pauseBtn = document.querySelector('[name="pause-game"]')
    this.addNewKlingon = null
    this.state = 'stop'
  }

  randomizer (min, max) {
    const rand = min - 0.5 + Math.random() * (max - min + 1)
    return Math.round(rand)
  }

  stopGame () {
    return 0
  }

  startGameFuncMethods () {
    const startBtn = this.startBtn
    const stopBtn = this.stopBtn
    const pauseBtn = this.pauseBtn
    startBtn.addEventListener('click', () => {
      if (this.state === 'stop') {
        this.state = 'play'
        if (!this.gameOverField.hidden) {
          this.gameOverField.innerHTML = ''
          this.gameOverField.hidden = true
          this.shipImg.src = '../img/ship.png'
        }
      }
    })
    stopBtn.addEventListener('click', () => {
      if (this.state === 'play') {
        this.state = 'stop'
      }
    })
    pauseBtn.addEventListener('click', () => {
      if (this.state === 'play') {
        this.state = 'paused'
        pauseBtn.innerHTML = 'Resume'
      } else if (this.state === 'paused') {
        this.state = 'play'
        pauseBtn.innerHTML = 'Pause'
      }
    })
  }
}
export const gameFuncClass = new GameFunc()
