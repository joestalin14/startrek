import { GameFunc, gameFuncClass } from './gamefunc.js'
import { counterClass } from './counter.js'
import { shipMoveClass } from './shipmove.js'
import { shipShotClass } from './shipshot.js'
class GameOver extends GameFunc {
  startGameOverMethods () {
    const stopBtn = this.stopBtn
    stopBtn.addEventListener('click', () => {
      if (gameFuncClass.state === 'play') {
        this.message()
      }
    })
  }

  message () {
    const field = this.gameOverField
    const condition = field.hidden
    if (condition) {
      field.hidden = !field.hidden
      const text = document.createElement('h4')
      const count = document.createElement('h5')
      count.innerHTML = 'Total score: ' + document.querySelector('.score-inner').innerHTML
      text.innerHTML = 'Game Over'
      field.append(text)
      field.append(count)
      this.stopGame()
    }
  }

  stopGame () {
    this.field.innerHTML = ''
    this.trashField.innerHTML = ''
    this.klingonsField.innerHTML = ''
    gameFuncClass.state = 'stop'
    counterClass.stopCounter()
    shipShotClass.removeWeapon()
    shipShotClass.removeMobileWeapon()
    shipMoveClass.stopMove()
    shipMoveClass.stopMobileMove()
  }
}
export const gameOverClass = new GameOver()
