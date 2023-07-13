import Player from './Player';

const Game = () => {
  let currentPlyer;
  let gameOver = false;
  let winner;

  const startGame = () => {
    const human = Player('human', false);
    const computer = Player('computer', true);
    currentPlyer = human;
  };
  const game = () => {
    while (!activePlayer.playerBoard.getAllSunk()) {
      activePlayer.takeTurn(opponent.playerBoard);
      activePlayer = activePlayer === human ? computer : human;
      opponent = opponent === computer ? human : computer;
    }
  };

  return { startGame, game };
};
export default Game;
