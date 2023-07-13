import Player from './Player';

const Game = () => {
  let activePlayer;
  let opponent;
  const human = Player(false);
  const computer = Player(true);
  console.log(human);
  const startGame = () => {
    activePlayer = human;
    opponent = computer;
  };

  return { startGame };
};
export default Game;
