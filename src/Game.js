import Player from './Player';

const Game = () => {
  let activePlayer;
  let opponent;
  const human = Player(false);
  const computer = Player(true);

  const startGame = () => {
    activePlayer = human;
    opponent = computer;
  };

  const game = () => {
    activePlayer = activePlayer === human ? computer : human;
    opponent = opponent === computer ? human : computer;
    activePlayer.takeTurn(opponent.playerBoard);
    // while (activePlayer.gameboard.getTotalHits() !== 17) {
    //   // if (activePlayer.gameboard.getTotalHits() !== 17) {
    //   //   console.log('Game Over');
    //   //   break;
    //   // }
    // }
  };
  startGame();
  game();
};
export default Game;
