import Ship from './Ship';

const Gameboard = () => {
  let allSunk = false;
  let totalHits = 17;
  const getAllSunk = () => allSunk;
  const setAllSunk = () => {
    allSunk = true;
    console.log(getTotalHits());
    console.log('all Sunk');
  };
  const getTotalHits = () => totalHits;
  const startingPieces = [
    ['carrier', 5, 'C'],
    ['battleship', 4, 'B'],
    ['destroyer', 3, 'D'],
    ['submarine', 3, 'S'],
    ['patrol boat', 2, 'P'],
  ];
  let board = [];

  let ships = [];

  const createGameboard = () => {
    board = [];
    for (let i = 0; i < 10; i += 1) {
      const row = [];
      for (let j = 0; j < 10; j += 1) {
        row.push(null);
      }
      board.push(row);
    }
  };
  createGameboard();

  const placePiece = (x, y, ship, axis = true) => {
    const { length, piece } = ship;

    if (axis) {
      if (length + y >= 10) {
        return false;
      }
      for (let i = y; i < length + y; i += 1) {
        if (board[x][i] && board[x][i]) {
          return false;
        }
      }
      for (let i = y; i < length + y; i += 1) {
        board[x][i] = piece;
      }
      board[x][y + length - 1] = piece;
    } else {
      if (length + x >= 10) {
        return false;
      }

      for (let i = x; i < x + length; i += 1) {
        if (board[i] && board[i][y]) {
          return false;
        }
      }
      for (let i = x; i < x + length; i += 1) {
        if (board[i]) {
          board[i][y] = piece;
        }
      }
      board[x + length - 1][y] = piece;
    }

    ships.push(ship);
    return true;
  };

  const populateBoard = (startShips) => {
    ships = [];
    const randCoord = () => Math.floor(Math.random() * 10);

    for (let i = 0; i < startShips.length; i += 1) {
      const ship = startShips[i];
      const placedShip = Ship(ship[0], ship[1], ship[2]);
      let isValidPlacement = false;

      while (!isValidPlacement) {
        const axis = Math.random() > 0.5;
        const randX = randCoord();
        const randY = randCoord();
        isValidPlacement = placePiece(randX, randY, placedShip, axis);
      }
    }
  };
  populateBoard(startingPieces);

  const receiveAttack = (y, x) => {
    const target = board[x][y];
    if (target) {
      const ship = ships.find((s) => s.piece === target);
      if (ship) {
        board[x][y] = 'X';
        ship.hit();
        totalHits -= 1;
        if (totalHits <= 0) {
          setAllSunk();
        }
      }
    } else {
      board[x][y] = 'O';
    }
  };
  const reset = () => {
    console.log('gameboard reset');
    totalHits = 17;
    allSunk = false;
    ships = [];
    board = [];

    createGameboard();

    populateBoard(startingPieces);
  };
  return {
    board,
    ships,
    receiveAttack,
    getTotalHits,
    getAllSunk,
    reset,
  };
};
export default Gameboard;
