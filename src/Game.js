import Player from './Player';

const Game = () => {
  let currentPlayer;
  let human;
  let computer;

  const startGame = () => {
    human = Player('human', false);
    computer = Player('computer', true);
    currentPlayer = human;
  };
  const takeTurn = () => {
    currentPlayer.takeTurn();
    currentPlayer = currentPlayer === human ? computer : human;
  };

  return { startGame, takeTurn };
};
export default Game;
