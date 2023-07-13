import Game from './Game';
import Player from './Player';
const human = Player(false);
const computer = Player(true);

console.table(human.playerBoard.board);

function component() {
  const element = document.createElement('div');

  element.textContent = 'Frogs';

  return element;
}

document.body.appendChild(component());
