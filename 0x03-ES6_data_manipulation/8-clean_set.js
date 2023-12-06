export default function cleanSet(set, startString) {
  let i = 0;
  let string = '';

  if (startString.length === 0) {
    return '';
  }

  for (const value of set) {
    i += 1;
    if (value.startsWith(startString)) {
      string += value.slice(3);
      if (i !== set.size - 1) {
        string += '-';
      }
    }
  }
  return string;
}
