const MoveShip = (gameDom) => {
  let currentPlayer;
  let gridCells;
  let ship;
  let shipIndex;

  const initiate = (Player) => {
    currentPlayer = Player;
    gridCells = document.querySelectorAll(`#player div`);
  };

  const getShipIndex = () => ship.getCords().map((value) => value - 1);

  const higlightSelectedShip = () => {
    gridCells[shipIndex[0]].textContent = "🗘";
    shipIndex.forEach((i) => gameDom.changeBgColor(gridCells[i], "#9f5f80"));
  };

  const revertBoardState = () => {
    gridCells[shipIndex[0]].textContent = "";
    shipIndex.forEach((i) => gameDom.changeBgColor(gridCells[i], ""));
  };

  const moveCurrentPlayerShip = (cord) => {
    const position = ship.getPosition();
    currentPlayer.board.moveShip(ship, cord, position);
  };

  const placeShipAtCell = (e) => {
    moveCurrentPlayerShip(parseInt(e.target.id));
    revertBoardState();
    updateAfterShipMove();
  };

  const moveShip = () => {
    higlightSelectedShip();
    addRelocateListeners();
  };

  const updateAfterShipMove = () => {
    revertBoardState();
    removeRelocateListeners();
    gameDom.addMoveListeners(currentPlayer, selectShipForMovement);
    gameDom.showPlayerShips(currentPlayer);
  };

  const addRelocateListeners = () => {
    gridCells.forEach((cell) =>
      cell.addEventListener("click", placeShipAtCell)
    );
  };

  const removeRelocateListeners = () => {
    gridCells.forEach((cell) =>
      cell.removeEventListener("click", placeShipAtCell)
    );
  };

  const getShipAtCord = (cord) => {
    const { allShips } = currentPlayer.board;
    return allShips.find((ship) => ship.getCords().includes(cord));
  };

  const moveIfDefined = () => {
    if (ship) {
      shipIndex = getShipIndex();
      gameDom.removeMoveListeners(currentPlayer, selectShipForMovement);
      moveShip(ship);
    }
  };

  const moveSelectedShip = (cord) => {
    ship = getShipAtCord(cord);
    moveIfDefined();
  };

  const selectShipForMovement = (e) => {
    const cord = parseInt(e.target.id, 10);
    moveSelectedShip(cord);
  };

  return { selectShipForMovement, initiate };
};

export default MoveShip;
