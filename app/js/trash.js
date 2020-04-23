import { GameFunc, gameFuncClass } from './gamefunc.js'
class Trash extends GameFunc {
  constructor () {
    super()
    this.trashFieldWidth = this.trashField.offsetWidth
    this.trashFieldHeight = this.trashField.offsetHeight
  }

  startTrashMethods () {
    const startBtn = this.startBtn
    const stopBtn = this.stopBtn
    const pauseBtn = this.pauseBtn
    let allTrash
    startBtn.addEventListener('click', () => {
      if (gameFuncClass.state === 'stop') {
        this.createAllTrash()
      }
    })
    stopBtn.addEventListener('click', () => {
      if (gameFuncClass.state === 'play') {
        this.trashField.innerHTML = ''
      }
    })
    pauseBtn.addEventListener('click', () => {
      if (gameFuncClass.state === 'play') {
        allTrash = document.querySelectorAll('.trash')
        for (const trash of allTrash) {
          trash.style.webkitAnimationPlayState = 'paused'
        }
      } else if (gameFuncClass.state === 'paused') {
        allTrash = document.querySelectorAll('.trash')
        for (const trash of allTrash) {
          trash.style.webkitAnimationPlayState = 'running'
        }
      }
    })
  }

  numberOfColumns () {
    const bodyWidth = document.body.offsetWidth
    let result
    switch (true) {
      case (bodyWidth >= 1200):
        result = 16
        break
      case (bodyWidth >= 992):
        result = 12
        break
      case (bodyWidth >= 768):
        result = 8
        break
      case (bodyWidth >= 576):
        result = 5
        break
      default:
        result = 4
    }
    return result
  }

  numberOfTrash () {
    const bodyWidth = document.body.offsetWidth
    let result
    switch (true) {
      case (bodyWidth >= 1200):
        console.log(bodyWidth)
        result = 9
        break
      case (bodyWidth >= 992):
        result = 8
        break
      case (bodyWidth >= 768):
        result = 7
        break
      case (bodyWidth >= 576):
        result = 6
        break
      default:
        result = 5
    }
    return result
  }

  createTrashDOM () {
    const trash = document.createElement('span')
    trash.classList.add('trash')
    const trashImg = document.createElement('img')
    trashImg.classList.add('trash-img')
    trashImg.src = `./img/trash${this.randomizer(1, 3)}.png`
    trash.append(trashImg)
    const columns = this.numberOfColumns()
    const left = (this.trashFieldWidth / columns) * this.randomizer(1, columns) - (this.trashFieldWidth / (columns * 2)) - trash.offsetWidth / 2
    trash.style.left = left + 'px'
    const top = this.randomizer(-this.trashFieldHeight, -30)
    trash.style.top = top + 'px'
    const animationCoef = this.trashFieldHeight / (this.trashFieldHeight + top * (-1))
    trash.style.animationDuration = 6 / animationCoef + this.randomizer(-10, 10) * 0.2 + 's'
    return trash
  }

  createTrash () {
    const trash = this.createTrashDOM()
    this.trashField.append(trash)
  }

  createAllTrash () {
    for (let i = 0; i < this.numberOfTrash(); i++) {
      this.createTrash()
    }
  }
}
export const trashClass = new Trash()
