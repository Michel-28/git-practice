
let students = ["Rahul", "Priya", "Arun", "Karthik", "Pooja"];

const studentInput = document.getElementById("studentName");
const addButton = document.getElementById("addStudent");
const studentList = document.getElementById("studentList");
const total = document.getElementById("total");

function displayStudents() {
    studentList.innerHTML = "";

    students.forEach((student, index) => {
        const li = document.createElement("li");

        li.textContent = student + " ";

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";

        deleteButton.addEventListener("click", () => {
            students.splice(index, 1);
            displayStudents();
        });

        li.appendChild(deleteButton);
        studentList.appendChild(li);
    });

    total.textContent = students.length;
}

addButton.addEventListener("click", () => {
    const name = studentInput.value.trim();

    if (name === "") {
        alert("Please enter a student name");
        return;
    }

    students.push(name);
    studentInput.value = "";

    displayStudents();
});

displayStudents();
