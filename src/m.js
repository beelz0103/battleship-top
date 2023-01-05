function structuredClone(array) {
  return JSON.parse(JSON.stringify(array));
}

function removeShipFromBoardForMoveShip(shipCords) {
  shipCords.forEach((value) => {
    gameBoard[value - 1] = value;
  });
}

function reverseRemoveShipFromBoardForMoveShip(shipCords, ship) {
  shipCords.forEach((value) => {
    gameBoard[value - 1] = ship.type;
  });
}

const changePosition = (position) => {
  if (position === "horizontal") {
    return "vertical";
  }
  return "horizontal";
};

const moveShip = (ship, startCord, position) => {
  const currentCords = structuredClone(ship.getCords());
  const currentStartCord = currentCords[0];
  let isShipMoved;
  if (startCord === currentStartCord) {
    // wrtie tests fro this later
    position = changePosition(position);
    isShipMoved = placeShip(ship, startCord, position);
    // wrtie tests fro this later
  }
  removeShipFromBoardForMoveShip(currentCords);
  ship.setCords(null);
  isShipMoved = placeShip(ship, startCord, position);
  if (isShipMoved === "failed") {
    ship.setCords(currentCords);
    reverseRemoveShipFromBoardForMoveShip(currentCords, ship);
  }
  return isShipMoved;
};
