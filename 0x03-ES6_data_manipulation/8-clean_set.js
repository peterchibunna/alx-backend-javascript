export default function cleanSet(set, startString) {
  if (startString !== '' && set instanceof Set) {
    const arr = [];
    set.forEach((item) => {
      if (item.startsWith(startString)) {
        arr.push(item.replace(startString, ''));
      }
    });
    return arr.join('-');
  }
  return '';
}
