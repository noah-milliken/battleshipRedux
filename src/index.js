import Game from './Game';
import Player from './Player';
const game = Game();
game.startGame();
while (!game.gameOver) {
  game.takeTurn();
  console.log(game.human.playerBoard.board);
  console.log(game.computer.playerBoard.board);
}
console.log(`${game.winner.name} won the game`);
function component() {
  const element = document.createElement('div');

  element.textContent = 'Frogs';

  return element;
}

document.body.appendChild(component());
