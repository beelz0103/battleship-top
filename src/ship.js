const Ship = (type, hits = 0, sunk = false) => {
  let length;
  switch (type) {
    case "CV":
      length = 5;
      break;
    case "BB":
      length = 4;
      break;
    case "CA":
      length = 3;
      break;
    case "SS":
      length = 3;
      break;
    case "DD":
      length = 2;
      break;
    default:
      length = 0;
      break;
  }

  const getHits = () => hits;
  const getLength = () => length;

  const hit = () => {
    if (hits === length) {
      return;
    }
    hits += 1;
    if (hits === length) {
      sunk = true;
    }
  };

  const isSunk = () => sunk;

  return { type, hit, getHits, isSunk, getLength };
};

export default Ship;
