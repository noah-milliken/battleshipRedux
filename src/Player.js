import Gameboard from './Gameboard';

const Player = (isComputer) => {
  const playerBoard = Gameboard();

  const getRandomCoord = () => Math.floor(Math.random() * 10);
  playerBoard.createGameboard();
  playerBoard.populateBoard(playerBoard.startingPieces);
  
  return { playerBoard };
};
export default Player;
