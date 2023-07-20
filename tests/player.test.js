import Player from '../src/Player';
describe('Should test the player functionaluty', () => {
  const mockComputerTurn = jest.fn;
  let computer1;
  let computer2;
  beforeEach(() => {
    computer1 = Player('Computer 1', true);
    computer2 = Player('Computer 2', true);
  });
  it('Should create a player', () => {
    expect(computer1.playerName).toBe('Computer 1');
  });
});
