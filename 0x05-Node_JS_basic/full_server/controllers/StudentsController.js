import readDatabase from '../utils';

const VALID_MAJORS = ['CS', 'SWE'];

class StudentsController {
  static getAllStudents(request, response) {
    const dataPath = process.argv.length > 2 ? process.argv[2] : '';

    readDatabase(dataPath).then((output) => {
      response.status(200).send(output.join('\n'));
    }).catch((err) => {
      response.status(500).send(err instanceof Error ? err.message : err.toString());
    });
  }

  static getAllStudentsByMajor(request, response) {
    // eslint-disable-next-line no-unused-vars
    const [a, b, dataPath] = process.argv;
    const { major } = request.params;

    if (!VALID_MAJORS.includes(major)) {
      response.status(500).send('Major parameter must be CS or SWE');
      return;
    }
    readDatabase(dataPath).then((output) => {
      const filteredOutput = [];
      output.forEach((line) => {
        const testString1 = 'Number of students in';
        const testString2 = `Number of students in ${major}`;
        if (line.startsWith(testString1) && line.startsWith(testString2)) {
          filteredOutput.push(`List:${line.split('List:')[1]}`);
        }
      });
      response.status(200).send(filteredOutput.join('\n'));
    }).catch((err) => {
      response.status(500).send(err instanceof Error ? err.message : err.toString());
    });
  }
}

export default StudentsController;
module.exports = StudentsController;
