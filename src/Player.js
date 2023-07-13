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
    playerBoard.receiveAttack(x, y);
  };
  const humanTurn = (opponentBoard) => {
    const getRandomCoord = () => Math.floor(Math.random() * 10);
    let x;
    let y;
    do {
      x = getRandomCoord();
      y = getRandomCoord();
    } while (playerBoard.board[x][y] !== null);
    playerBoard.receiveAttack(x, y);
    // let x = parseInt(prompt('Enter x coord:'));
    // let y = parseInt(prompt('Enter y coord:'));
    // playerBoard.receiveAttack(x, y);
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
