export default function createInt8TypedArray(length, position, value) {
  if (position >= length) {
    throw Error('Position outside range');
  }
  const buffer = new ArrayBuffer(length);
  const uInt8 = new Int8Array(buffer, position, value);
  // uInt8[position] = value;

  return buffer;
}
