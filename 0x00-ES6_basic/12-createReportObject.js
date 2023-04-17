#!/usr/bin/node

export default function createReportObject(employeesList) {
  let numDepartments;
  numDepartments = Object.keys(employeesList).length;

  const data = {
    'allEmployees': employeesList,
    getNumberOfDepartments: () => numDepartments
  };

  return data;
}
