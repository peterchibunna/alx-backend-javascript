const express = require('express');
const fs = require('fs');

const app = express();
const HOST = 'localhost';
const PORT = 1245;

// eslint-disable-next-line no-unused-vars
const [a, b, inputDatabase] = process.argv;

function countStudents(filename) {
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
        output.push(`Number of students: ${numStudents}`);
        // eslint-disable-next-line guard-for-in
        for (const key in fields) {
          output.push(`Number of students in ${key}: ${fields[key]}. List: ${firstNames[key].join(', ')}`);
        }
        resolve(output);
      }
    });
  });
}

app.get('/', (req, response) => {
  response.send('Hello Holberton School!');
});
app.get('/students', (req, res) => {
  countStudents(inputDatabase).then((report) => {
    res.send(report.join('\n'));
  }).catch((err) => {
    const response = ['This is the list of our students'];
    response.push(err instanceof Error ? err.message : err.toString());
    const responseText = response.join('\n');
    res.send(responseText);
  });
});

app.listen(PORT, HOST, () => {
  process.stdout.write(`Server listening at -> http://${HOST}:${PORT}\n`);
});

module.exports = app;
