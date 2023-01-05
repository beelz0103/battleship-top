import { isShip } from "./helper";

const GameDom = () => {
  const createDiv = (id, className) => {
    const div = document.createElement("div");
    div.classList.add(className);
    div.setAttribute("id", id);
    return div;
  };

  const populateBoard = (board) => {
    for (let i = 0; i < 100; i += 1) {
      const squareDiv = document.createElement("div");
      squareDiv.id = i + 1;
      squareDiv.classList.add("squareDiv");
      board.appendChild(squareDiv);
    }
  };

  const renderBoard = (Player) => {
    const { player } = Player;
    const mainContainer = document.querySelector(".board-container");
    const subContainer = createDiv(`${player}-sub-container`, "sub-container");
    const board = createDiv(player, "board");
    const shipContainer = createDiv(`${player}-ships`, "board");
    populateBoard(board);
    subContainer.appendChild(board);
    subContainer.appendChild(shipContainer);
    mainContainer.appendChild(subContainer);
  };

  const changeBgColor = (target, color) => {
    target.style.backgroundColor = color;
  };

  const showPlayerShips = (Player) => {
    const gridCells = document.querySelectorAll(`#${Player.player} div`);
    const placeCord = (cord) => changeBgColor(gridCells[cord - 1], "#839b97");
    const placeShip = (ship) => ship.getCords().forEach(placeCord);
    Player.board.allShips.forEach(placeShip);
  };

  const addAttackListeners = (opponent, getMove) => {
    const board = document.querySelectorAll(`#${opponent.player} div`);
    board.forEach((cell) => cell.addEventListener("click", getMove));
  };

  const toggleClick = (player, opponent) => {
    document.getElementById(player.player).style.pointerEvents = "none";
    document.getElementById(opponent.player).style.pointerEvents = "auto";
  };

  const disableHitCell = (opponent) => {
    if (opponent.player === "player") return;
    const gridCells = document.querySelectorAll(`#${opponent.player} div`);
    opponent.board.gameBoard.forEach((value, index) => {
      if (value === "h" || value === "water") {
        gridCells[index].style.pointerEvents = "none";
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

  const disablePointerEvent = (cell) => {
    cell.style.pointerEvents = "none";
  };

  const disableAllPointerEvents = () => {
    const gridCells = document.querySelectorAll(".squareDiv");
    gridCells.forEach(disablePointerEvent);
  };

  const Narrator = (message) => {
    const narrator = document.querySelector(".narrator");
    narrator.textContent = message;
  };

  const addMoveListeners = (Player, moveShip) => {
    const board = document.querySelectorAll(`#${Player.player} div`);
    board.forEach((cell) => cell.addEventListener("click", moveShip));
  };

  const removeMoveListeners = (Player, moveShip) => {
    const board = document.querySelectorAll(`#${Player.player} div`);
    board.forEach((cell) => cell.removeEventListener("click", moveShip));
  };

  const enableStartButton = (startGame) => {
    const startButton = document.querySelector("#startGame");
    startButton.addEventListener("click", startGame);
  };

  const disableStartButton = (startGame) => {
    const startButton = document.querySelector("#startGame");
    startButton.removeEventListener("click", startGame);
  };

  const enableRestartButton = (restartGame) => {
    const restartButton = document.querySelector("#restartGame");
    restartButton.addEventListener("click", restartGame);
  };

  const disableRestartButton = (restartGame) => {
    const restartButton = document.querySelector("#restartGame");
    restartButton.removeEventListener("click", restartGame);
  };

  const unRenderBoards = () => {
    const mainContainer = document.querySelector(".board-container");
    mainContainer.textContent = "";
  };

  return {
    Narrator,
    disableAllPointerEvents,
    toggleClick,
    renderBoard,
    addAttackListeners,
    disableHitCell,
    updateBoard,
    showPlayerShips,
    addMoveListeners,
    removeMoveListeners,
    enableStartButton,
    disableStartButton,
    enableRestartButton,
    disableRestartButton,
    unRenderBoards,
  };
};

export default GameDom;
