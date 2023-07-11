import Game from './Game';

const gameInstance = Game();
console.log(gameInstance);
function component() {
  const element = document.createElement('div');

  // Lodash, currently included via a script, is required for this line to work
  element.textContent = 'boobs';
  element.classList.add('hello');

  return element;
}

document.body.appendChild(component());
