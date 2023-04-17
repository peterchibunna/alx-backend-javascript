#!/usr/bin/node

export const taskFirst = () => {
  return 'I prefer const when I can.';
};

export function getLast() {
  return ' is okay';
}

export const taskNext = () => {
  let combination = 'But sometimes let';
  combination += getLast();

  return combination;
};
