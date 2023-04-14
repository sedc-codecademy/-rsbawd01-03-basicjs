let contacts = []; // array to store contacts

function saveContact() {
  // get input values
  let firstName = document.getElementById("firstName").value;
  let lastName = document.getElementById("lastName").value;
  let phoneNumber = document.getElementById("phoneNumber").value;

  // validate input values
  if (firstName === "" || lastName === "" || phoneNumber === "") {
    alert("Please enter all fields!");
    return;
  }
  if (!/^\d{10}$/.test(phoneNumber)) {
    alert("Please enter a valid 10-digit phone number!");
    return;
  }

  // create contact object
  let contact = {
    firstName: firstName,
    lastName: lastName,
    phoneNumber: phoneNumber,
  };

  // add contact to array
  contacts.push(contact);

  // add contact to table
  let tableRef = document
    .getElementById("contactTable")
    .getElementsByTagName("tbody")[0];
  let newRow = tableRef.insertRow();
  let newCell1 = newRow.insertCell();
  let newCell2 = newRow.insertCell();
  let newCell3 = newRow.insertCell();
  let newCell4 = newRow.insertCell();
  newCell1.innerHTML = contact.firstName;
  newCell2.innerHTML = contact.lastName;
  newCell3.innerHTML = contact.phoneNumber;
  newCell4.innerHTML =
    "<button onclick='editContact(this)'>Edit</button> <button onclick='deleteContact(this)'>Delete</button>";

  // clear input values
  document.getElementById("firstName").value = "";
  document.getElementById("lastName").value = "";
  document.getElementById("phoneNumber").value = "";
}

function deleteContact(button) {
  let row = button.parentNode.parentNode;
  let rowIndex = row.rowIndex - 1;
  contacts.splice(rowIndex, 1);
  row.parentNode.removeChild(row);
}

function editContact(button) {
  let row = button.parentNode.parentNode;
  let rowIndex = row.rowIndex - 1;
  let contact = contacts[rowIndex];
  document.getElementById("firstName").value = contact.firstName;
  document.getElementById("lastName").value = contact.lastName;
  document.getElementById("phoneNumber").value = contact.phoneNumber;
  contacts.splice(rowIndex, 1);
  row.parentNode.removeChild(row);
}
