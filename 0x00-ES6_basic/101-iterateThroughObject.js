#!/usr/bin/node

export default function iterateThroughObject(reportWithIterator) {
  const allEmployees = Array();

  for(const employee of reportWithIterator){
    allEmployees.push(employee);
  }

  return allEmployees.join(' | ');
}
