import Gameboard from '../src/Gameboard';
import mockboard from './mockBoard';

describe('Should test the functionality of gameboard:', () => {
  let gameBoard;
  beforeEach(() => {
    gameBoard = Gameboard();
    gameBoard.createGameboard();
  });
  it('should check if all sunk is true ', () => {
    expect(gameBoard.getAllSunk()).toBe(false);
  });
  it('Should check total hits is 17', () => {
    expect(gameBoard.getTotalHits()).toBe(17);
  });
  it('Should have 17 pieces on each board. ', () => {
    gameBoard.populateBoard(gameBoard.startingPieces);
    const numPieces = gameBoard.board
      .flat()
      .filter((val) => val !== null).length;
    expect(numPieces).toBe(17);
  });

  const getCoords = (board) => {
    const coords = [];
    for (let i = 0; i < board.length; i++) {
      for (let j = 0; j < board[i].length; j++) {
        if (board[i][j] !== null) {
          coords.push([i, j]);
        }
      }
    }
    return coords;
  };
});
