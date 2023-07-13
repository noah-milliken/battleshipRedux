import Game from './Game';
import Player from './Player';
const game = Game();
game.startGame();

function component() {
  const element = document.createElement('div');

  element.textContent = 'Frogs';

  return element;
}

document.body.appendChild(component());
