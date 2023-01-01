import Ship from "../ship";

test("hit twice", () => {
  const newShip = Ship("CV");
  newShip.hit();
  newShip.hit();
  expect(newShip.getHits()).toBe(2);
});

test("hit once", () => {
  const newShip = Ship("CV");
  newShip.hit();
  expect(newShip.getHits()).toBe(1);
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
