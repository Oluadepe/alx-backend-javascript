interface Student {
    firstName(string);
    lastName(string); 
    age(number);
    location(string);
}

let student1: Student = {
    firstName: "Segun",
    lastName: "Mayungbe",
    age: 20,
    location: "Ijebu"
};

let student2: Student = {
    firstName: "Segun",
    lastName: "Isijola",
    age: 40,
    location: "Ijebu"
};

const studentsList = [student1, student2];

const table = document.createElement("table");

studentsList.forEach(student => {
    const row = table.insertRow();
    const firstNameCell = row.insertCell();
    firstNameCell.innerHTML = student.firstName;

    const locationCell = location.insertCell();
    locationCell.innerHTML = student.location;

});

document.body.appendChild(table);
