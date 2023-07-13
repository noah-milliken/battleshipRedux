import Game from './Game';
const game = Game();
game.startGame();

game.takeTurn();

function component() {
  const element = document.createElement('div');

  element.textContent = 'Frogs';

  return element;
}

document.body.appendChild(component());
