import Ship from "./ship";

const GameBoard = () => {
  const gameBoard = [];
  const carrier = Ship("CV");
  const battleShip = Ship("BB");
  const cruiser = Ship("CA");
  const submarine = Ship("SS");
  const destroyer = Ship("DD");
  const allShips = [carrier, battleShip, cruiser, submarine, destroyer];

  for (let i = 1; i <= 100; i += 1) {
    gameBoard.push("water");
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
        startCord + ship.getLength() - 1 > roundUpNearest10(startCord)) ||
      (position === "vertical" &&
        startCord + ship.getLength() * 10 > 100 + lastDigit(startCord))
    ) {
      return true;
    }
    return false;
  };

  const checkForSymbol = (value) => {
    const symbols = ["CV", "BB", "CA", "SS", "DD"];
    if (symbols.includes(value)) {
      return true;
    }
    return false;
  };

  const checkCircumference = (index) => {
    const circumIndices = circumIndicesHelper(index);
    let i = 0;
    while (i < circumIndices.length) {
      if (checkForSymbol(gameBoard[circumIndices[i]])) {
        return true;
      }
      i += 1;
    }
    return false;
  };

  const overlaps = (ship, startCord, position) => {
    const stepUpValue = increment(position);

    let i = 0;
    let j = startCord - 1;
    while (i < ship.getLength()) {
      if (checkCircumference(j)) {
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

  const canPlaceShip = (ship, startCord, position) => {
    if (outsideBoard(ship, startCord, position)) {
      return false;
    }
    if (overlaps(ship, startCord, position)) {
      return false;
    }
    return true;
  };

  const placeShip = (ship, startCord, position) => {
    const shipCords = [];
    if (canPlaceShip(ship, startCord, position)) {
      ship.deploy();
      const stepUpValue = increment(position);
      let i = 0;
      let j = startCord - 1;
      while (i < ship.getLength()) {
        gameBoard[j] = ship.type;
        shipCords.push(j + 1);
        i += 1;
        j += stepUpValue;
      }
      ship.setCords(shipCords);
      return ship.isDeployed(shipCords);
    }
    ship.couldNotDeploy();
    return ship.isDeployed();
  };

  const getShipFromSymbol = (symbol) => {
    let getShip;
    allShips.forEach((ship) => {
      if (ship.type === symbol) {
        getShip = ship;
      }
    });
    return getShip;
  };

  const hitCords = [];

  const hitDiagonal = (cordi) => {
    const onlyDiagoanl = (value) => {
      const exlude = [
        cordi - 1,
        cordi + 1 - 1,
        cordi - 1 - 1,
        cordi + 10 - 1,
        cordi - 10 - 1,
      ];
      if (exlude.includes(value)) {
        return false;
      }
      return true;
    };
    let possibleCords = circumIndicesHelper(cordi - 1);
    possibleCords = possibleCords.filter((value) => onlyDiagoanl(value));
    possibleCords.forEach((value) => {
      gameBoard[value] = "hit";
      if (!hitCords.includes(value + 1)) {
        hitCords.push(value + 1);
      }
    });
    return possibleCords.map((value) => value + 1);
  };

  const alreadyHit = (cord) => {
    if (hitCords.includes(cord)) {
      return true;
    }
    return false;
  };

  const allShipsDeployed = () => {
    for (let i = 0; i < allShips.length; i += 1) {
      if (allShips[i].isDeployed() === "failed") {
        return false;
      }
    }
    return true;
  };

  let turn = 0;

  const hitShipAdjacent = (ship) => {
    const shipsCords = ship.getCords();
    const adjCords = [];
    shipsCords.forEach((value) => {
      const diag = circumIndicesHelper(value - 1);
      diag.forEach((value) => {
        if (!adjCords.includes(value)) adjCords.push(value);
      });
    });

    const remainingCords = adjCords
      .map((value) => value + 1)
      .filter((value) => !hitCords.includes(value));

    remainingCords.forEach((val) => {
      gameBoard[val - 1] = "hit";
    });
    return remainingCords;
  };

  const recieveAttack = (cord) => {
    if (turn === 0) {
      if (allShipsDeployed() === false) {
        return "some ships werent able to deploy";
      }
    }
    if (!alreadyHit(cord)) {
      turn = 1;
      hitCords.push(cord);
      if (checkForSymbol(gameBoard[cord - 1])) {
        const ship = getShipFromSymbol(gameBoard[cord - 1]);
        ship.hit();
        gameBoard[cord - 1] = "hit";
        hitDiagonal(cord);
        if (ship.isSunk()) {
          hitShipAdjacent(ship);
        }
        return ship;
      }
      gameBoard[cord - 1] = "hit";
      return gameBoard[cord - 1];
    }
    return gameBoard[cord - 1];
  };

  const allSunk = () => {
    for (let i = 0; i < allShips.length; i += 1) {
      if (allShips[i].isSunk() === false) {
        return false;
      }
    }
    return true;
  };

  return {
    canPlaceShip,
    gameBoard,
    placeShip,
    recieveAttack,
    allSunk,
    checkForSymbol,
    allShips,
    allShipsDeployed,
    hitCords,
    checkCircumference,
    hitDiagonal,
    hitShipAdjacent,
  };
};

export default GameBoard;

const circumIndicesHelper = (index) => {
  const leftColumn = [10, 20, 30, 40, 50, 60, 70, 80];
  const rightColumn = [19, 29, 39, 49, 59, 69, 79, 89];
  let circumIndices = [];
  switch (true) {
    case index === 0:
      circumIndices = [index, index + 1, index + 10, index + 11];
      break;
    case index === 9:
      circumIndices = [index, index - 1, index + 9, index + 10];
      break;
    case index === 90:
      circumIndices = [index, index - 10, index + 1, index - 9];
      break;
    case index === 99:
      circumIndices = [index, index - 1, index - 10, index - 11];
      break;
    case index > 0 && index < 9:
      circumIndices = [
        index,
        index + 1,
        index + 10,
        index + 11,
        index + 9,
        index - 1,
      ];
      break;
    case index > 90 && index < 99:
      circumIndices = [
        index,
        index - 11,
        index - 10,
        index - 9,
        index + 1,
        index - 1,
      ];
      break;
    case leftColumn.includes(index):
      circumIndices = [
        index,
        index - 10,
        index - 9,
        index + 1,
        index + 10,
        index + 11,
      ];
      break;
    case rightColumn.includes(index):
      circumIndices = [
        index,
        index - 11,
        index - 10,
        index - 1,
        index + 9,
        index + 10,
      ];
      break;

    default:
      circumIndices = [
        index,
        index + 1,
        index - 1,
        index + 10,
        index - 10,
        index + 11,
        index - 11,
        index - 9,
        index + 9,
      ];
  }
  return circumIndices;
};
