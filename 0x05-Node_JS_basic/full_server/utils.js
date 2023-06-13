import fs from "fs";

const customSortCaseIns = (a, b) => {
  if (a[0].toLowerCase() < b[0].toLowerCase()) {
    return -1;
  }
  if (a[0].toLowerCase() > b[0].toLowerCase()) {
    return 1;
  }
  return 0;
};

function readDatabase(filename) {
  return new Promise((resolve, reject) => {
    const output = [];
    fs.readFile(filename, { encoding: 'utf8', flag: 'r' }, (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
      }
      if (data) {
        output.push('This is the list of our students');
        const lines = data.split('\n');
        const fields = {};
        const firstNames = {};
        let numStudents = -1; // 1st line is a header
        lines.forEach((line) => {
          if (line.trim() !== '') {
            const fieldName = line.split(',')[3];
            const firstName = line.split(',')[0];
            if (fieldName !== 'field') {
              if (Object.keys(fields).includes(fieldName)) {
                fields[fieldName] += 1;
                firstNames[fieldName].push(firstName);
              } else {
                fields[fieldName] = 1;
                firstNames[fieldName] = [firstName];
              }
            }
            numStudents += 1;
          }
        });
        Object.entries(fields).sort(customSortCaseIns)
        // output.push(`Number of students: ${numStudents}`);
        // todo: order the fields by key
        // eslint-disable-next-line guard-for-in
        for (const key in fields) {
          output.push(`Number of students in ${key}: ${fields[key]}. List: ${firstNames[key].join(', ')}`);
        }
        resolve(output);
      }
    });
  });
}

export default readDatabase;
module.exports = readDatabase;
