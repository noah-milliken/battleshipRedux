import Gameboard from './Gameboard';

const Player = (isComputer) => {
  const playerBoard = Gameboard();

  const getRandomCoord = () => Math.floor(Math.random() * 10);
  playerBoard.createGameboard();
  playerBoard.populateBoard(playerBoard.startingPieces);
  const takeTurn = () => {
    if (computer) {
      xCoord = getRandomCoord();
      yCoord = getRandomCoord();
      attackEnemy(opponent, xCoord, yCoord);
    } else {
      xCoord = prompt('Enter a num between 0-9');
      yCoord = prompt('Enter a num between 0-9');
      attackEnemy(opponent, xCoord, yCoord);
    }
  };
  const attackEnemy = (opponent, x, y) => {
    return opponent.playerBoard.receiveAttack(x, y);
  };
  return { playerBoard, attackEnemy };
};
export default Player;
