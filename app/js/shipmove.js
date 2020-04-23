import { GameFunc, gameFuncClass } from './gamefunc.js'
class ShipMove extends GameFunc {
  constructor () {
    super()
    this.moveHandler = this.moveTheShip.bind(this)
    this.stopHandler = this.stopMove.bind(this)
    this.mobileMoveHandler = this.mobileDeviceMove.bind(this)
    this.stopMobileHandler = this.stopMobileMove.bind(this)
  }

  startMove () {
    window.addEventListener('keydown', this.moveHandler)
    window.addEventListener('touchstart', this.mobileMoveHandler)
  }

  stopMove () {
    window.removeEventListener('keydown', this.moveHandler)
  }

  stopMobileMove () {
    window.removeEventListener('touchstart', this.mobileMoveHandler)
  }

  startMoveMethods () {
    const startBtn = this.startBtn
    startBtn.addEventListener('click', () => {
      if (gameFuncClass.state === 'stop') {
        this.startMove()
      }
    })
    const stopBtn = this.stopBtn
    stopBtn.addEventListener('click', () => {
      if (gameFuncClass.state === 'play') {
        this.stopMove()
        this.stopMobileMove()
      }
    })
    const pauseBtn = this.pauseBtn
    pauseBtn.addEventListener('click', () => {
      if (gameFuncClass.state === 'play') {
        this.stopMove()
        this.stopMobileMove()
      } else if (gameFuncClass.state === 'paused') {
        this.startMove()
      }
    })
  }

  moveTheShip (event) {
    let move = null
    const ship = this.ship
    const field = this.field
    if (event.key === 'ArrowLeft') {
      move = setTimeout(function shipMovingLeft () {
        if (ship.getBoundingClientRect().left <= field.getBoundingClientRect().left) {
          ship.style.left = 2 + 'px'
          clearTimeout(move)
        }
        const leftNow = ship.offsetLeft
        ship.style.left = leftNow - 2 + 'px'
        move = setTimeout(shipMovingLeft, 10)
      }, 10)
      window.addEventListener('keyup', function () {
        if (event.key === 'ArrowLeft') {
          clearTimeout(move)
        }
      })
    }
    if (event.key === 'ArrowRight') {
      move = setTimeout(function shipMovingRight () {
        if (ship.getBoundingClientRect().right >= field.getBoundingClientRect().right) {
          ship.style.left = field.getBoundingClientRect().width - ship.getBoundingClientRect().width + 'px'
          clearTimeout(move)
        }
        const leftNow = ship.offsetLeft
        ship.style.left = leftNow + 2 + 'px'
        move = setTimeout(shipMovingRight, 10)
      }, 10)
      window.addEventListener('keyup', function () {
        if (event.key === 'ArrowRight') {
          clearTimeout(move)
        }
      })
    }
  }

  mobileDeviceMove (event) {
    const ship = this.ship
    const field = this.field
    let moveLeft
    let moveRight
    if (event.target.closest('.btn-left')) {
      event.preventDefault()
      moveLeft = setTimeout(function shipMovingLeft () {
        if (ship.getBoundingClientRect().left <= field.getBoundingClientRect().left) {
          ship.style.left = 3 + 'px'
          clearTimeout(moveLeft)
        }
        const leftNow = ship.offsetLeft
        ship.style.left = leftNow - 3 + 'px'
        moveLeft = setTimeout(shipMovingLeft, 5)
      }, 5)
      document.querySelector('.btn-left').addEventListener('touchend', function () {
        event.preventDefault()
        clearTimeout(moveLeft)
      })
    }
    if (event.target.closest('.btn-right')) {
      event.preventDefault()
      moveRight = setTimeout(function shipMovingRight () {
        if (ship.getBoundingClientRect().right >= field.getBoundingClientRect().right) {
          ship.style.left = field.getBoundingClientRect().width - ship.getBoundingClientRect().width + 'px'
          clearTimeout(moveRight)
        }
        const leftNow = ship.offsetLeft
        ship.style.left = leftNow + 3 + 'px'
        moveRight = setTimeout(shipMovingRight, 5)
      }, 5)
      document.querySelector('.btn-right').addEventListener('touchend', function () {
        event.preventDefault()
        clearTimeout(moveRight)
      })
    }
  }
}
export const shipMoveClass = new ShipMove()
