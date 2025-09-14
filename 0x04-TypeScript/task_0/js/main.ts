// Define the Student interface
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// Create two student objects
const student1: Student = {
  firstName: 'Anaol',
  lastName: 'Atinafu',
  age: 21,
  location: 'Addis Ababa'
};

const student2: Student = {
  firstName: 'Lily',
  lastName: 'Smith',
  age: 22,
  location: 'New York'
};

// Create an array containing both students
const studentsList: Student[] = [student1, student2];

// Create a table element
const table: HTMLTableElement = document.createElement('table');
table.border = '1';

// Create table header
const headerRow: HTMLTableRowElement = table.insertRow();
headerRow.insertCell().innerText = 'First Name';
headerRow.insertCell().innerText = 'Location';

// Append a row for each student
studentsList.forEach((student: Student) => {
  const row: HTMLTableRowElement = table.insertRow();
  row.insertCell().innerText = student.firstName;
  row.insertCell().innerText = student.location;
});

// Append the table to the document body
document.body.appendChild(table);
