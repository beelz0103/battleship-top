import GameBoard from "../gameboard";
import Ship from "../ship";

test("place ship horizontally at top-left of the board", () => {
  const board = GameBoard();
  const carrier = Ship("CV");
  expect(board.placeShip(carrier, 1, "horizontal")).toEqual([
    "CV1",
    "CV2",
    "CV3",
    "CV4",
    "CV5",
  ]);
});

test("place ship vertically at top-right of the board", () => {
  const board = GameBoard();
  const battleShip = Ship("BB");
  expect(board.placeShip(battleShip, 10, "vertical")).toEqual([
    "BB10",
    "BB20",
    "BB30",
    "BB40",
  ]);
});

test("ship can't be placed outside the board 1", () => {
  const board = GameBoard();
  const carrier = Ship("CV");
  expect(board.placeShip(carrier, 10, "horizontal")).toBe(
    "ship can't be placed outside the board"
  );
});

test("ship can't be placed outside the board 2", () => {
  const board = GameBoard();
  const battleShip = Ship("BB");
  expect(board.placeShip(battleShip, 100, "vertical")).toBe(
    "ship can't be placed outside the board"
  );
});

test("doesnt allow overlap of two ships", () => {
  const board = GameBoard();
  const carrier = Ship("CV");
  const battleShip = Ship("BB");
  board.placeShip(battleShip, 1, "vertical");
  expect(board.placeShip(carrier, 1, "vertical")).toBe(
    "overlaopping not allowed"
  );
});

test("doesnt allow overlap of two ships", () => {
  const board = GameBoard();
  const carrier = Ship("CV");
  const battleShip = Ship("BB");
  board.placeShip(battleShip, 1, "vertical");
  expect(board.placeShip(carrier, 21, "horizontal")).toBe(
    "overlaopping not allowed"
  );
});

test("hit a ship", () => {
  const allShips = [];
  const board = GameBoard();
  const carrier = Ship("CV");
  const battleShip = Ship("BB");
  allShips.push(carrier);
  allShips.push(battleShip);
  board.placeShip(battleShip, 1, "vertical");
  board.placeShip(carrier, 3, "vertical");
  expect(board.recieveAttack(allShips, 1)).toBe(battleShip);
});

test("hit a ship", () => {
  const allShips = [];
  const board = GameBoard();
  const carrier = Ship("CV");
  const battleShip = Ship("BB");
  allShips.push(carrier);
  allShips.push(battleShip);
  board.placeShip(battleShip, 1, "vertical");
  board.placeShip(carrier, 3, "vertical");
  expect(board.recieveAttack(allShips, 13)).toBe(carrier);
});

test("miss ship", () => {
  const allShips = [];
  const board = GameBoard();
  const carrier = Ship("CV");
  const battleShip = Ship("BB");
  allShips.push(carrier);
  allShips.push(battleShip);
  board.placeShip(battleShip, 1, "vertical");
  board.placeShip(carrier, 3, "vertical");
  expect(board.recieveAttack(allShips, 2)).toBe("hit");
});

test("miss ship", () => {
  const allShips = [];
  const board = GameBoard();
  const carrier = Ship("CV");
  const battleShip = Ship("BB");
  allShips.push(carrier);
  allShips.push(battleShip);
  board.placeShip(battleShip, 1, "vertical");
  board.placeShip(carrier, 3, "vertical");
  expect(board.recieveAttack(allShips, 100)).toBe("hit");
});

test("hit same cord twice", () => {
  const allShips = [];
  const board = GameBoard();
  const carrier = Ship("CV");
  const battleShip = Ship("BB");
  allShips.push(carrier);
  allShips.push(battleShip);
  board.placeShip(battleShip, 1, "vertical");
  board.placeShip(carrier, 3, "vertical");
  board.recieveAttack(allShips, 1);
  expect(board.recieveAttack(allShips, 1)).toBe("already hit");
});

test("hit same cord twice", () => {
  const allShips = [];
  const board = GameBoard();
  const carrier = Ship("CV");
  const battleShip = Ship("BB");
  allShips.push(carrier);
  allShips.push(battleShip);
  board.placeShip(battleShip, 1, "vertical");
  board.placeShip(carrier, 3, "vertical");
  board.recieveAttack(allShips, 100);
  expect(board.recieveAttack(allShips, 100)).toBe("already hit");
});

test("all ships sun", () => {
  const board = GameBoard();
  const carrier = Ship("CV");
  const battleShip = Ship("BB");
  const cruiser = Ship("CA");
  const submarine = Ship("SS");
  const destroyer = Ship("DD");
  const allShips = [carrier, battleShip, cruiser, submarine, destroyer];
  board.placeShip(battleShip, 1, "vertical");
  board.placeShip(carrier, 2, "vertical");
  board.placeShip(cruiser, 3, "vertical");
  board.placeShip(submarine, 4, "vertical");
  board.placeShip(destroyer, 5, "vertical");
  expect(board.allSunk(allShips)).toBe(false);
});

test("all ships sun", () => {
  const board = GameBoard();
  const carrier = Ship("CV");
  const battleShip = Ship("BB");
  const cruiser = Ship("CA");
  const submarine = Ship("SS");
  const destroyer = Ship("DD");
  const allShips = [carrier, battleShip, cruiser, submarine, destroyer];
  board.placeShip(battleShip, 1, "vertical");
  board.placeShip(carrier, 2, "vertical");
  board.placeShip(cruiser, 3, "vertical");
  board.placeShip(submarine, 4, "vertical");
  board.placeShip(destroyer, 5, "vertical");
  for (let i = 0; i < 100; i++) {
    board.recieveAttack(allShips, i);
  }
  expect(board.allSunk(allShips)).toBe(true);
});
