const fs = require('fs');
const csv = require('csv-parser');
const express = require('express');

const app = express();
const PORT = 1245; // Specify the port number for the server to listen on

// Function to read CSV file and return an array of student objects
const readCSV = (filename, callback) => {
  const students = [];
  fs.createReadStream(filename)
    .pipe(csv())
    .on('data', (data) => {
      students.push(data);
    })
    .on('end', () => {
      callback(null, students);
    })
    .on('error', (error) => {
      callback(error);
    });
};

// Function to count total number of students
const countTotalStudents = (students) => {
  return students.length;
};

// Function to count number of students in a specific field
const countStudentsByField = (students, field) => {
  return students.filter(student => student.field === field).length;
};

// Function to get list of students in a specific field
const getListOfStudentsByField = (students, field) => {
  const filteredStudents = students.filter(student => student.field === field);
  return filteredStudents.map(student => student.firstname);
};

// Set up the route for /
app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

// Set up the route for /students endpoint
app.get('/students', (req, res) => {
  // Read the CSV file and get the array of student objects
  readCSV('database.csv', (error, students) => {
    if (error) {
      res.status(500).json({ error: 'Failed to read CSV file' });
    } else {
      const totalStudents = countTotalStudents(students);
      const csStudents = countStudentsByField(students, 'CS');
      const sweStudents = countStudentsByField(students, 'SWE');
      const csStudentList = getListOfStudentsByField(students, 'CS');
      const sweStudentList = getListOfStudentsByField(students, 'SWE');

      const response = {
        message: 'This is the list of our students',
        'Number of students': totalStudents,
        'Number of students in CS': csStudents,
        'List of CS students': csStudentList,
        'Number of students in SWE': sweStudents,
        'List of SWE students': sweStudentList
      };

      res.json(response);
    }
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = {
  readCSV,
  countTotalStudents,
  countStudentsByField,
  getListOfStudentsByField
};

