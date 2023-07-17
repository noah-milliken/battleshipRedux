const gameGrid = (gameboard, player, takeTurnFunction) => {
  const boardArray = gameboard.board;
  console.table(boardArray);
  const boardHtml = `
  <h1>${player.playerName}</h1>
  <table id="${player.playerName}-board" class="game-board">
    ${boardArray
      .map((row, y) => {
        return `
      <tr>${row
        .map((cell, x) => {
          return `<td data-x="${x}" data-y="${y}"><button data-x="${x}" data-y="${y}">${
            cell || ''
          }</button></td>`;
        })
        .join('')}</tr>`;
      })
      .join('')}
  </table>
`;
  const boardElement = document.createElement('div');
  boardElement.innerHTML = boardHtml;

  const buttons = boardElement.querySelectorAll('button');
  buttons.forEach((button) => {
    const x = parseInt(button.dataset.x);
    const y = parseInt(button.dataset.y);
    button.textContent = boardArray[y][x] || '';
    button.addEventListener('click', () => {
      if (!player.isComputer) {
        console.log(x, y);
        takeTurnFunction(player.playerBoard, x, y);
      }
    });
  });
  return boardElement;
};
export default gameGrid;
