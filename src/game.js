import Player from "./player";
import { isShip } from "./helper";
import GameDom from "./gamedom";
import MoveShip from "./gamedom_moveship";

const gameDom = GameDom();
const moveShip = MoveShip(gameDom);

const Game = () => {
  let currentPlayer;
  let currentOpponent;
  let isOver;

  const enableShipMovement = () => {
    moveShip.initiate(currentPlayer);
    gameDom.addMoveListeners(currentPlayer, moveShip.selectShipForMovement);
  };

  const disableShipMovement = () => {
    gameDom.removeMoveListeners(currentPlayer, moveShip.selectShipForMovement);
  };

  const enableAttack = () => {
    gameDom.addAttackListeners(currentOpponent, getMove);
  };

  const renderBoards = () => {
    gameDom.renderBoard(currentPlayer);
    gameDom.showPlayerShips(currentPlayer);
    gameDom.renderBoard(currentOpponent);
  };

  const setUpGame = () => {
    currentPlayer = Player("player");
    currentOpponent = Player("computer");
    renderBoards();
    enableShipMovement();
  };

  const startGame = () => {
    gameDom.Narrator(`${currentPlayer.player}'s move`);
    enableAttack();
    disableShipMovement();
    gameDom.disableStartButton(startGame);
  };

  const play = () => {
    setUpGame();
    gameDom.Narrator("Move/Rotate Ships");
    gameDom.enableStartButton(startGame);
  };

  const runGameLoop = (cord = null) => {
    if (currentPlayer.player === "player") {
      executePlayerAttack(cord);
    } else {
      setTimeout(executeComputerAttack, 50);
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
    isOver = true;
    gameDom.Narrator(`${currentPlayer.player}'s won`);
    gameDom.disableAllPointerEvents();
    gameDom.enableRestartButton(restartGame);
  };

  const gameOver = () => {
    if (currentOpponent.board.getLose()) concludeGame();
  };

  const updateGameState = () => {
    gameDom.updateBoard(currentOpponent);
    gameDom.disableHitCell(currentOpponent);
    gameOver();
  };

  const executePlayerAttack = (cord) => {
    const hitTarget = currentPlayer.attack(currentOpponent, cord);
    updateGameState();
    if (!isOver) advanceGame(hitTarget);
  };

  const executeComputerAttack = (cord = null) => {
    const hitTarget = currentPlayer.attack(currentOpponent, cord);
    updateGameState();
    if (!isOver) advanceGame(hitTarget);
  };

  const resetBoardState = () => {
    currentPlayer = null;
    currentOpponent = null;
    isOver = null;
    gameDom.unRenderBoards();
  };

  const restartGame = () => {
    resetBoardState();
    play();
    gameDom.disableRestartButton(restartGame);
  };

  return { setUpGame, play };
};

export default Game;
