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
