import Gameboard from './Gameboard';

const Player = () => {
  const playerBoard = Gameboard();
  playerBoard.createGameboard();
  playerBoard.populateBoard(playerBoard.startingPieces);
  console.table(playerBoard.board);
  console.table(playerBoard.ships);
};
export default Player;
