var selectedRow = null;
function onFormSubmit(e){
    event.preventDefault();
    var formData = readFormData();
    if(selectedRow === null){
        insertNewRecord(formData);
    }else{
        updateRecord(formData)
    }
    resetForm();
    }
// Read operation using this function
function readFormData(){
    var formData = {};
    formData["firstname"] = document.getElementById("firstname").value;
    formData["lastname"] = document.getElementById("lastname").value;
    formData["Employeeid"] = document.getElementById("Employeeid").value;
    formData["startdate"] = document.getElementById("startdate").value;
    formData["designation"] = document.getElementById("designation").value;
    formData["department"] = document.getElementById("department").value;    
    formData["enddate"] = document.getElementById("enddate").value;
    formData["martialstatus"] = document.getElementById("martialstatus").value;
    formData["dob"] = document.getElementById("dob").value;
    formData["reportingmanager"] = document.getElementById("reportingmanager").value;
    formData["gender"] = document.getElementById("gender").value;
    formData["bloodgroup"] = document.getElementById("bloodgroup").value;
    formData["address"] = document.getElementById("address").value;
    return formData;
}

// Create operation
function insertNewRecord(data){
    var table = document.getElementById("employeeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
     

    var cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.firstname;

    var cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.lastname;

    var cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.Employeeid;

    var cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.startdate;

    var cell5 = newRow.insertCell(4);
    cell5.innerHTML =  data.designation;
    
    var cell6 = newRow.insertCell(5);
    cell6.innerHTML = data.department;

    var cell7 = newRow.insertCell(6);
    cell7.innerHTML = data.enddate;

    var cell8 = newRow.insertCell(7);
    cell8.innerHTML = data.martialstatus;

    var cell9 = newRow.insertCell(8);
    cell9.innerHTML = data.dob;

    var cell10 = newRow.insertCell(9);
    cell10.innerHTML =  data.reportingmanager;

    var cell11 = newRow.insertCell(10);
    cell11.innerHTML =  data.gender;

    var cell12= newRow.insertCell(11);
    cell12.innerHTML =  data.bloodgroup;

    var cell13 = newRow.insertCell(12);
    cell13.innerHTML =  data.address;

    var cell14 = newRow.insertCell(13);

        cell14.innerHTML = `<a href="#" onClick='onEdit(this)'>Edit</a>
                        <a href="#" onClick='onDelete(this)'>Delete</a>`;
}

// To Reset the data of fill input
function resetForm(){
    document.getElementById("firstname").value = "";
    document.getElementById("lastname").value = "";
    document.getElementById("Employeeid").value = "";
    document.getElementById("startdate").value = "";
    document.getElementById("designation").value = "";
    document.getElementById("department").value = "";   
    document.getElementById("enddate").value = "";
    document.getElementById("martialstatus").value = "";
    document.getElementById("dob").value = "";
    document.getElementById("reportingmanager").value = "";
    document.getElementById("gender").value = "";
    document.getElementById("bloodgroup").value = "";
    document.getElementById("address").value = "";
}

// For Edit operation
function onEdit(td){
    selectedRow = td.parentElement.parentElement;
    document.getElementById("firstname").value = selectedRow.cells[0].innerHTML;
    document.getElementById("lastname").value = selectedRow.cells[1].innerHTML;
    document.getElementById("Employeeid").value = selectedRow.cells[2].innerHTML;
    document.getElementById("startdate").value = selectedRow.cells[3].innerHTML;
    document.getElementById("designation").value = selectedRow.cells[4].innerHTML;
    document.getElementById("department").value = selectedRow.cells[5].innerHTML;
    document.getElementById("enddate").value = selectedRow.cells[6].innerHTML;
    document.getElementById("martialstatus").value = selectedRow.cells[7].innerHTML;
    document.getElementById("dob").value = selectedRow.cells[8].innerHTML;
    document.getElementById("reportingmanager").value = selectedRow.cells[9].innerHTML;
    document.getElementById("gender").value = selectedRow.cells[10].innerHTML;
    document.getElementById("bloodgroup").value = selectedRow.cells[11].innerHTML;
    document.getElementById("address").value = selectedRow.cells[12].innerHTML;
}
function updateRecord(formData){
    selectedRow.cells[0].innerHTML = formData.firstname;
    selectedRow.cells[1].innerHTML = formData.lastname;
    selectedRow.cells[2].innerHTML = formData.Employeeid;
    selectedRow.cells[3].innerHTML = formData.startdate;
    selectedRow.cells[4].innerHTML = formData.designation;
    selectedRow.cells[5].innerHTML = formData.department;
    selectedRow.cells[6].innerHTML = formData.enddate;
    selectedRow.cells[7].innerHTML = formData.martialstatus;
    selectedRow.cells[8].innerHTML = formData.dob;
    selectedRow.cells[9].innerHTML = formData.reportingmanager;
    selectedRow.cells[10].innerHTML = formData.gender;
    selectedRow.cells[11].innerHTML = formData.bloodgroup;
    selectedRow.cells[12].innerHTML = formData.address;
}
function onDelete(td){
    if(confirm('Are you sure you want to delete this record?')){
        row = td.parentElement.parentElement;
        document.getElementById('employeeList').deleteRow(row.rowIndex);
        resetForm();
    }    
}