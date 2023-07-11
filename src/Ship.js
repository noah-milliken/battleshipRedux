const Ship = (name, length, piece) => {
  let hits = length;
  let isSunk = false;
  const getHits = () => hits;
  const getIsSunk = () => isSunk;
  const sunk = () => {
    isSunk = true;
  };
  const hit = () => {
    hits -= 1;
    if (hits <= 0) {
      sunk();
    }
  };
  return {
    name,
    length,
    piece,
    getHits,
    getIsSunk,
    hit,
  };
};

export default Ship;
