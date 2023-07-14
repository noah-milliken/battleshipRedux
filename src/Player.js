import Gameboard from './Gameboard';

const Player = (name, isComputer) => {
  const playerName = name;
  console.log(playerName);
  const playerBoard = Gameboard();

  playerBoard.createGameboard();
  playerBoard.populateBoard(playerBoard.startingPieces);

  const computerTurn = (opponentBoard) => {
    const getRandomCoord = () => Math.floor(Math.random() * 10);
    let x;
    let y;
    do {
      x = getRandomCoord();
      y = getRandomCoord();
    } while (playerBoard.board[x][y] !== null);
    console.log('hello');
    opponentBoard.receiveAttack(x, y);
  };
  const humanTurn = (opponentBoard) => {
    let x;
    let y;
    do {
      x = parseInt(prompt('Enter x coord:'));
      y = parseInt(prompt('Enter y coord:'));
    } while (playerBoard.board[x][y] !== null);
    console.log('goodbye');
    opponentBoard.receiveAttack(x, y);
  };
  const turn = (opponentBoard) => {
    if (isComputer) {
      computerTurn(opponentBoard);
    } else {
      humanTurn(opponentBoard);
    }
  };
  return { playerBoard, turn };
};
export default Player;
