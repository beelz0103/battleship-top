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
    removeRelocateListeners();
  };

  const resetBoardOnStart = () => {
    if (ship) {
      gridCells[shipIndex[0]].textContent = "";
      removeRelocateListeners();
    }
  };

  const moveCurrentPlayerShip = (cord) => {
    const position = ship.getPosition();
    currentPlayer.board.moveShip(ship, cord, position);
  };

  const placeShipAtCell = (e) => {
    moveCurrentPlayerShip(parseInt(e.target.id));
    updateAfterShipMove();
  };

  const moveShip = () => {
    higlightSelectedShip();
    addRelocateListeners();
  };

  const updateAfterShipMove = () => {
    revertBoardState();
    gameDom.addMoveListeners(currentPlayer, selectShipForMovement);
    gameDom.showPlayerShips(currentPlayer);
  };

  const unhighlightPossibleCells = (e) => {
    gridCells.forEach((val) => {
      if (val.style.backgroundColor === "rgb(141, 181, 150)") {
        gameDom.changeBgColor(val, "");
      }
      val.classList.remove("highlight");
    });
    ship
      .getCords()
      .forEach((val) => gameDom.changeBgColor(gridCells[val - 1], "#9f5f80"));
  };

  const highlightPossibleCells = (e) => {
    const position = ship.getPosition();
    const canMove = currentPlayer.board.canMoveShip(
      ship,
      parseInt(e.target.id, 10),
      position
    );
    if (parseInt(e.target.id, 10) === ship.getCords()[0]) {
      if (canMove) {
        const shipCords = ship.getCords();
        const highlightCords = [];
        highlightCords.push(parseInt(e.target.id, 10));
        const dif = shipCords[1] - shipCords[0];
        let diff;
        if (dif === 1) diff = 10;
        else diff = 1;
        const { length } = shipCords;

        for (let i = 0; i < length - 1; i++) {
          highlightCords.push(highlightCords.at(-1) + diff);
        }

        highlightCords.forEach((cord) => {
          gameDom.changeBgColor(gridCells[cord - 1], "#8db596");
        });
      }
    } else {
      e.target.classList.add("highlight");
      if (canMove) {
        const shipCords = ship.getCords();
        const highlightCords = [];
        highlightCords.push(parseInt(e.target.id, 10));
        const diff = shipCords[1] - shipCords[0];
        const { length } = shipCords;

        for (let i = 0; i < length - 1; i++) {
          highlightCords.push(highlightCords.at(-1) + diff);
        }

        highlightCords.forEach((cord) => {
          gameDom.changeBgColor(gridCells[cord - 1], "#8db596");
        });
      }
    }
  };

  const addRelocateListeners = () => {
    gridCells.forEach((cell) => {
      cell.addEventListener("click", placeShipAtCell);
      cell.addEventListener("mouseover", highlightPossibleCells);
      cell.addEventListener("mouseout", unhighlightPossibleCells);
    });
  };

  const removeRelocateListeners = () => {
    gridCells.forEach((cell) => {
      cell.removeEventListener("click", placeShipAtCell);
      cell.removeEventListener("mouseover", highlightPossibleCells);
      cell.removeEventListener("mouseout", unhighlightPossibleCells);
    });
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

  return {
    selectShipForMovement,
    removeRelocateListeners,
    resetBoardOnStart,
    initiate,
  };
};

export default MoveShip;
