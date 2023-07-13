import Ship from './Ship';

const Gameboard = () => {
  let allSunk = false;
  let totalHits = 17;
  const getAllSunk = () => allSunk;
  const setAllSunk = () => {
    allSunk = true;
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
  const board = [
    // // remove on publish
    // [null, null, null, null, null, null, null, null, null, null],
    // [null, null, null, null, 'D', 'D', 'D', null, null, null],
    // [null, null, 'C', null, null, null, null, null, null, null],
    // [null, null, 'C', null, null, null, null, null, null, null],
    // [null, null, 'C', null, null, null, 'B', null, null, null],
    // [null, null, 'C', null, null, null, 'B', 'P', null, null],
    // [null, null, 'C', null, null, null, 'B', 'P', null, 'S'],
    // [null, null, null, null, null, null, 'B', null, null, 'S'],
    // [null, null, null, null, null, null, null, null, null, 'S'],
    // [null, null, null, null, null, null, null, null, null, null],
  ];

  const ships = [
    // remove on publish
    // Ship('carrier', 5, 'C'),
    // Ship('battleship', 4, 'B'),
    // Ship('destroyer', 3, 'D'),
    // Ship('submarine', 3, 'S'),
    // Ship('patrol boat', 2, 'P'),
  ];

  const createGameboard = () => {
    for (let i = 0; i < 10; i += 1) {
      const row = [];
      for (let j = 0; j < 10; j += 1) {
        row.push(null);
      }
      board.push(row);
    }
  };

  const placePiece = (y, x, ship, axis = true) => {
    const { length, piece } = ship;

    if (axis) {
      if (length + y >= 10) {
        return false;
      }
      for (let i = y; i < length + y; i += 1) {
        if (board[x][i]) {
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
        if (board[i][y]) {
          return false;
        }
      }
      for (let i = x; i < x + length; i += 1) {
        board[i][y] = piece;
      }
      board[x + length - 1][y] = piece;
    }

    ships.push(ship);
    return true;
  };

  const populateBoard = (startShips) => {
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

  const receiveAttack = (x, y) => {
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
      board[x][y] = '0';
    }
  };

  return {
    board,
    ships,
    startingPieces,
    createGameboard,
    placePiece,
    receiveAttack,
    populateBoard,
    getTotalHits,
    getAllSunk,
    allSunk,
  };
};
export default Gameboard;
