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
  newPlayer.attack(newComputer, 9);
  newPlayer.attack(newComputer, 19);
  expect(newComputer.board.allShips[4].isSunk()).toBe(true);
});

test("player sinks opponents carrier", () => {
  const newPlayer = Player("player");
  const newComputer = Player("computer");
  newPlayer.attack(newComputer, 1);
  newPlayer.attack(newComputer, 11);
  newPlayer.attack(newComputer, 21);
  newPlayer.attack(newComputer, 31);
  newPlayer.attack(newComputer, 41);
  expect(newComputer.board.allShips[0].isSunk()).toBe(true);
});

test("computer tries hitting till all of players ships sink", () => {
  const newPlayer = Player("player");
  const newComputer = Player("computer");
  for (let i = 0; i < 100; i += 1) {
    newComputer.attack(newPlayer);
  }
  expect(newPlayer.board.allSunk()).toBe(true);
});

test("player attack return value is same as board attack return value", () => {
  const newPlayer = Player("player");
  const newComputer = Player("computer");
  expect(newPlayer.attack(newComputer, 1)).toBe("CV");
});
