import Player from "./player";
import GameBoard from "./gameboard";
import Ship from "./ship";

const Game = () => {
  let currentPlayer;
  let currentOpponent;

  const setUpGame = () => {
    currentPlayer = Player("player");
    currentOpponent = Player("computer");
    GameDom().renderBoard(currentPlayer);
    GameDom().renderBoard(currentOpponent);
  };

  const gameOver = () => {
    if (currentOpponent.board.allSunk()) {
      return true;
    }
    return false;
  };

  const changeTurn = () => {
    const temp = currentPlayer;
    currentPlayer = currentOpponent;
    currentOpponent = temp;
  };

  const winner = () => {
    if (gameOver()) {
      return currentPlayer;
    }
  };

  return { setUpGame };
};

const GameDom = () => {
  const renderBoard = (PlayerObject) => {
    const board = document.createElement("div");
    board.id = PlayerObject.player;
    board.classList.add("board");

    for (let i = 0; i < 100; i += 1) {
      const squareDiv = document.createElement("div");
      squareDiv.id = i + 1;
      squareDiv.classList.add("squareDiv");

      squareDiv.textContent = PlayerObject.board.gameBoard[i];
      board.appendChild(squareDiv);
    }
    const body = document.querySelector("body");
    body.appendChild(board);
  };

  const toggleClick = (player, opponent) => {
    document.getElementById(player.player).style.pointerEvents = "none";
    document.getElementById(opponent.player).style.pointerEvents = "auto";
  };

  const getMove = () => {};

  return { renderBoard, toggleClick };
};

export default Game;
