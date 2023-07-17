import Player from '../src/Player';
describe('Should test the player functionaluty', () => {
  const mockComputerTuen = jest.fn;
  let computer1;
  let computer2;
  beforeEach(() => {
    computer1 = Player('Computer 1', true);
    computer2 = Player('Computer 2', true);
  });
  it('Should createa player', () => {
    expect(computer1.playerName).toBe('Computer 1');
  });
  it('should check if the take turn works', () => {
    computer1.turn(computer2.playerBoard);
  });
});
