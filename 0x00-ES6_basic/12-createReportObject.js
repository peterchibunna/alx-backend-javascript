#!/usr/bin/node

export default function createReportObject(employeesList) {
  const numDepartments = Object.keys(employeesList).length;

  const data = {
    allEmployees: employeesList,
    getNumberOfDepartments: () => numDepartments,
  };

  return data;
}
