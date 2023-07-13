import Gameboard from '../src/Gameboard';

describe('Should return an instantiated gameboard object', () => {
  const playerBoard = Gameboard();
  playerBoard.createGameboard();
  test('Create an empty gameboard of null values', () => {
    const expectedGameboard = Array(10).fill(Array(10).fill(null));
    expect(playerBoard.board).toStrictEqual(expectedGameboard);
  });
  test('should create a board with 17 pieces placed', () => {
    playerBoard.populateBoard(playerBoard.startingPieces);
    const expectedPieces = playerBoard.board
      .flat()
      .filter((cell) => cell !== null).length;
    expect(expectedPieces).toBe(17);
  });
});
