import { GameFunc, gameFuncClass } from './gamefunc.js'
class Stars extends GameFunc {
  startStarsMethods () {
    const startBtn = this.startBtn
    const stopBtn = this.stopBtn
    const pauseBtn = this.pauseBtn
    let allStars
    startBtn.addEventListener('click', () => {
      if (gameFuncClass.state === 'stop') {
        this.addAllStars()
      }
    })
    stopBtn.addEventListener('click', () => {
      if (gameFuncClass.state === 'play') {
        this.field.innerHTML = ''
      }
    })
    pauseBtn.addEventListener('click', () => {
      if (gameFuncClass.state === 'play') {
        allStars = document.querySelectorAll('.star')
        for (const star of allStars) {
          star.style.webkitAnimationPlayState = 'paused'
        }
      } else if (gameFuncClass.state === 'paused') {
        allStars = document.querySelectorAll('.star')
        for (const star of allStars) {
          star.style.webkitAnimationPlayState = 'running'
        }
      }
    })
  }

  createStarDOM () {
    const field = this.field
    const star = document.createElement('span')
    star.classList.add('star')
    const left = this.randomizer(1, field.offsetWidth)
    const top = this.randomizer(-1, -field.offsetHeight)
    star.style.left = left + 'px'
    star.style.top = top + 'px'
    const animationCoef = field.offsetHeight / (field.offsetHeight + -top)
    star.style.animationDuration = 5 / animationCoef + 's'
    return star
  }

  addStar () {
    const star = this.createStarDOM()
    this.field.append(star)
  }

  addAllStars () {
    for (let i = 0; i < 60; i++) {
      this.addStar()
    }
  }
}
export const starsClass = new Stars()
