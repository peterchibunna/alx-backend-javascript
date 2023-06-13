const fs = require('fs');

function countStudents(filename) {
  return new Promise((resolve, reject) => {
    fs.readFile(filename, { encoding: 'utf8', flag: 'r' }, (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
      }
      if (data) {
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
        console.log(`Number of students: ${numStudents}`);
        // eslint-disable-next-line guard-for-in
        for (const key in fields) {
          console.log(`Number of students in ${key}: ${fields[key]}. List: ${firstNames[key].join(', ')}`);
        }
        resolve(true);
      }
    });
  });
}

module.exports = countStudents;
