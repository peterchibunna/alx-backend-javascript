export interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const student1: Student = {
    firstName: 'Peter',
    lastName: 'Chibunna',
    age: 40,
    location: 'Abuja'
};
const student2: Student = {
    firstName: 'Henry',
    lastName: 'Ozzai',
    age: 40,
    location: 'Port Harcourt'
};

const studentsList: Array<Student> = [student1, student2];

const table = document.createElement('table');

const tableHead = document.createElement('thead');
const headRow = document.createElement('tr');
const tableBody = document.createElement('tbody');
headRow.insertAdjacentHTML('beforeend', '<th>First Name</th');
headRow.insertAdjacentHTML('beforeend', '<th>Location</th');
tableHead.insertAdjacentElement('beforeend', headRow);

for (const student of studentsList) {
    const bodyRow = document.createElement('tr');
    bodyRow.insertAdjacentHTML('beforeend', `<td>${student.firstName}</td>`);
    bodyRow.insertAdjacentHTML('beforeend', `<td>${student.location}</td>`);
    tableBody.insertAdjacentElement('beforeend', bodyRow);
}

table.insertAdjacentElement('beforeend', tableHead);
table.insertAdjacentElement('beforeend', tableBody);
document.body.insertAdjacentElement('beforeend', table);
const css = `
 body {
    font-family: san-serif, Helvetica;
    font-size: 14pt;
 }
 table {
    margin: 1em auto;
    width: 500px;
    border: 1px solid #ccc;
    border-collapse: collapse;
    border-radius: 20px;
 }
 table th {
    text-align: left;
 }
 table td, table th {
    border: 1px solid #ccc;
    padding: 1rem;
 }
`;
const styleSheetElement = document.createElement('style');
styleSheetElement.innerHTML = css;
document.head.insertAdjacentElement('beforeend', styleSheetElement);
document.title = '0. Creating an interface for a student';
