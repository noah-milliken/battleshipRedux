const gameGrid = (player) => {
  console.log(player.playerName);
  const boardArray = player.playerBoard.board;
  const boardHtml = `
    <table id='${player.playerName}-board' class="game-board">
      ${boardArray
        .map((row, y) => {
          return `
        <tr> 
        ${row.map((cell, x) => {
          return `<td data-x="${x}" data-y="${y}"><button data-x="${x}" data-y="${y}">${
            cell || ''
          }</button></td>`;
        })}
        </tr>
        `;
        })
        .join('')}
    </table>
    `;
  return boardHtml;
};
export default gameGrid;
