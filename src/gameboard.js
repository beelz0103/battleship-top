const GameBoard = () => {
  const gameBoard = [];

  for (let i = 1; i <= 100; i += 1) {
    gameBoard.push(i);
  }

  function roundUpNearest10(num) {
    return Math.ceil(num / 10) * 10;
  }

  function lastDigit(num) {
    if (num % 10 === 0) {
      return 10;
    }
    return num % 10;
  }

  const outsideBoard = (ship, startCord, position) => {
    if (
      (position === "horizontal" &&
        startCord + ship.getLength() > roundUpNearest10(startCord)) ||
      (position === "vertical" &&
        startCord + ship.getLength() * 10 > 100 + lastDigit(startCord))
    ) {
      return true;
    }
    return false;
  };

  const overlaps = (ship, startCord, position) => {
    const stepUpValue = increment(position);
    let i = 0;
    let j = startCord - 1;
    while (i < ship.getLength()) {
      if (checkForSymbol(gameBoard[j])) {
        return true;
      }
      i += 1;
      j += stepUpValue;
    }

    return false;
  };

  const increment = (position) => {
    if (position === "horizontal") {
      return 1;
    }
    if (position === "vertical") {
      return 10;
    }
  };

  const placeShip = (ship, startCord, position) => {
    if (outsideBoard(ship, startCord, position)) {
      return "ship can't be placed outside the board";
    }
    if (overlaps(ship, startCord, position)) {
      return "overlaopping not allowed";
    }
    const shipCords = [];
    const stepUpValue = increment(position);
    let i = 0;
    let j = startCord - 1;
    while (i < ship.getLength()) {
      gameBoard[j] = ship.type;
      shipCords.push(ship.type + (j + 1));
      i += 1;
      j += stepUpValue;
    }
    return shipCords;
  };

  const checkForSymbol = (value) => {
    const symbols = ["CV", "BB", "CA", "SS", "DD"];
    if (symbols.includes(value)) {
      return true;
    }
    return false;
  };

  const getShipFromSymbol = (allShips, symbol) => {
    let getShip;
    allShips.forEach((ship) => {
      if (ship.type === symbol) {
        getShip = ship;
      }
    });
    return getShip;
  };

  const recieveAttack = (allShips, cord) => {
    if (gameBoard[cord - 1] === "hit") {
      return "already hit";
    }
    if (checkForSymbol(gameBoard[cord - 1])) {
      const ship = getShipFromSymbol(allShips, gameBoard[cord - 1]);
      ship.hit();
      gameBoard[cord - 1] = "hit";
      return ship;
    }
    gameBoard[cord - 1] = "hit";
    return gameBoard[cord - 1];
  };

  const allSunk = (allShips) => {
    for (let i = 0; i < allShips.length; i++) {
      if (!allShips[i].isSunk()) {
        return false;
      }
    }
    return true;
  };

  return { gameBoard, placeShip, recieveAttack, allSunk, checkForSymbol };
};

export default GameBoard;
