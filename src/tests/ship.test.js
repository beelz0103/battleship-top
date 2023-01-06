import Ship from "../ship";

test("ship gets hit once", () => {
  const newShip = Ship("CV");
  newShip.hit();
  expect(newShip.getHits()).toBe(1);
});

test("ship gets hit twice", () => {
  const newShip = Ship("CV");
  newShip.hit();
  newShip.hit();
  expect(newShip.getHits()).toBe(2);
});

test("ship sunk", () => {
  const newShip = Ship("CV");
  newShip.hit();
  newShip.hit();
  newShip.hit();
  newShip.hit();
  newShip.hit();
  expect(newShip.isSunk()).toBe(true);
});

test("ship afloat", () => {
  const newShip = Ship("CV");
  expect(newShip.isSunk()).toBe(false);
});

test("ship sortied", () => {
  const newShip = Ship("CV");
  newShip.deploy();
  expect(newShip.isDeployed()).toBe(true);
});

test("ship is in dock", () => {
  const newShip = Ship("CV");
  expect(newShip.isDeployed()).toBe(false);
});

test("ship failed to sortie", () => {
  const newShip = Ship("CV");
  newShip.couldNotDeploy();
  expect(newShip.isDeployed()).toBe(false);
});

test("get ship cordinates", () => {
  const newShip = Ship("CV");
  newShip.setCords([1, 2, 3, 4]);
  expect(newShip.getCords()).toEqual([1, 2, 3, 4]);
});

test("ship cordsinates is null when not sortied", () => {
  const newShip = Ship("CV");
  expect(newShip.getCords()).toBe(null);
});

test("ship placed vertically", () => {
  const newShip = Ship("CV");
  newShip.setCords([1, 10, 20, 40]);
  expect(newShip.getPosition()).toBe("vertical");
});

test("ship placed horizontally", () => {
  const newShip = Ship("CV");
  newShip.setCords([1, 2, 3, 4]);
  expect(newShip.getPosition()).toBe("horizontal");
});
