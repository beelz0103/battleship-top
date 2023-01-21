import Player from "../player";

test("player sinks all of computers ships", () => {
  const newPlayer = Player("player");
  const newComputer = Player("computer");
  for (let i = 0; i < 100; i += 1) newPlayer.attack(newComputer, i);
  expect(newComputer.board.allSunk()).toBe(true);
});

test("computer sinks all of players ships", () => {
  const newPlayer = Player("player");
  const newComputer = Player("computer");
  for (let i = 0; i < 100; i += 1) newComputer.attack(newPlayer);
  expect(newPlayer.board.allSunk()).toBe(true);
});

test("returns hit cord value - 1", () => {
  const newPlayer = Player("player");
  const newComputer = Player("computer");
  const hitValue = newPlayer.attack(newComputer, 1);
  const expectedValue = ["CV", "BB", "DD", "SS", "CA", 1];
  expect(expectedValue.includes(hitValue)).toBe(true);
});

test("returns hit cord value - 2", () => {
  const newPlayer = Player("player");
  const newComputer = Player("computer");
  const hitValue = newPlayer.attack(newComputer, 2);
  const expectedValue = ["CV", "BB", "DD", "SS", "CA", 2];
  expect(expectedValue.includes(hitValue)).toBe(true);
});
