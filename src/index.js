import Game from './Game';
import Board from './Board';
const game = Game();
game.startGame();
function component() {
  const element = document.createElement('div');
  // element.innerHTML += `
  //   ${game.gameBoard(game.human)}
  //   ${game.gameBoard(game.computer)}

  return element;
}

document.body.appendChild(component());
