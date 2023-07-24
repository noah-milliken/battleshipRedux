import Player from './Player';
import View from './view';

const player = Player();
const computer = Player();
const reset = document.getElementById('reset-btn');
View.createGameboard();
reset.addEventListener('click', () => {
  console.log('Index reset button');
  player.reset();
  computer.reset();
  player.toggleTurn();
  const computerCells = document.querySelectorAll('.computer-board .cell');
  computerCells.forEach((cell) => {
    cell.removeEventListener('click', handlePlayerTurn);
  });
  View.populateBoard(player.gameboard.board, true);
  View.populateBoard(computer.gameboard.board, false);
  game();
});

const handleComputerTurn = () => {
  computer.computerAttack(player.gameboard);
  computer.toggleTurn();

  game();
};

const handlePlayerTurn = (e) => {
  const x = parseInt(e.target.dataset.column, 10);
  const y = parseInt(e.target.dataset.row, 10);
  player.attack(computer.gameboard, x, y);
  player.toggleTurn();
  setTimeout(handleComputerTurn, 0);
};

const game = () => {
  View.populateBoard(player.gameboard.board, true);
  View.populateBoard(computer.gameboard.board, false);
  if (player.gameboard.getAllSunk() || computer.gameboard.getAllSunk()) {
    console.log('Game Over');
    player.gameboard.reset();
    computer.gameboard.reset();
    player.toggleTurn();
    const computerCells = document.querySelectorAll('.computer-board .cell');
    computerCells.forEach((cell) => {
      cell.removeEventListener('click', handlePlayerTurn);
    });
    View.populateBoard(player.gameboard.board);
    View.populateBoard(computer.gameboard.board);
    game();
    return;
  }

  const isPlayerTurn = player.isTurn();

  if (isPlayerTurn) {
    const computerCells = document.querySelectorAll('.computer-board .cell');
    computerCells.forEach((cell) => {
      cell.addEventListener('click', handlePlayerTurn);
    });
  }
};

game();
