#!/usr/bin/node

export default function appendToEachArrayValue(array, appendString) {
  const newString = [];
  for (const beginning of array) {
    newString.push(appendString + beginning);
  }

  return newString;
}
