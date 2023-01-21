import { createDot, createX } from "./helper";

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
    const displayPlayer = createDiv(`${player}-name`, "displayPlayer");
    displayPlayer.textContent = `${Player.player} board`;
    populateBoard(board);
    subContainer.appendChild(board);
    subContainer.appendChild(displayPlayer);
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
    gridCells.forEach((cell) => {
      if (cell.classList[1] === "water" || cell.classList[1] === "ship") {
        disablePointerEvent(cell);
      }
    });
  };

  const updateBoard = (opponent) => {
    const gridCells = document.querySelectorAll(`#${opponent.player} div`);
    opponent.board.gameBoard.forEach((value, index) => {
      if (value === "h") {
        gridCells[index].classList.add("ship");
        gridCells[index].textContent = "";
        gridCells[index].appendChild(createX());
        changeBgColor(gridCells[index], "");
      } else if (value === "water") {
        gridCells[index].classList.add("water");
        gridCells[index].textContent = "";
        gridCells[index].appendChild(createDot());
      }
    });
  };

  const dimBoard = (Player, Opponent) => {
    const playerBoard = document.getElementById(Player.player);
    const opponentBoard = document.getElementById(Opponent.player);
    playerBoard.classList.add("dimBoard");
    opponentBoard.classList.remove("dimBoard");
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
    disableRestartButton(restartGame);
    const startButton = document.querySelector("#startGame");
    startButton.disabled = false;
    startButton.addEventListener("click", startGame);
  };

  const disableStartButton = (startGame) => {
    const startButton = document.querySelector("#startGame");
    startButton.disabled = true;
    startButton.removeEventListener("click", startGame);
  };

  const enableRestartButton = (restartGame) => {
    const restartButton = document.querySelector("#restartGame");
    restartButton.disabled = false;
    restartButton.addEventListener("click", restartGame);
  };

  const disableRestartButton = (restartGame) => {
    const restartButton = document.querySelector("#restartGame");
    restartButton.disabled = true;
    restartButton.removeEventListener("click", restartGame);
  };

  const enableEvent = (target, f) => {
    target.addEventListener("click", f);
  };

  const disableEvent = (target, f) => {
    target.removeEventListener("click", f);
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
    dimBoard,
    showPlayerShips,
    addMoveListeners,
    removeMoveListeners,
    enableStartButton,
    disableStartButton,
    enableRestartButton,
    disableRestartButton,
    unRenderBoards,
    changeBgColor,
    enableEvent,
    disableEvent,
  };
};

export default GameDom;
