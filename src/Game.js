import Player from './Player';
import gameGrid from '../src/gameGrid';

const Game = () => {
  let currentPlayer;
  let opponent;
  let human;
  let computer;
  let gameOver = 0;
  const startGame = () => {
    human = Player('human', false);
    computer = Player('computer', true);
    console.log(human);
    const humanBoard = boardComponent(human);
    const computerBoard = boardComponent(computer);
    currentPlayer = human;
    opponent = computer;
  };

  const checkGameOver = () => {
    const humanBoardSunk = human.playerBoard.getAllsunk();
    const computerBoardSunk = computer.playerBoard.getAllsunk();
    if (humanBoardSunk) {
      gameOver = true;
    }
    if (computerBoardSunk) {
      gameOver = true;
    }
  };
  const takeTurn = () => {
    while (gameOver < 100) {
      currentPlayer.turn(opponent.playerBoard);
      currentPlayer = currentPlayer === human ? computer : human;
      opponent = opponent === computer ? human : computer;

      gameOver++;
      // checkGameOver();
    }
  };
  const boardComponent = (player) => {
    const gameContainer = document.getElementById('game-container');
    const humanBoardHtml = gameGrid(player);

    gameContainer.innerHTML += humanBoardHtml;
  };

  return { startGame, takeTurn, checkGameOver, boardComponent };
};
export default Game;
