const express = require('express');
const fs = require('fs');
const csv = require('csv-parser');

const app = express();
const port = 1245;

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  const dbName = 'database.csv';
  let students = [];
  let csStudents = [];
  let sweStudents = [];

  fs.createReadStream(dbName)
    .pipe(csv())
    .on('data', (data) => {
      students.push(data);
      if (data.field === 'CS') {
        csStudents.push(data.firstname);
      } else if (data.field === 'SWE') {
        sweStudents.push(data.firstname);
      }
    })
    .on('end', () => {
      const csCount = csStudents.length;
      const sweCount = sweStudents.length;

      const response = `This is the list of our students\nNumber of students: ${students.length}\nNumber of students in CS: ${csCount}. List: ${csStudents.join(', ')}\nNumber of students in SWE: ${sweCount}. List: ${sweStudents.join(', ')}`;
      res.send(response);
    });
});

app.listen(port, () => {
  console.log(`HTTP server running on port ${port}`);
});

module.exports = app;

