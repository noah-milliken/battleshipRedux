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
    if (
      human.playerBoard.board.getAllsunk === true ||
      computer.playerBoard.board.getAllsunk == true
    ) {
      return (gameOver = true);
    }
  };
  const takeTurn = () => {
    while (!gameOver) {
      currentPlayer.turn(opponent.playerBoard);
      console.log('turn complete');
      currentPlayer = currentPlayer === human ? computer : human;
      console.log(currentPlayer);
      opponent = opponent === computer ? human : computer;
      console.log('switched');
      console.table(human.playerBoard.board);
      console.table(computer.playerBoard.board);
      checkGameOver();
    }
  };

  return { startGame, takeTurn, checkGameOver };
};
export default Game;
