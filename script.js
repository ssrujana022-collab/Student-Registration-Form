function addStudent() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let course = document.getElementById("course").value;

    if (!name || !email || !phone || !course) {
        alert("Please fill all fields");
        return;
    }

    let table = document.getElementById("studentTable");
    let row = table.insertRow(-1);

    row.insertCell(0).innerHTML = name;
    row.insertCell(1).innerHTML = email;
    row.insertCell(2).innerHTML = phone;
    row.insertCell(3).innerHTML = course;

    document.getElementById("regForm").reset();
}