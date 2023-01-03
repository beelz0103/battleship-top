import GameBoard from "./gameboard";
import Ship from "./ship";

const Player = (player) => {
  let turn;
  const hitCords = [];
  const board = GameBoard();

  if (player === "player") {
    turn = true;
    const carrier = board.allShips[0];
    const battleShip = board.allShips[1];
    const cruiser = board.allShips[2];
    const submarine = board.allShips[3];
    const destroyer = board.allShips[4];
    board.placeShip(carrier, 15, "horizontal");
    board.placeShip(battleShip, 55, "horizontal");
    board.placeShip(cruiser, 13, "vertical");
    board.placeShip(submarine, 72, "vertical");
    board.placeShip(destroyer, 85, "vertical");
  } else {
    turn = false;
    const carrier = board.allShips[0];
    const battleShip = board.allShips[1];
    const cruiser = board.allShips[2];
    const submarine = board.allShips[3];
    const destroyer = board.allShips[4];
    board.placeShip(carrier, 1, "vertical");
    board.placeShip(battleShip, 3, "vertical");
    board.placeShip(cruiser, 5, "vertical");
    board.placeShip(submarine, 7, "vertical");
    board.placeShip(destroyer, 9, "vertical");
  }

  const getTurn = () => turn;

  const changeTurn = () => {
    turn = !turn;
  };

  function getRandomInt(minimum, maximum) {
    const min = Math.ceil(minimum);
    const max = Math.floor(maximum);
    return Math.floor(Math.random() * (max - min) + min);
  }

  const possibleMove = [];
  for (let i = 1; i < 101; i++) {
    possibleMove.push(i);
  }

  function removeItemOnce(arr, value) {
    const index = arr.indexOf(value);
    if (index > -1) {
      arr.splice(index, 1);
    }
    return arr;
  }
  let numberOfTurns = 0;
  const getTruns = () => numberOfTurns;

  const attack = (opponent, cord = null) => {
    if (!board.allShipsDeployed()) {
      return;
    }
    if (player === "player") {
      const retVal = opponent.board.recieveAttack(cord);
      return retVal;
    }
    if (opponent.board.allSunk()) {
      return;
    }
    numberOfTurns += 1;
    cord = possibleMove[Math.floor(Math.random() * possibleMove.length)];
    const retVal = opponent.board.recieveAttack(cord);
    opponent.board.hitCords.forEach((value) => {
      removeItemOnce(possibleMove, value);
    });
    return retVal;
  };

  return { getTurn, changeTurn, attack, board, player, hitCords, getTruns };
};

export default Player;
