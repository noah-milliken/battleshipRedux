import Player from './Player';
import gameGrid from '../src/gameGrid';

const Game = () => {
  let currentPlayer;
  let opponent;
  let human;
  let computer;
  let gameOver = false;

  const startGame = () => {
    human = Player('human', false);
    computer = Player('computer', true);
    currentPlayer = human;
    opponent = computer;
    boardComponent(human);
    boardComponent(computer);
  };

  const checkGameOver = () => {
    const humanBoardSunk = human.playerBoard.getAllSunk();
    console.log(humanBoardSunk);
    const computerBoardSunk = computer.playerBoard.getAllSunk();
    if (humanBoardSunk) {
      gameOver = true;
    }
    if (computerBoardSunk) {
      gameOver = true;
    }
  };
  const takeTurn = (x, y) => {
    if (currentPlayer.isComputer) {
      currentPlayer.turn(opponent.playerBoard);
      checkGameOver();
      if (!gameOver) {
        currentPlayer = currentPlayer === human ? computer : human;
        opponent = opponent === computer ? human : computer;
        takeTurn();
      }
    } else {
      currentPlayer.turn(opponent.playerBoard, x, y);
    }
  };
  const boardComponent = (player) => {
    const gameContainer = document.getElementById('game-container');
    const boardElement = gameGrid(player.playerBoard, player, takeTurn);

    gameContainer.appendChild(boardElement);
  };

  return { startGame, takeTurn, checkGameOver, boardComponent };
};
export default Game;
