import { isShip } from "./helper";

const GameDom = () => {
  const renderBoard = (PlayerObject) => {
    const body = document.querySelector("body");
    const board = document.createElement("div");
    board.id = PlayerObject.player;
    board.classList.add("board");

    for (let i = 0; i < 100; i += 1) {
      const squareDiv = document.createElement("div");
      squareDiv.id = i + 1;
      squareDiv.classList.add("squareDiv");
      board.appendChild(squareDiv);
    }
    body.appendChild(board);
  };

  const showPlayerShips = (currentPlayer) => {
    const squareDivs = document.querySelectorAll(
      `#${currentPlayer.player} div`
    );
    currentPlayer.board.gameBoard.forEach((value, index) => {
      if (isShip(value)) {
        squareDivs[index].style.backgroundColor = "#839b97";
      }
    });
  };

  const setClickEvent = (opponent, getMove) => {
    const opponentBoard = document.querySelectorAll(`#${opponent.player} div`);
    opponentBoard.forEach((squareDiv) => {
      squareDiv.addEventListener("click", getMove);
    });
  };

  const toggleClick = (player, opponent) => {
    document.getElementById(player.player).style.pointerEvents = "none";
    document.getElementById(opponent.player).style.pointerEvents = "auto";
  };

  const disablePointerEvent = (opponent) => {
    const squareDivs = document.querySelectorAll(`#${opponent.player} div`);
    opponent.board.gameBoard.forEach((value, index) => {
      if (value === "h" || value === "water") {
        squareDivs[index].style.pointerEvents = "none";
      }
    });
  };

  const updateBoard = (opponent) => {
    const squareDivs = document.querySelectorAll(`#${opponent.player} div`);
    opponent.board.gameBoard.forEach((value, index) => {
      if (value === "h") {
        squareDivs[index].classList.add("ship");
        squareDivs[index].textContent = "h";
      } else if (value === "water") {
        squareDivs[index].classList.add("water");
        squareDivs[index].textContent = "w";
      }
    });
  };

  const disableAllPointerEvents = () => {
    const squares = document.querySelectorAll(".squareDiv");
    squares.forEach((square) => {
      square.style.pointerEvents = "none";
    });
  };

  return {
    disableAllPointerEvents,
    toggleClick,
    renderBoard,
    setClickEvent,
    disablePointerEvent,
    updateBoard,
    showPlayerShips,
  };
};

export default GameDom;
