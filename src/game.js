import Player from "./player";
import { isShip } from "./helper";
import GameDom from "./gamedom";

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
    gameDom.addMoveListeners(currentPlayer, moveShip);
  };

  const startGame = () => {
    gameDom.Narrator(`${currentPlayer.player}'s move`);
    gameDom.addAttackListeners(currentOpponent, getMove);
    gameDom.removeMoveListeners(currentPlayer, moveShip);
    gameDom.disableStartButton(startGame);
  };

  const play = () => {
    setUpGame();
    gameDom.Narrator("Move/Rotate Ships");
    gameDom.enableStartButton(startGame);
  };

  const moveFune = (shipType) => {
    const revertStateArray = [];
    const sqDivs = document.querySelectorAll(`#player div`);
    const ship = currentPlayer.board.allShips.find(
      (shp) => shp.type === shipType
    );
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
      gameDom.addMoveListeners(currentPlayer, moveShip);

      gameDom.showPlayerShips(currentPlayer);
    };

    sqDivs.forEach((value) => {
      value.addEventListener("click", blah);
    });
  };

  const moveShipHelper = (cord) => {
    gameDom.removeMoveListeners(currentPlayer, moveShip);
    const shipType = currentPlayer.board.gameBoard[cord - 1];
    if (isShip(shipType)) {
      moveFune(shipType);
    } else {
      console.log("this was not a ship");
      gameDom.addMoveListeners(currentPlayer, moveShip);
    }
  };

  const moveShip = (e) => {
    moveShipHelper(parseInt(e.target.id));
  };

  const runGameLoop = (cord = null) => {
    if (currentPlayer.player === "player") {
      executePlayerAttack(cord);
    } else {
      executeComputerAttack(cord);
    }
  };

  const toggleTurn = () => {
    const temp = currentPlayer;
    currentPlayer = currentOpponent;
    currentOpponent = temp;
    gameDom.Narrator(`${currentPlayer.player}'s move`);
  };

  const turnManager = () => {
    if (currentPlayer.player !== "player") {
      runGameLoop();
    } else {
      gameDom.toggleClick(currentPlayer, currentOpponent);
    }
  };

  const advanceGame = (hitTarget) => {
    if (!isShip(hitTarget)) toggleTurn();
    turnManager();
  };

  const getMove = (event) => {
    const cord = parseInt(event.target.id, 10);
    runGameLoop(cord);
  };

  const concludeGame = () => {
    if (currentOpponent.board.getLose()) {
      gameDom.Narrator(`${currentPlayer.player}'s won`);
      gameDom.disableAllPointerEvents();
      gameDom.enableRestartButton(restartGame);
    }
  };

  const updateGameState = () => {
    gameDom.updateBoard(currentOpponent);
    gameDom.disableHitCell(currentOpponent);
    concludeGame();
  };

  const executePlayerAttack = (cord) => {
    const hitTarget = currentPlayer.attack(currentOpponent, cord);
    updateGameState();
    advanceGame(hitTarget);
  };

  const executeComputerAttack = (cord = null) => {
    const hitTarget = currentPlayer.attack(currentOpponent, cord);
    updateGameState();
    advanceGame(hitTarget);
  };

  const restartGame = () => {
    currentPlayer = null;
    currentOpponent = null;
    gameDom.unRenderBoards();
    play();
    gameDom.disableRestartButton(restartGame);
  };

  return { setUpGame, play };
};

export default Game;
