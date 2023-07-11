import Gameboard from './Gameboard';

const Player = (isComputer) => {
  const playerBoard = Gameboard();
  const getRandomCoord = () => Math.floor(Math.random() * 10);
  playerBoard.createGameboard();
  playerBoard.populateBoard(playerBoard.startingPieces);
  playerBoard.attackOpponent = (opponentBoard, x, y) => {
    opponentBoard.receiveAttack(x, y);
  };
  const takeTurn = (opponentBoard) => {
    console.log('opponentBoard:', opponentBoard.board); // Check the value of opponentBoard
    if (isComputer) {
      const xCoord = getRandomCoord();
      const yCoord = getRandomCoord();
      console.log('Random Coordinates:', xCoord, yCoord); // Check the generated random coordinates
      if (!opponentBoard.board[xCoord][yCoord]) {
        console.log('Attacking opponent at:', xCoord, yCoord); // Check if the attack is executed
        playerBoard.attackOpponent(opponentBoard, xCoord, yCoord);
      }
    } else {
      const xCoord = prompt('What is your x coordinate?');
      const yCoord = prompt('What is your y coordinate?');
      console.log('User Coordinates:', xCoord, yCoord); // Check the user input coordinates
      if (!opponentBoard[xCoord][yCoord]) {
        console.log('Attacking opponent at:', xCoord, yCoord); // Check if the attack is executed
        playerBoard.attackOpponent(opponentBoard, xCoord, yCoord);
      }
    }
  };

  return { playerBoard, takeTurn };
};
export default Player;
