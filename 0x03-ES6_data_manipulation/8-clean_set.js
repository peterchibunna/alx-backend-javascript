export default function cleanSet(set, startString) {
  if (startString !== '' && set instanceof Set) {
    const arr = [];
    if (!set || !startString || !(set instanceof Set) || typeof startString !== 'string') {
      return '';
    }
    set.forEach((item) => {
      if (typeof item === 'string' && item.startsWith(startString)) {
        arr.push(item.replace(startString, ''));
      }
    });
    return arr.join('-');
  }
  return '';
}
