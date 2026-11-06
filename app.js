
let students = ["Rahul", "Priya", "Arun", "Karthik","pooja"];
const studentInput = document.getElementById("studentName");
const addButton = document.getElementById("addStudent");
const studentList = document.getElementById("studentList");
const total = document.getElementById("total");

function displayStudents() {
    studentList.innerHTML = "";

    students.forEach((student) => {
        const li = document.createElement("li");
        li.textContent = student;

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
