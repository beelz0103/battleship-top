const Ship = (type) => {
  let hits = 0;
  let sunk = false;
  let deployed = false;
  let length = null;
  let cord = null;
  let position = null;

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

  const getLength = () => length;

  const setPosition = () => {
    if (cord === null) position = null;
    else position = cord[1] - cord[0] === 1 ? "horizontal" : "vertical";
  };

  const getPosition = () => position;

  const setCords = (cords) => {
    cord = cords;
    setPosition();
  };

  const getCords = () => cord;

  const isSunk = () => sunk;

  const hit = () => {
    if (isSunk()) return;
    hits += 1;
    if (hits === length) sunk = true;
  };

  const getHits = () => hits;

  const deploy = () => {
    deployed = true;
  };

  const couldNotDeploy = () => {
    deployed = false;
  };

  const isDeployed = () => deployed;

  return {
    type,
    getLength,
    hit,
    getHits,
    getPosition,
    setCords,
    getCords,
    isSunk,
    deploy,
    couldNotDeploy,
    isDeployed,
  };
};

export default Ship;
