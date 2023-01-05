// const moveShip = (e) => {
//   const squareDivs = document.querySelectorAll(`#${player.player} div`);
//   const cord = parseInt(e.target.id);
//   if (i < 5) {
//     const ship = currentPlayer.board.allShips[i];
//     if (currentPlayer.board.canPlaceShip(ship, cord, "horizontal")) {
//       currentPlayer.board.placeShip(ship, cord, "horizontal");
//       i++;
//     }
//     gameDom.showPlayerShips(currentPlayer);
//   }
//   // const ship = currentPlayer.board.allShips[1];
//   // console.log(currentPlayer.board.canPlaceShip(ship, cord, "horizontal"));
//   // if (currentPlayer.board.canPlaceShip(ship, cord, "horizontal")) {
//   //   currentPlayer.board.placeShip(ship, cord, "horizontal");
//   // }
//   // gameDom.showPlayerShips(currentPlayer);
// };
const i = 1;

const returnShipIndexFromShipType = (shipType) => {
  let index;
  switch (shipType) {
    case "CV":
      return 0;
    case "BB":
      return 1;
    case "CA":
      return 2;
    case "SS":
      return 3;
    case "DD":
      return 4;
    default:
      return "not a ship";
  }
};

const moveShip = (ship, startCord, position) => {
  const currentCords = structuredClone(ship.getCords());
  const currentStartCord = currentCords[0];
  let newPosition;
  ship.setCords(null);
  removeShipFromBoard(currentCords);
  if (startCord === currentStartCord) {
    newPosition = togglePosition(position);
  } else {
    newPosition = position;
  }
  const isShipMoved = placeShip(ship, startCord, newPosition);
  if (isShipMoved === false) {
    ship.setCords(currentCords);
    unremoveShipFromBoard(currentCords, ship);
  }
  return isShipMoved;
};

export function getDiagonalCords(i) {
  const leftColumn = [10, 20, 30, 40, 50, 60, 70, 80];
  const rightColumn = [19, 29, 39, 49, 59, 69, 79, 89];

  switch (true) {
    case i === 0:
      return [i + 11];

    case i === 9:
      return [i + 9];

    case i === 90:
      return [i - 9];

    case i === 99:
      return [i - 11];

    case i > 0 && i < 9:
      return [i + 11, i + 9];

    case i > 90 && i < 99:
      return [i - 11, , i - 9];

    case leftColumn.includes(i):
      return [i - 9, , i + 11];

    case rightColumn.includes(i):
      return [i - 11, i + 9];

    default:
      return [i + 11, i - 11, i - 9, i + 9];
  }
}
