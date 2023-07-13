import Gameboard from '../src/Gameboard';

describe('Should return an instantiated gameboard object', () => {
  const playerBoard = Gameboard();
  playerBoard.createGameboard();
  const expectedGameboard = Array(10).fill(Array(10).fill(null));
  test.skip('Create an empty gameboard of null values', () => {
    expect(playerBoard.board).toStrictEqual(expectedGameboard);
  });
  test('should create a board with 17 pieces placed', () => {
    const expectedPieces = playerBoard.board
      .flat()
      .filter((cell) => cell !== null).length;
    expect(expectedPieces).toBe(17);
  });
  test('should test the recieve fire function.', () => {
    playerBoard.receiveAttack(1, 4);
    playerBoard.receiveAttack(4, 4);
    expect(playerBoard.board[1][4]).toBe('᪥');
    expect(playerBoard.board[4][4]).toBe('০');
    playerBoard.receiveAttack(1, 6);
    playerBoard.receiveAttack(1, 5);
    playerBoard.receiveAttack(2, 2);
    playerBoard.receiveAttack(3, 2);
    playerBoard.receiveAttack(4, 2);
    playerBoard.receiveAttack(5, 2);
    playerBoard.receiveAttack(6, 2);
    playerBoard.receiveAttack(4, 6);
    playerBoard.receiveAttack(5, 6);
    playerBoard.receiveAttack(6, 6);
    playerBoard.receiveAttack(7, 6);
    playerBoard.receiveAttack(5, 7);
    playerBoard.receiveAttack(6, 7);
    playerBoard.receiveAttack(6, 9);
    playerBoard.receiveAttack(7, 9);
    playerBoard.receiveAttack(8, 9);
    expect(playerBoard.getAllSunk()).toBe(true);
  });
});
