

let patients = [];
let testpatients = [
    {
        patientId: "EP-001-000001",
        firstName: "Ana",
        middleName: "J",
        lastName: "Smith",
        dateOfBirth: "2013-01-05",
        department: "Ear, Nose and Throat",
        isOutPatient: "No"
    },
    {
        "patientId": "P-001-000002", "firstName": "Bob",
        "middleName": "K",
        "lastName": "Jones",
        "dateOfBirth": "1985-05-04",
        department: "Cardiology",
        "isOutPatient": "Yes"
    },
    {
        patientId: "EP-001-000003",
        "firstName": "Carlos",
        "middleName": "A",
        "lastName": "Hernandez",
        dateOfBirth: "1957-03-13",
        department: "Cardiology",
        isOutPatient: "Yes"
    }
];
function getRowData() {
    let patient = {
        patientId: document.getElementById("patientIdNumber").value,
        firstName: document.getElementById("firstName").value,
        middleName: document.getElementById("middleInitials").value,
        lastName: document.getElementById("lastName").value,
        dateOfBirth: document.getElementById("dateOfBirth").value,
        department: document.getElementById("ddlDepartment").value,
        isOutPatient: document.querySelector('input[name="radioIsOutPatient"]:checked')?.value ?? 'Yes',
    }
    return patient;
}
function addRow() {
    patients.push(getRowData());
}
function createTd(content) {
    let td = document.createElement("td")
    td.innerHTML = content;
    return td;
}
function drawTable(dataArr) {
    let tbody = document.getElementById("tbodyPatientsList");
    tbody.innerHTML = '';
    let result = dataArr ? dataArr : patients;

    result.forEach(p => {
        //create new Row
        let tr = document.createElement("tr");
        tr.appendChild(createTd(p.patientId));
        tr.appendChild(createTd(p.firstName));
        tr.appendChild(createTd(p.middleName));
        tr.appendChild(createTd(p.lastName));
        tr.appendChild(createTd(p.dateOfBirth));
        tr.appendChild(createTd(p.department));
        tr.appendChild(createTd(p.isOutPatient));
        tbody.appendChild(tr);
    })
}

function calAge(date) {
    var dob = new Date(date);
    //calculate month difference from current date in time  
    var month_diff = Date.now() - dob.getTime();

    //convert the calculated difference in date format  
    var age_dt = new Date(month_diff);

    //extract year from date      
    var year = age_dt.getUTCFullYear();

    //now calculate the age of the user  
    var age = Math.abs(year - 1970);
    return age;
}
function validateForm() {
    let p = getRowData();

    if (!p.patientId || !p.firstName || !p.lastName || !p.department || !p.dateOfBirth) {
        return false;
    }
    let pattern = /(P|EP)-\d{3}-\d{6}/
    if (!pattern.test(p.patientId))
        return false;
    return true;
}
function filterDisplay(arr) {
    let isOutPatientOnly = document.getElementById("chkShowOutPatients").checked;
    let isElderlyOnly = document.getElementById("chkElderlyPatients").checked;
    let result = arr;
    if (isElderlyOnly) {
        result = result.filter(p => calAge(p.dateOfBirth) >= 65)
    }
    if (isOutPatientOnly) {
        result = result.filter(p => p.isOutPatient == "Yes")
    }
    return result;
}
function updateValue(p) {
    document.getElementById("patientIdNumber").value = p.patientId;
    document.getElementById("firstName").value = p.firstName;
    document.getElementById("middleInitials").value = p.middleName;

    document.getElementById("lastName").value = p.lastName;
    document.getElementById("dateOfBirth").value = p.dateOfBirth
    document.getElementById("ddlDepartment").value = p.department
    document.getElementById("radioIsOutPatientYes").checked = p.isOutPatient === "Yes";
    document.getElementById("radioIsOutPatientNo").checked = p.isOutPatient === "No";

}
window.onload = function () {

    document.getElementById("btnRegisterPatient").addEventListener("click", function (event) {
        event.preventDefault();
        if (!validateForm()) {
            alert("Form Failed validate");
            return;
        }

        addRow();
        drawTable();
        document.getElementById("btnReset").click();
    })
    document.getElementById("chkElderlyPatients").addEventListener("change", function (event) {
        drawTable(filterDisplay(patients));
    })
    document.getElementById("chkShowOutPatients").addEventListener("change", function (event) {
        drawTable(filterDisplay(patients));
    })
    document.getElementById("p1").onclick = function(e){
        e.preventDefault();
        updateValue(testpatients[0])
    }
    document.getElementById("p2").onclick = function(e){
        e.preventDefault();
        updateValue(testpatients[1])
    }
    document.getElementById("p3").onclick = function(e){
        e.preventDefault();
        updateValue(testpatients[2])
    }
    drawTable();
}
