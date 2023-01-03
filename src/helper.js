export function circumIndicesHelper(i) {
  const leftColumn = [10, 20, 30, 40, 50, 60, 70, 80];
  const rightColumn = [19, 29, 39, 49, 59, 69, 79, 89];
  let circumIndices = [];
  switch (true) {
    case i === 0:
      circumIndices = [i, i + 1, i + 10, i + 11];
      break;
    case i === 9:
      circumIndices = [i, i - 1, i + 9, i + 10];
      break;
    case i === 90:
      circumIndices = [i, i - 10, i + 1, i - 9];
      break;
    case i === 99:
      circumIndices = [i, i - 1, i - 10, i - 11];
      break;
    case i > 0 && i < 9:
      circumIndices = [i, i + 1, i + 10, i + 11, i + 9, i - 1];
      break;
    case i > 90 && i < 99:
      circumIndices = [i, i - 11, i - 10, i - 9, i + 1, i - 1];
      break;
    case leftColumn.includes(i):
      circumIndices = [i, i - 10, i - 9, i + 1, i + 10, i + 11];
      break;
    case rightColumn.includes(i):
      circumIndices = [i, i - 11, i - 10, i - 1, i + 9, i + 10];
      break;

    default:
      circumIndices = [
        i,
        i + 1,
        i - 1,
        i + 10,
        i - 10,
        i + 11,
        i - 11,
        i - 9,
        i + 9,
      ];
  }
  return circumIndices;
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
