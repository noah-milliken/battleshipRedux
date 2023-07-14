import Game from './Game';
const gameboard = (player) => {
  const boardArray = player.board;
  const boardHtml = `
    <table id='${player}-board' class="game-boards>
      ${boardArray
        .map((row, y) => {
          return `
        <tr> 
        ${row.map((cell, x) => {
          return `<td data-x="${x}" data-y="${y}">${cell || '.'}</td>`;
        })}
        </tr>
        `;
        })
        .join('')}
    </table>
    `;
  return boardHtml;
};
export default gameboard;
