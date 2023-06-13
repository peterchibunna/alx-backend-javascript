const fs = require('fs');

function countStudents(filename) {
  if (fs.existsSync(filename) && fs.statSync(filename).isFile()) {
    const data = fs.readFileSync(filename, {encoding: 'utf8', flag: 'r'});
    const lines = data.split('\n');
    const fields = {};
    const firstNames = {};
    let numStudents = -1; // 1st line is a header
    lines.forEach(function (line) {
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
    for (const key in fields) {
      console.log(`Number of students in ${key}: ${fields[key]}. List: ${firstNames[key].join(', ')}`);
    }
  } else {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
