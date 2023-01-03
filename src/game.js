import Player from "./player";
import { isShip } from "./helper";
import GameDom from "./gamedom";
// import GameBoard from "./gameboard";
// import Ship from "./ship";
const gameDom = GameDom();

const Game = () => {
  let currentPlayer;
  let currentOpponent;

  const setUpGame = () => {
    currentPlayer = Player("player");
    currentOpponent = Player("computer");
    gameDom.renderBoard(currentPlayer);
    gameDom.renderBoard(currentOpponent);
    gameDom.setClickEvent(currentOpponent, getMove);
    gameDom.toggleClick(currentPlayer, currentOpponent);
  };

  const startGame = () => {
    setUpGame();
  };

  const changeTurn = () => {
    const temp = currentPlayer;
    currentPlayer = currentOpponent;
    currentOpponent = temp;
    if (currentPlayer.player !== "player") {
      playGame();
    }
    gameDom.toggleClick(currentPlayer, currentOpponent);
  };

  const getMove = (event) => {
    const cord = parseInt(event.target.id);
    playGame(cord);
  };

  const playGame = (cord = null) => {
    if (currentPlayer.player === "player") {
      playerLogic(cord);
    } else {
      computerLogic(cord);
    }
  };
  const concludeGame = () => {
    gameDom.disableAllPointerEvents();
    console.log("Game Over", currentPlayer, "WON");
  };

  const playerLogic = (cord) => {
    const hitTarget = currentPlayer.attack(currentOpponent, cord);
    gameDom.updateBoard(currentOpponent);
    gameDom.disablePointerEvent(currentOpponent);
    if (currentOpponent.board.getLose()) {
      concludeGame();
      return;
    }
    if (!isShip(hitTarget)) {
      changeTurn();
    }
  };

  const computerLogic = (cord) => {
    const hitTarget = currentPlayer.attack(currentOpponent, cord);
    gameDom.updateBoard(currentOpponent);
    if (winner() === currentPlayer) {
      console.log(currentPlayer, "WONNNNNNNN");
      return;
    }
    if (!isShip(hitTarget)) {
      changeTurn();
    } else {
      playGame();
    }
  };

  const gameOver = () => {
    if (currentOpponent.board.allSunk()) {
      return true;
    }
    return false;
  };

  const winner = () => {
    if (gameOver()) {
      return currentPlayer;
    }
  };

  return { setUpGame, startGame };
};

export default Game;
