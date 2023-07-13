import Player from '../src/Player';
import createMockOpponentBoard from './mockOpponentBoard';

describe('Player', () => {
  test('takeTurn should attack opponent board', () => {
    const player = Player(false); // Create a human player
    const opponentBoard = createMockOpponentBoard();

    opponentBoard.mockAttack(4, 4);
    console.log(opponentBoard.board);
    // Check if the opponent board's receiveAttack method was called
    expect(opponentBoard.board[4][4]).toBe('X');
  });
});
