export default function getStudentIdsSum(students) {
  const initialValue = 0;
  return students.reduce(
    (accumulator, currentValue) => (accumulator.id || accumulator) + currentValue.id,
    initialValue,
  );
}
