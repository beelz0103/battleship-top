import Player from "./player";
import GameBoard from "./gameboard";
import Ship from "./ship";

const Game = () => {
  const setUpGame = () => {
    const player = Player("player");
    const computer = Player("computer");
    GameDom().renderBoard(player);
    GameDom().renderBoard(computer);
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

  return { renderBoard };
};

export default Game;
