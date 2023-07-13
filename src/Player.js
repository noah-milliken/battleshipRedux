import Gameboard from './Gameboard';

const Player = (isComputer) => {
  const playerBoard = Gameboard();

  playerBoard.createGameboard();
  playerBoard.populateBoard(playerBoard.startingPieces);
  const getRandomCoord = () => Math.floor(Math.random() * 10);
  const computerTurn = (opponentBoard) => {
    let x;
    let y;
    do {
      x = getRandomCoord();
      y = getRandomCoord();
    } while (opponentBoard.board[x][y]);
    opponentBoard.receiveAttack(x, y);
  };
  const humanTurn = (opponentBoard) => {
    let x = parseInt(prompt('Enter x coord:'));
    let y = parseInt(prompt('Enter y coord:'));

    opponentBoard.receiveAttack(x, y);
  };
  const turn = (opponentBoard) => {
    if (isComputer) {
      computerTurn();
    } else {
      humanTurn();
    }
  };
  return { playerBoard, turn };
};
export default Player;
