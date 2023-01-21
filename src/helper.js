import Ship from "./ship";

export function getSurroundingIndices(i) {
  const leftColumn = [10, 20, 30, 40, 50, 60, 70, 80];
  const rightColumn = [19, 29, 39, 49, 59, 69, 79, 89];

  switch (true) {
    case i === 0:
      return [i, i + 1, i + 10, i + 11];

    case i === 9:
      return [i, i - 1, i + 9, i + 10];

    case i === 90:
      return [i, i - 10, i + 1, i - 9];

    case i === 99:
      return [i, i - 1, i - 10, i - 11];

    case i > 0 && i < 9:
      return [i, i + 1, i + 10, i + 11, i + 9, i - 1];

    case i > 90 && i < 99:
      return [i, i - 11, i - 10, i - 9, i + 1, i - 1];

    case leftColumn.includes(i):
      return [i, i - 10, i - 9, i + 1, i + 10, i + 11];

    case rightColumn.includes(i):
      return [i, i - 11, i - 10, i - 1, i + 9, i + 10];

    default:
      return [i, i + 1, i - 1, i + 10, i - 10, i + 11, i - 11, i - 9, i + 9];
  }
}

export function getDiagonalCords(i) {
  const leftColumn = [10, 20, 30, 40, 50, 60, 70, 80];
  const rightColumn = [19, 29, 39, 49, 59, 69, 79, 89];

  switch (true) {
    case i === 0:
      return [i + 11];

    case i === 9:
      return [i + 9];

    case i === 90:
      return [i - 9];

    case i === 99:
      return [i - 11];

    case i > 0 && i < 9:
      return [i + 11, i + 9];

    case i > 90 && i < 99:
      return [i - 11, i - 9];

    case leftColumn.includes(i):
      return [i - 9, i + 11];

    case rightColumn.includes(i):
      return [i - 11, i + 9];

    default:
      return [i + 11, i - 11, i - 9, i + 9];
  }
}

export function roundUpNearest10(num) {
  return Math.ceil(num / 10) * 10;
}

export function lastDigit(num) {
  if (num % 10 === 0) {
    return 10;
  }
  return num % 10;
}

export function isShip(value) {
  const symbols = ["CV", "BB", "CA", "SS", "DD"];
  if (symbols.includes(value)) {
    return true;
  }
  return false;
}

export function increment(position) {
  if (position === "horizontal") {
    return 1;
  }
  if (position === "vertical") {
    return 10;
  }
}

export function structuredClone(array) {
  return JSON.parse(JSON.stringify(array));
}

export function getRandom(array) {
  return array[Math.floor(Math.random() * array.length)];
}

export function removeItemOnce(arr, value) {
  const index = arr.indexOf(value);
  if (index > -1) {
    arr.splice(index, 1);
  }
  return arr;
}

export function integerRange(end) {
  return [...Array(end).keys()].map((i) => i + 1);
}

export function createBoard() {
  return integerRange(100);
}

export function possibleMoves() {
  return integerRange(100);
}

export function buildFleet() {
  return [Ship("CV"), Ship("BB"), Ship("CA"), Ship("SS"), Ship("DD")];
}

export function createX() {
  const italic = document.createElement("i");
  italic.classList.add("fa-sharp", "fa-solid", "fa-xmark", "cross");
  return italic;
}

export function createDot() {
  const italic = document.createElement("i");
  italic.classList.add("fa-sharp", "fa-solid", "fa-circle", "dot");
  return italic;
}
