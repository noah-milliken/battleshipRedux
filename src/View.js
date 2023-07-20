import Player from './Player';

const View = (() => {
  const createGameboard = () => {
    const boards = document.querySelectorAll('.gameboard');
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
  const renderAttack = (human, humanBoard, computer, computerBoard) => {
    const computerCells = document.querySelectorAll('.computer-board .cell');
    computerCells.forEach((cell) => {
      cell.addEventListener('click', (e) => {
        const square =
          computerBoard.board[e.target.dataset.row][e.target.dataset.column];
        if (square === null || square == 'X') {
          cell.classList.add('miss');
        } else {
          cell.classList.add('hit');
        }
        human.attack(computerBoard, cell.dataset.column, cell.dataset.row);

        setTimeout(() => {
          console.table(humanBoard.board);
          console.log('computer move');
          let x = Math.floor(Math.random() * 10);
          let y = Math.floor(Math.random() * 10);
          const computerMove = computer.attack(humanBoard, x, y);
          while (!computerMove) {
            x = Math.floor(Math.random() * 10);
            y = Math.floor(Math.random() * 10);
            computer.attack(humanBoard, x, y);
          }
          const humanCells = document.querySelectorAll('.player-board .cell');
          humanCells.forEach((cell) => {
            const board = humanBoard.board[y][x];
            if (cell.dataset.row == x && cell.dataset.column == y) {
              if (board !== null && board !== 'O') {
                cell.classList.add('hit');
              } else {
                cell.classList.add('miss');
              }
            }
          });
        }, 500);
      });
    });
    console.log(computerCells);
  };
  const populateBoard = (gameboard) => {
    const cells = document.querySelectorAll('.player-board .cell');
    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        if (gameboard[i][j] !== null) {
          cells[i * 10 + j].classList.add('occupied');
        }
      }
    }
  };

  return {
    createGameboard,
    populateBoard,
    renderAttack,
  };
})();
export default View;
