import GameBoard from "./gameboard";
import Ship from "./ship";

const Player = (player) => {
  let turn;
  const hitCords = [];
  const board = GameBoard();
  const carrier = Ship("CV");
  const battleShip = Ship("BB");
  const cruiser = Ship("CA");
  const submarine = Ship("SS");
  const destroyer = Ship("DD");
  const allShips = [carrier, battleShip, cruiser, submarine, destroyer];

  if (player === "player") {
    turn = true;
    board.placeShip(carrier, 1, "horizontal");
    board.placeShip(battleShip, 10, "vertical");
    board.placeShip(cruiser, 23, "horizontal");
    board.placeShip(submarine, 44, "vertical");
    board.placeShip(destroyer, 95, "horizontal");
  } else {
    turn = false;
    board.placeShip(carrier, 4, "vertical");
    board.placeShip(battleShip, 35, "horizontal");
    board.placeShip(cruiser, 21, "vertical");
    board.placeShip(submarine, 56, "horizontal");
    board.placeShip(destroyer, 55, "vertical");
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
      opponent.board.recieveAttack(opponent.allShips, cord);
      hitCords.push(cord);
    } else {
      const cord = getRandomInt(1, 101);
      if (hitCords.includes(cord)) {
        attack(opponent, null);
      } else {
        opponent.board.recieveAttack(opponent.allShips, cord);
        hitCords.push(cord);
      }
    }
  };

  return { getTurn, changeTurn, attack, allShips, board, player };
};

export default Player;
