var selectedRow = null;

function onFormSubmit(e) {
    event.preventDefault();
    var formData = readFormData();
    if (selectedRow === null) {
        insertNewRecord(formData);
    } else {
        updateRecord(formData);
    }
    resetForm();
}
//Retrieve the dataForn
function readFormData() {
    var formData = {};
    formData["Id"] = document.getElementById("Id").value;
    formData["LastName"] = document.getElementById("Name").value;
    formData["Email"] = document.getElementById("Email").value;
    formData["Age"] = document.getElementById("Age").value;
    return formData;
}
//Insert the data
function insertNewRecord(data) {
    var table = document.getElementById("storeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    var cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.Id;
    var cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.Name;
    var cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.Email;
    var cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.Age;
    var cell5 = newRow.insertCell(4);
    cell5.innerHTML = `<button onClick='onUpdate(this)'>Update</button> <button onClick='onDelete(this)'>Delete</button>`
}

//Edit the data
function onUpdate(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById('Id').value = selectedRow.cells[0].innerHTML;
    document.getElementById('Name').value = selectedRow.cells[1].innerHTML;
    document.getElementById('Email').value = selectedRow.cells[2].innerHTML;
    document.getElementById('Age').value = selectedRow.cells[3].innerHTML;
}

function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.Id;
    selectedRow.cells[1].innerHTML = formData.Name;
    selectedRow.cells[2].innerHTML = formData.Email;;
    selectedRow.cells[3].innerHTML = formData.Age;
}
//Delete the data
function onDelete(td) {
    if (confirm('Do you want to delete this information?')) {
        row = td.parentElement.parentElement;
        document.getElementById('storeList').deleteRow(row.rowIndex);
    }
    resetForm();
}
//Reset the data
function resetForm() {
    document.getElementById('Id').value = '';
    document.getElementById('Name').value = '';
    document.getElementById('Email').value = '';
    document.getElementById('Age').value = '';
}