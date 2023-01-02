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
    board.placeShip(carrier, 1, "vertical");
    board.placeShip(battleShip, 3, "vertical");
    board.placeShip(cruiser, 5, "vertical");
    board.placeShip(submarine, 7, "vertical");
    board.placeShip(destroyer, 9, "vertical");
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

  const attack = (opponent, cord = null) => {
    if (player === "player") {
      opponent.board.recieveAttack(cord);
      hitCords.push(cord);
    } else {
      const cord = getRandomInt(1, 101);
      if (hitCords.includes(cord)) {
        attack(opponent, null);
      } else {
        opponent.board.recieveAttack(cord);
        hitCords.push(cord);
      }
    }
  };

  return { getTurn, changeTurn, attack, board, player };
};

export default Player;
