import Player from "../player";

test("player has turn at start", () => {
  const newPlayer = Player("player");
  expect(newPlayer.getTurn()).toBe(true);
});

test("player changes turn", () => {
  const newPlayer = Player("player");
  newPlayer.changeTurn();
  expect(newPlayer.getTurn()).toBe(false);
});

test("computer does not have turn at start", () => {
  const newComputer = Player("computer");
  expect(newComputer.getTurn()).toBe(false);
});

test("computer changes turn", () => {
  const newComputer = Player("computer");
  newComputer.changeTurn();
  expect(newComputer.getTurn()).toBe(true);
});

test.skip("player sinks opponents destroyer", () => {
  const newPlayer = Player("player");
  const newComputer = Player("computer");
  newPlayer.attack(newComputer, 55);
  newPlayer.attack(newComputer, 65);
  expect(newComputer.allShips[4].isSunk()).toBe(true);
});

test("player sinks opponents carrier", () => {
  const newPlayer = Player("player");
  const newComputer = Player("computer");
  newPlayer.attack(newComputer, 4);
  newPlayer.attack(newComputer, 14);
  newPlayer.attack(newComputer, 24);
  newPlayer.attack(newComputer, 34);
  newPlayer.attack(newComputer, 44);
  expect(newComputer.allShips[0].isSunk()).toBe(true);
});

test.skip("computer tries hitting till all of players ships sink", () => {
  const newPlayer = Player("player");
  const newComputer = Player("computer");
  for (let i = 0; i < 100; i++) {
    newComputer.attack(newPlayer);
  }
  expect(newPlayer.board.allSunk(newPlayer.allShips)).toBe(true);
});
