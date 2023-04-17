#!/usr/bin/node

export default function createIteratorObject(report) {
  const allEmployees = Object.values(report.allEmployees);

  function* reportIterator() {
    for (const department of allEmployees) {
      for (const employee of department) {
        yield employee;
      }
    }
  }

  return (reportIterator());
}
