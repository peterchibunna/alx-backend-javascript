const http = require('http');
const fs = require('fs');

const PORT = 1245;
const HOST = 'localhost';
const app = http.createServer();

// eslint-disable-next-line no-unused-vars
const [a, b, inputDatabase] = process.argv;

function countStudents(filename) {
  return new Promise((resolve, reject) => {
    let output = [];
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
        output.push(`Number of students: ${numStudents}`);
        // eslint-disable-next-line guard-for-in
        for (const key in fields) {
          output.push(`Number of students in ${key}: ${fields[key]}. List: ${firstNames[key].join(', ')}`);
        }
        resolve(output.join('\n'));
      }
    });
  });
}

const routes = [{
  route: '/',
  handler(_, res) {
    const responseText = 'Hello Holberton School!';

    res.setHeader('Content-Type', 'text/plain');
    res.setHeader('Content-Length', responseText.length);
    res.statusCode = 200;
    res.write(Buffer.from(responseText));
  },
}, {
  route: '/students',
  handler(_, res) {
    const response = ['This is the list of our students'];

    countStudents(inputDatabase).then((report) => {
      response.push(report);
      const responseText = response.join('\n');
      res.setHeader('Content-Type', 'text/plain');
      res.setHeader('Content-Length', responseText.length);
      res.statusCode = 200;
      res.write(Buffer.from(responseText));
    }).catch((err) => {
      response.push(err instanceof Error ? err.message : err.toString());
      const responseText = response.join('\n');
      res.setHeader('Content-Type', 'text/plain');
      res.setHeader('Content-Length', responseText.length);
      res.statusCode = 200;
      res.write(Buffer.from(responseText));
    });
  },
}];

app.on('request', (req, res) => {
  for (const controller of routes) {
    if (controller.route === req.url) {
      controller.handler(req, res);
      break;
    }
  }
});

app.listen(PORT, HOST, () => {
  process.stdout.write(`Server listening at -> http://${HOST}:${PORT}\n`);
});

module.exports = app;
