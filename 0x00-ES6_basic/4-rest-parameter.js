export default function returnHowManyArguments(...params) {
  let count = 0;
  for (let param of params) count++;

  return count;
}
