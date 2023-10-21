let students = []
window.onload = () => {
    display();
    document.getElementById("btnDelete").addEventListener("click", () => {
        removeStudent();
    })

    document.getElementById("btnUpdate").addEventListener("click", () => {
        updateStudent();
    })

    document.getElementById("ddlStudentForUpdate").addEventListener("change", (e) => {
        let value = e.target.value;
        if (!value) {
            return;
        }
        let selected = students.find(s => s.id == value);
        if(!selected){
            alert("Selected Not found")
        }
        document.getElementById("idForUpdate").value = selected.id;
        document.getElementById("nameForUpdate").value = selected.name;
        document.getElementById("programForUpdate").value = selected.program;

    })
}

async function display() {
    let response = await getApi("students")
    document.getElementById('tbodyStudentList').innerHTML = '';
    let json;
    if (response.ok) {
        json = await response.json();
        students = json;
        for (let e of json) {
            addRowToTable(e.id, e.name, e.program)
        }

        //bind to Student select
        refreshStudenList("ddlStudent")
        refreshStudenList("ddlStudentForUpdate")
    }
    else alert("Error" + response.status);

}

function refreshStudenList(id) {
    let list = document.getElementById(id)
    list.innerHTML = '';

    students.forEach(s => {
        let option = document.createElement("option");
        option.value = s.id;
        option.innerHTML = s.id;
        list.appendChild(option)
    });


}
function addRowToTable(id, name, program) {
    let row = document.createElement('tr');
    row.setAttribute("id", id);
    for (let e of arguments) {
        let cell = document.createElement('td');
        cell.appendChild(document.createTextNode(e));
        row.appendChild(cell);
    }
    document.getElementById('tbodyStudentList').appendChild(row);

}

async function removeStudent() {
    let id = document.getElementById("ddlStudent").value;
    if (!id) {
        alert("No StudentId selected")
        return;
    }
    let response = await deleleApi("students/" + id);
    if (response.ok) {
        display();
        alert("Student removed Successfully")
    } else alert("Error " + response.status);

}

async function updateStudent() {
    let id = document.getElementById('idForUpdate').value;
    let name = document.getElementById('nameForUpdate').value;
    let program = document.getElementById('programForUpdate').value;


    let obj = { id, name, program };

    let response = await putApi("students/" + id, obj);
    if (response.ok) {
        alert("Student Update Successfully")
        display();
        document.getElementById('myform').reset()
    } else alert("Error " + response.status);

}


async function addStudent(id, name, program) {
    let obj = { id, name, program };

    let response = await postApi("students", obj);
    if (response.ok) {
        display();
    } else alert("Error " + response.status);

}

document.getElementById('btnRegister').addEventListener("click", () => {
    let id = document.getElementById('id').value;
    let name = document.getElementById('name').value;
    let program = document.getElementById('program').value;
    addStudent(id, name, program);
    document.getElementById('myform').reset()
});