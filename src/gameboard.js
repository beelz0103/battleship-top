import Ship from "./ship";
import {
  circumIndicesHelper,
  lastDigit,
  roundUpNearest10,
  isShip,
  increment,
} from "./helper";

const GameBoard = () => {
  const gameBoard = [];
  const hitCords = [];
  const turn = 0;
  const getTruns = () => turn;
  for (let i = 1; i <= 100; i += 1) {
    gameBoard.push(i);
  }

  const carrier = Ship("CV");
  const battleShip = Ship("BB");
  const cruiser = Ship("CA");
  const submarine = Ship("SS");
  const destroyer = Ship("DD");
  const allShips = [carrier, battleShip, cruiser, submarine, destroyer];

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

  // returns true if a surrounding cordinate is a ship cordinate
  const checkCircumference = (index) => {
    const circumIndices = circumIndicesHelper(index);
    let i = 0;
    while (i < circumIndices.length) {
      if (isShip(gameBoard[circumIndices[i]])) {
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
      const stepUpValue = increment(position);
      let i = 0;
      let j = startCord - 1;
      while (i < ship.getLength()) {
        gameBoard[j] = ship.type;
        shipCords.push(j + 1);
        i += 1;
        j += stepUpValue;
      }

      ship.deploy();
      ship.setCords(shipCords);
      return ship.isDeployed();
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

  const alreadyHit = (cord) => {
    if (hitCords.includes(cord)) {
      return true;
    }
    return false;
  };

  function getOnlyDiagonalCords(onBoardCord) {
    const cord = onBoardCord - 1;
    const exlude = [cord, cord + 1, cord - 1, cord + 10, cord - 10];
    return circumIndicesHelper(cord).filter((value) => !exlude.includes(value));
  }

  const hitDiagonal = (cord) => {
    const possibleCords = getOnlyDiagonalCords(cord);
    possibleCords.forEach((value) => {
      gameBoard[value] = "h";
      if (!alreadyHit(value + 1)) {
        hitCords.push(value + 1);
      }
    });
    return possibleCords.map((value) => value + 1);
  };

  const allShipsDeployed = () => {
    for (let i = 0; i < allShips.length; i += 1) {
      if (allShips[i].isDeployed() === "failed") {
        return false;
      }
    }
    return true;
  };

  function getAllAdjacentCords(ship) {
    return ship.getCords().reduce((adjacentArray, shipCord) => {
      circumIndicesHelper(shipCord - 1).forEach((adjCord) => {
        if (!adjacentArray.includes(adjCord)) adjacentArray.push(adjCord);
      });
      return adjacentArray;
    }, []);
  }

  const hitShipAdjacent = (ship) => {
    if (ship.isSunk()) {
      const remainingCords = getAllAdjacentCords(ship)
        .map((value) => value + 1)
        .filter((value) => !hitCords.includes(value));

      remainingCords.forEach((cord) => {
        gameBoard[cord - 1] = "h";
      });

      return remainingCords;
    }
    return null;
  };

  let initiated;

  const getInitiated = () => initiated;

  const initiateBoard = () => {
    if (allShipsDeployed()) {
      initiated = true;
    } else {
      initiated = false;
    }
  };

  function noAttack() {
    return "h";
  }

  function updateShip(hitTarget, cord) {
    const ship = getShipFromSymbol(hitTarget);
    ship.hit();
    hitDiagonal(cord);
    hitShipAdjacent(ship);
  }

  function attackShip(cord) {
    hitCords.push(cord);
    const hitTarget = gameBoard[cord - 1];
    gameBoard[cord - 1] = "h";
    updateShip(hitTarget, cord);
    return hitTarget;
  }

  function attackWater(cord) {
    hitCords.push(cord);
    const hitTarget = gameBoard[cord - 1];
    gameBoard[cord - 1] = "h";
    return hitTarget;
  }

  const recieveAttack = (cord) => {
    let hitTarget;
    if (alreadyHit(cord)) {
      hitTarget = noAttack();
    } else if (isShip(gameBoard[cord - 1])) {
      hitTarget = attackShip(cord);
    } else {
      hitTarget = attackWater(cord);
    }
    return hitTarget;
  };

  const allSunk = () => {
    for (let i = 0; i < allShips.length; i += 1) {
      if (allShips[i].isSunk() === false) {
        return false;
      }
    }
    return true;
  };

  const getHitCords = () => hitCords;

  return {
    canPlaceShip,
    gameBoard,
    placeShip,
    recieveAttack,
    allSunk,
    isShip,
    allShips,
    allShipsDeployed,
    hitCords,
    checkCircumference,
    hitDiagonal,
    hitShipAdjacent,
    getHitCords,
    getTruns,
    initiateBoard,
    getInitiated,
  };
};

export default GameBoard;
