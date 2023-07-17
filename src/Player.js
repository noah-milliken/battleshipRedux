import Gameboard from './Gameboard';

const Player = (name, isComputer) => {
  const playerName = name;
  const playerBoard = Gameboard();
  playerBoard.createGameboard();
  playerBoard.populateBoard(playerBoard.startingPieces);
  console.table(playerBoard.board);
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
  const humanTurn = (opponentBoard, x, y) => {
    console.log('Human selected:', x, y);
    opponentBoard.receiveAttack(x, y);
  };
  const turn = (opponentBoard) => {
    if (isComputer) {
      computerTurn(opponentBoard);
    } else {
      return;
    }
  };
  return { playerBoard, turn, playerName, isComputer, humanTurn };
};
export default Player;
