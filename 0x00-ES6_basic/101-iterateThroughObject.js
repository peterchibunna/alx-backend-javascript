#!/usr/bin/node

export default function iterateThroughObject(reportWithIterator) {
  // eslint-disable-next-line no-array-constructor
  const allEmployees = Array();

  for (const employee of reportWithIterator) {
    allEmployees.push(employee);
  }

  return allEmployees.join(' | ');
}
