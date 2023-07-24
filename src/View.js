import Player from './Player';

const View = (() => {
  const createGameboard = () => {
    const boards = document.querySelectorAll('.gameboard');
    console.log(boards);
    boards.forEach((board) => {
      for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
          const cell = document.createElement('div');
          cell.classList.add('cell');
          cell.dataset.row = i;
          cell.dataset.column = j;
          board.appendChild(cell);
        }
      }
    });
  };

  const populateBoard = (gameboard, isPlayerBoard) => {
    console.log('populating board', gameboard);
    const cells = isPlayerBoard
      ? document.querySelectorAll('.player-board .cell')
      : document.querySelectorAll('.computer-board .cell');
    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        if (gameboard[i][j] === 'X') {
          cells[i * 10 + j].classList.add('hit');
        } else if (gameboard[i][j] === 'O') {
          cells[i * 10 + j].classList.add('miss');
        }
      }
    }

    if (isPlayerBoard) {
      for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
          if (gameboard[i][j] !== null) {
            cells[i * 10 + j].classList.add('occupied');
          } else {
            cells[i * 10 + j].classList.remove('occupied');
          }
        }
      }
    }
  };

  return {
    createGameboard,
    populateBoard,
  };
})();
export default View;
