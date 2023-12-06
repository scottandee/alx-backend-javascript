export default function groceriesList() {
  const groceries = [
    ['Apples', 10],
    ['Tomatoes', 10],
    ['Pasta', 1],
    ['Rice', 1],
    ['Banana', 5],
  ];
  const map = new Map();
  groceries.forEach((value) => map.set(value[0], value[1]));
  return map;
}
