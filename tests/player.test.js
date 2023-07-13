import Player from '../src/Player';

describe('Component: gameplay', () => {
  test('player should be able to recieve an attack from another player', () => {
    const human = Player(false);
    const computer = Player(true);

    human.attackEnemy(computer, 5, 5);
    expect(computer.playerBoard.receiveAttack()).toHaveBeenCalledWith(5, 5);
  });
});
