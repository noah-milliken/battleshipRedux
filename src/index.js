function component() {
  const element = document.createElement('div');

  // Lodash, currently included via a script, is required for this line to work
  element.textContent = 'martians';
  element.classList.add('hello');

  return element;
}

document.body.appendChild(component());
