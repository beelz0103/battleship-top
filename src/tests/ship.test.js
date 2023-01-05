import Ship from "../ship";

test("hit once", () => {
  const newShip = Ship("CV");
  newShip.hit();
  expect(newShip.getHits()).toBe(1);
});

test("hit twice", () => {
  const newShip = Ship("CV");
  newShip.hit();
  newShip.hit();
  expect(newShip.getHits()).toBe(2);
});

test("sunk", () => {
  const newShip = Ship("CV");
  newShip.hit();
  newShip.hit();
  newShip.hit();
  newShip.hit();
  newShip.hit();
  expect(newShip.isSunk()).toBe(true);
});

test("not sunk", () => {
  const newShip = Ship("CV");
  expect(newShip.isSunk()).toBe(false);
});

test("on waters", () => {
  const newShip = Ship("CV");
  newShip.deploy();
  expect(newShip.isDeployed()).toBe(true);
});

test("still in dock", () => {
  const newShip = Ship("CV");
  expect(newShip.isDeployed()).toBe(false);
});

test("could not deploy", () => {
  const newShip = Ship("CV");
  newShip.couldNotDeploy();
  expect(newShip.isDeployed()).toBe(false);
});

test("get ship cords", () => {
  const newShip = Ship("CV");
  newShip.setCords([1, 2, 3, 4]);

  expect(newShip.getCords()).toEqual([1, 2, 3, 4]);
});
