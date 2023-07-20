import Gameboard from './Gameboard';

const Player = () => {
  const coords = new Set();
  const attack = (enemyBoard, x, y) => {
    if (coords.has(JSON.stringify([x, y]))) {
      return false;
    }
    coords.add(JSON.stringify([x, y]));
    enemyBoard.receiveAttack(x, y);
    return enemyBoard.board;
  };

  return { attack };
};
export default Player;
