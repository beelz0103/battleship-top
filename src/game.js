import Player from "./player";
import GameBoard from "./gameboard";
import Ship from "./ship";
import {
  circumIndicesHelper,
  lastDigit,
  roundUpNearest10,
  isShip,
  increment,
} from "./helper";

const Game = () => {
  let currentPlayer;
  let currentOpponent;

  const setUpGame = () => {
    currentPlayer = Player("player");
    currentOpponent = Player("computer");
    renderBoard(currentPlayer);
    renderBoard(currentOpponent);
  };

  const gameOver = () => {
    if (currentOpponent.board.allSunk()) {
      return true;
    }
    return false;
  };

  const startGame = () => {
    setUpGame();
    setClickEvent();
    toggleClick(currentPlayer, currentOpponent);
  };

  const setClickEvent = () => {
    const opponentDiv = document.querySelectorAll(
      `#${currentOpponent.player} div`
    );
    opponentDiv.forEach((squareDiv) => {
      squareDiv.addEventListener("click", getMove, { once: true });
    });
  };

  const changeTurn = () => {
    const temp = currentPlayer;
    currentPlayer = currentOpponent;
    currentOpponent = temp;
    console.log("change turn", currentPlayer);
    if (currentPlayer.player !== "player") {
      playGame();
    }
    toggleClick();
  };

  const updateBoard = (player) => {
    const squareDivs = document.querySelectorAll(`#${player.player} div`);
    player.board.gameBoard.forEach((value, index) => {
      if (value === "h") {
        squareDivs[index].textContent = "h";
      }
    });
  };

  const disablePointerEvent = () => {
    const squareDivs = document.querySelectorAll(
      `#${currentOpponent.player} div`
    );
    currentOpponent.board.gameBoard.forEach((value, index) => {
      if (value === "h") {
        squareDivs[index].style.pointerEvents = "none";
      }
    });
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

  const playerLogic = (cord) => {
    const hitTarget = currentPlayer.attack(currentOpponent, cord);
    updateBoard(currentOpponent);
    disablePointerEvent();
    if (winner() === currentPlayer) {
      console.log(currentPlayer, "WONN");
      return;
    }
    if (!isShip(hitTarget)) {
      changeTurn();
    }
  };

  const computerLogic = (cord) => {
    const hitTarget = currentPlayer.attack(currentOpponent, cord);
    updateBoard(currentOpponent);
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

  const getMove2 = (event) => {
    let cordValue;
    if (currentPlayer.player === "player") {
      const cord = parseInt(event.target.id);
      cordValue = currentPlayer.attack(currentOpponent, cord);
    } else {
      cordValue = currentPlayer.attack(currentOpponent);
    }
    updateBoard(currentOpponent);
    if (winner() === currentPlayer) {
      console.log(currentPlayer, "won");
    }

    if (!currentOpponent.board.isShip(cordValue.type)) {
      changeTurn();
    }
  };

  const computerLoop = () => {
    while (currentPlayer.player === "computer") {
      getMove();
    }
    console.log("computer played");
  };

  const winner = () => {
    if (gameOver()) {
      return currentPlayer;
    }
  };

  const renderBoard = (PlayerObject) => {
    const body = document.querySelector("body");
    const board = document.createElement("div");
    board.id = PlayerObject.player;
    board.classList.add("board");

    for (let i = 0; i < 100; i += 1) {
      const squareDiv = document.createElement("div");
      squareDiv.id = i + 1;
      squareDiv.classList.add("squareDiv");
      // squareDiv.textContent = PlayerObject.board.gameBoard[i];
      board.appendChild(squareDiv);
    }
    body.appendChild(board);
  };

  const toggleClick = (player = currentPlayer, opponent = currentOpponent) => {
    document.getElementById(player.player).style.pointerEvents = "none";
    document.getElementById(opponent.player).style.pointerEvents = "auto";
  };

  const printArray = (array) => {
    let i = 1;
    let k = 0;
    while (i < 11) {
      let str = "";
      for (let j = k; j < i * 10; j++) {
        str += ` ${array[j]} `;
      }
      console.log(str);
      k += 10;
      i++;
    }
  };
  const board = player.board.gameBoard;
  return { setUpGame, startGame };
};

export default Game;
