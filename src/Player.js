import Gameboard from './Gameboard';

const Player = () => {
  let gameboard = Gameboard();
  let isPlayerTurn = true;

  const coords = new Set();
  const attack = (opponentBoard, x, y) => {
    opponentBoard.receiveAttack(x, y);
    return opponentBoard.board;
  };
  const computerAttack = (opponentBoard) => {
    let x, y;
    do {
      x = Math.floor(Math.random() * 10);
      y = Math.floor(Math.random() * 10);
    } while (coords.has(JSON.stringify([x, y])));
    {
      coords.add(JSON.stringify([x, y]));
      opponentBoard.receiveAttack(x, y);
      return opponentBoard.board;
    }
  };
  const isTurn = () => {
    return isPlayerTurn;
  };
  const toggleTurn = () => {
    isPlayerTurn = !isPlayerTurn;
  };
  const reset = () => {
    console.log('player reset');
    gameboard.reset();
    isPlayerTurn = true;
  };

  return {
    attack,
    computerAttack,
    isTurn,
    toggleTurn,
    reset,
    gameboard,
  };
};
export default Player;
