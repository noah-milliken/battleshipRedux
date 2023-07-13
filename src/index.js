import Game from './Game';

const initiateGame = Game();
initiateGame.startGame();
function component() {
  const element = document.createElement('div');

  element.textContent = 'Frogs';

  return element;
}

document.body.appendChild(component());
