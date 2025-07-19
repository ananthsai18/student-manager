let details = [];

function addDetails() {
  let name = document.getElementById("name").value;
  let age = document.getElementById("age").value;
  let course = document.getElementById("course").value;
  if (!name || !age || !course) {
    alert("Enter all the datails");
    return;
  }
  const student = {
    name: name,
    age: age,
    course: course,
  };
  details.push(student);

  display(details);
}

function display(details) {
  let s = document.getElementById("details");
  s.innerHTML = "";
  details.forEach((student, index) => {
    let div = document.createElement("div");
    div.className = "std";

    div.innerHTML = `<strong>${index + 1}.${student.name}</strong> (age:${
      student.age
    } course:${student.course})`;
    s.appendChild(div);
  });
}
