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
    gameDom.showPlayerShips(currentPlayer);
    gameDom.renderBoard(currentOpponent);
    gameDom.setClickEvent(currentOpponent, getMove);
    // gameDom.toggleClick(currentPlayer, currentOpponent);
    setClickEvent2(currentPlayer, moveShip);
  };

  const setClickEvent2 = (player, moveShip) => {
    const squareDivs = document.querySelectorAll(`#${player.player} div`);
    player.board.gameBoard.forEach((value, index) => {
      // if (isShip(value)) {
      squareDivs[index].addEventListener("click", moveShip);
      // squareDivs[index].textContent = value;
      // squareDivs[index].style.backgroundColor = "#839b97";
      // }
    });
  };

  const removeClickEvent2 = (player, moveShip) => {
    const squareDivs = document.querySelectorAll(`#${player.player} div`);
    player.board.gameBoard.forEach((value, index) => {
      squareDivs[index].removeEventListener("click", moveShip);
    });
  };

  const moveFune = (shipType) => {
    const revertStateArray = [];
    const sqDivs = document.querySelectorAll(`#player div`);
    const ship = currentPlayer.board.getShipFromSymbol(shipType);
    const shipIndex = ship.getCords().map((value) => value - 1);
    let position;
    console.log(shipIndex);
    if (shipIndex[1] - shipIndex[0] === 1) {
      position = "horizontal";
    } else if (shipIndex[1] - shipIndex[0] === 10) {
      position = "vertical";
    }
    shipIndex.forEach((value, index) => {
      if (index === 0) {
        sqDivs[value].textContent = "🗘";
        revertStateArray.push(value);
      }
      sqDivs[value].style.backgroundColor = "#9f5f80";
      revertStateArray.push(value);
    });
    const blah = (e) => {
      currentPlayer.board.moveShip(ship, parseInt(e.target.id), position);
      sqDivs.forEach((value) => {
        value.removeEventListener("click", blah);
      });
      revertStateArray.forEach((value) => {
        sqDivs[value].textContent = "";
        sqDivs[value].style.backgroundColor = "";
      });
      setClickEvent2(currentPlayer, moveShip);

      gameDom.showPlayerShips(currentPlayer);
    };

    sqDivs.forEach((value) => {
      value.addEventListener("click", blah);
    });
  };

  const moveShipHelper = (cord) => {
    removeClickEvent2(currentPlayer, moveShip);
    const shipType = currentPlayer.board.gameBoard[cord - 1];
    if (isShip(shipType)) {
      moveFune(shipType);
    } else {
      console.log("this was not a ship");
      setClickEvent2(currentPlayer, moveShip);
    }
  };

  const moveShip = (e) => {
    moveShipHelper(parseInt(e.target.id));
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
