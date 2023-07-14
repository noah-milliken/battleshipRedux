import Player from './Player';

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
    while (!gameOver) {
      currentPlayer.turn(opponent.playerBoard);
      currentPlayer = currentPlayer === human ? computer : human;
      opponent = opponent === computer ? human : computer;
      console.table(human.playerBoard.board);
      console.table(computer.playerBoard.board);
      checkGameOver();
    }
  };

  return { startGame, takeTurn, checkGameOver };
};
export default Game;
