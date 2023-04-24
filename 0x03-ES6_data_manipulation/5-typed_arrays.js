export default function createInt8TypedArray(length, position, value) {
  const dataView = new DataView(new ArrayBuffer(length), 0, length);
  try {
    dataView.setInt8(position, value);
  } catch (e) {
    // if ( e instanceof RangeError){}
    throw new Error('Position outside range');
  }
  return dataView;
}
