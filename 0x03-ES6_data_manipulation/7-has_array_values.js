export default function hasValuesFromArray(set, array) {
  // shorthand: return array.every((item) => set.has(item));
  const checks = new Set(array.map((item) => set.has(item)));
  return !checks.has(false);
}
