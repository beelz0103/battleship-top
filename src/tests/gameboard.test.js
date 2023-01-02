import GameBoard from "../gameboard";
import Ship from "../ship";

test("place ship horizontally at top-left of the board", () => {
  const board = GameBoard();
  const carrier = board.allShips[0];
  expect(board.placeShip(carrier, 1, "horizontal")).toEqual(true);
});

test("place ship vertically at top-right of the board", () => {
  const board = GameBoard();
  const battleShip = board.allShips[1];
  expect(board.placeShip(battleShip, 10, "vertical")).toEqual(true);
});

test("ship can't be placed outside the board 1", () => {
  const board = GameBoard();
  const carrier = Ship("CV");
  expect(board.placeShip(carrier, 10, "horizontal")).toBe("failed");
});

test("ship can't be placed outside the board 2", () => {
  const board = GameBoard();
  const battleShip = Ship("BB");
  expect(board.placeShip(battleShip, 71, "vertical")).toBe("failed");
});

test("ship can't be placed outside the board 2", () => {
  const board = GameBoard();
  const battleShip = Ship("BB");
  expect(board.placeShip(battleShip, 67, "horizontal")).not.toBe("failed");
});

test("doesnt allow overlap of two ships", () => {
  const board = GameBoard();
  const carrier = Ship("CV");
  const battleShip = Ship("BB");
  board.placeShip(battleShip, 1, "vertical");
  expect(board.placeShip(carrier, 1, "vertical")).toBe("failed");
});

test("doesnt allow overlap of two ships", () => {
  const board = GameBoard();
  const carrier = Ship("CV");
  const battleShip = Ship("BB");
  board.placeShip(battleShip, 1, "vertical");
  expect(board.placeShip(carrier, 21, "horizontal")).toBe("failed");
});

test("doesnt allow ships to be placed right next to each other", () => {
  const board = GameBoard();
  const carrier = Ship("CV");
  const battleShip = Ship("BB");
  board.placeShip(battleShip, 55, "vertical");
  expect(board.placeShip(carrier, 66, "horizontal")).toBe("failed");
});

test("doesnt allow ships to be placed right next to each other", () => {
  const board = GameBoard();
  const carrier = Ship("CV");
  const battleShip = Ship("BB");
  board.placeShip(battleShip, 35, "horizontal");
  expect(board.placeShip(carrier, 45, "horizontal")).toBe("failed");
});

test("hit a ship", () => {
  const board = GameBoard();
  const carrier = board.allShips[0];
  const battleShip = board.allShips[1];
  board.placeShip(battleShip, 1, "vertical");
  board.placeShip(carrier, 3, "vertical");
  expect(board.recieveAttack(1)).toBe(battleShip);
});

test("hit a ship", () => {
  const board = GameBoard();
  const carrier = board.allShips[0];
  const battleShip = board.allShips[1];
  board.placeShip(battleShip, 1, "vertical");
  board.placeShip(carrier, 3, "vertical");
  expect(board.recieveAttack(13)).toBe(carrier);
});

test("miss ship", () => {
  const board = GameBoard();
  const carrier = board.allShips[0];
  const battleShip = board.allShips[1];
  board.placeShip(battleShip, 1, "vertical");
  board.placeShip(carrier, 3, "vertical");
  expect(board.recieveAttack(2)).toBe("hit");
});

test("miss ship", () => {
  const board = GameBoard();
  const carrier = board.allShips[0];
  const battleShip = board.allShips[1];
  board.placeShip(battleShip, 1, "vertical");
  board.placeShip(carrier, 3, "vertical");
  expect(board.recieveAttack(100)).toBe("hit");
});

test("hit same cord twice", () => {
  const board = GameBoard();
  const carrier = board.allShips[0];
  const battleShip = board.allShips[1];
  board.placeShip(battleShip, 1, "vertical");
  board.placeShip(carrier, 3, "vertical");
  board.recieveAttack(1);
  expect(board.recieveAttack(1)).toBe("hit");
});

test("hit same cord twice", () => {
  const board = GameBoard();
  const carrier = board.allShips[0];
  const battleShip = board.allShips[1];
  board.placeShip(battleShip, 1, "vertical");
  board.placeShip(carrier, 3, "vertical");
  board.recieveAttack(100);
  expect(board.recieveAttack(100)).toBe("hit");
});

test("all ships deployed", () => {
  const board = GameBoard();
  const carrier = board.allShips[0];
  const battleShip = board.allShips[1];
  const cruiser = board.allShips[2];
  const submarine = board.allShips[3];
  const destroyer = board.allShips[4];
  board.placeShip(carrier, 1, "vertical");
  board.placeShip(battleShip, 2, "vertical");
  board.placeShip(cruiser, 3, "vertical");
  board.placeShip(submarine, 4, "vertical");
  board.placeShip(destroyer, 5, "vertical");
  expect(board.allShipsDeployed()).toBe(false);
});

test("all ships not sunk", () => {
  const board = GameBoard();
  const carrier = board.allShips[0];
  const battleShip = board.allShips[1];
  const cruiser = board.allShips[2];
  const submarine = board.allShips[3];
  const destroyer = board.allShips[4];
  board.placeShip(carrier, 1, "vertical");
  board.placeShip(battleShip, 3, "vertical");
  board.placeShip(cruiser, 5, "vertical");
  board.placeShip(submarine, 7, "vertical");
  board.placeShip(destroyer, 9, "vertical");
  expect(board.allSunk()).toBe(false);
});

test("all ships sunk", () => {
  const board = GameBoard();
  const carrier = board.allShips[0];
  const battleShip = board.allShips[1];
  const cruiser = board.allShips[2];
  const submarine = board.allShips[3];
  const destroyer = board.allShips[4];
  board.placeShip(carrier, 51, "vertical");
  board.placeShip(battleShip, 53, "vertical");
  board.placeShip(cruiser, 75, "vertical");
  board.placeShip(submarine, 77, "vertical");
  board.placeShip(destroyer, 79, "vertical");

  for (let i = 0; i < 100; i += 1) {
    board.recieveAttack(i);
  }
  expect(board.allSunk()).toBe(true);
});

test("checks if circumference function wraps properly", () => {
  const board = GameBoard();
  const carrier = board.allShips[0];
  board.placeShip(carrier, 60, "vertical");
  expect(board.checkCircumference(60)).toBe(false);
});

test("checks if hitDiagonal function wraps properly", () => {
  const board = GameBoard();
  expect(board.hitDiagonal(51)).toEqual([42, 62]);
});

test("checks if hitDiagonal function wraps properly", () => {
  const board = GameBoard();
  expect(board.hitDiagonal(99)).toEqual([88, 90]);
});

test("hit ships adjacent", () => {
  const board = GameBoard();
  const carrier = board.allShips[0];
  board.placeShip(carrier, 60, "vertical");
  board.recieveAttack(60);
  board.recieveAttack(80);
  board.recieveAttack(90);
  board.recieveAttack(100);
  board.recieveAttack(70);
  expect(board.hitShipAdjacent(carrier)).toEqual([50]);
});

test("hit ships adjacent", () => {
  const board = GameBoard();
  const carrier = board.allShips[0];
  board.placeShip(carrier, 75, "horizontal");
  board.recieveAttack(76);
  board.recieveAttack(77);
  board.recieveAttack(78);
  board.recieveAttack(79);
  board.recieveAttack(75);
  expect(board.hitShipAdjacent(carrier)).toEqual([74, 80]);
});
