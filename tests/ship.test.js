import Ship from '../src/Ship';

describe('should return a ship object', () => {
  describe('Should instantiate a battle ship object', () => {
    const battleship = Ship('battleship', 4, 'B');
    test('should createa battleship', () => {
      expect(battleship.name).toBe('battleship');
      expect(battleship.length).toBe(4);
      expect(battleship.piece).toBe('B');
    });
    test('Should update the ship hits state and isSunk state', () => {
      expect(battleship.getHits()).toBe(4);
      battleship.hit();
      battleship.hit();
      expect(battleship.getHits()).toBe(2);
      battleship.hit();
      battleship.hit();
      expect(battleship.getIsSunk()).toBe(true);
    });
  });
});
