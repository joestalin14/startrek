import {stopGame} from './index.js';
export class GameOver {
    constructor() {
    }
    message() {
        let field = document.querySelector('.game-over');
        let condition = field.hidden;
        if (condition) {
            field.hidden = !field.hidden;
            let text = document.createElement('h4');
            let count = document.createElement('h5');
            count.innerHTML = 'Total score: ' + document.querySelector('.game-counter').innerHTML;
            text.innerHTML = 'Game Over';
            field.append(text);
            field.append(count);
            stopGame();
        }
    }
}
