import GameBoard from "./gameboard";
import { getRandom, removeItemOnce, possibleMoves } from "./helper";

const Player = (player) => {
  const hitCords = [];
  const possibleMove = possibleMoves();
  const board = GameBoard();
  board.placeShipsRandomly();

  const playerAttacks = (opponent, cord) => {
    const hitCord = opponent.board.recieveAttack(cord);
    return hitCord;
  };

  const computerAttacks = (opponent) => {
    const cord = getRandom(possibleMove);
    const hitCord = opponent.board.recieveAttack(cord);
    opponent.board.hitCords.forEach((value) => {
      removeItemOnce(possibleMove, value);
    });
    return hitCord;
  };

  const attack = (opponent, cord = null) => {
    let hitCord;
    if (player === "player") {
      hitCord = playerAttacks(opponent, cord);
    } else {
      hitCord = computerAttacks(opponent);
    }
    return hitCord;
  };

  return { attack, board, player, hitCords };
};

export default Player;
