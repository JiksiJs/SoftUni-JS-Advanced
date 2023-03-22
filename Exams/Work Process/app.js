function solve() {
  const firstNameInput = document.getElementById("fname");
  const lastNameInput = document.getElementById("lname");
  const emailInput = document.getElementById("email");
  const birthDateInput = document.getElementById("birth");
  const positionInput = document.getElementById("position");
  const salaryInput = document.getElementById("salary");
  const hireBtn = document.getElementById("add-worker");
  const tableBody = document.getElementById("tbody");
  const sumSpan = document.getElementById("sum");

  hireBtn.addEventListener("click", onHire);
  hireBtn.addEventListener("click", resetInput);

  function onHire(e) {
    e.preventDefault();
    let firstName = firstNameInput.value;
    let lastName = lastNameInput.value;
    let email = emailInput.value;
    let birthDate = birthDateInput.value;
    let position = positionInput.value;
    let salary = salaryInput.value;

    if (
      firstName == "" ||
      lastName == "" ||
      email == "" ||
      birthDate == "" ||
      position == "" ||
      salary == ""
    ) {
      return;
    }

    let tableRow = document.createElement("tr");

    let firstNameData = document.createElement("td");
    let lastNameData = document.createElement("td");
    let emailData = document.createElement("td");
    let birthDateData = document.createElement("td");
    let positionData = document.createElement("td");
    let salaryData = document.createElement("td");

    firstNameData.textContent = `${firstName}`;
    lastNameData.textContent = `${lastName}`;
    emailData.textContent = `${email}`;
    birthDateData.textContent = `${birthDate}`;
    positionData.textContent = `${position}`;
    salaryData.textContent = `${salary}`;

    const firedBtn = document.createElement("button");
    const editBtn = document.createElement("button");

    firedBtn.classList.add("fired");
    firedBtn.textContent = "Fired";

    editBtn.classList.add("edit");
    editBtn.textContent = "Edit";

    tableRow.appendChild(firstNameData);
    tableRow.appendChild(lastNameData);
    tableRow.appendChild(emailData);
    tableRow.appendChild(birthDateData);
    tableRow.appendChild(positionData);
    tableRow.appendChild(salaryData);
    tableRow.appendChild(firedBtn);
    tableRow.appendChild(editBtn);

    tableBody.appendChild(tableRow);

    const currentSum = Number(sumSpan.textContent);
    sumSpan.textContent = (Number(salary) + currentSum).toFixed(2);

    editBtn.addEventListener("click", onEdit);

    function onEdit() {
      firstNameInput.value = firstName;
      lastNameInput.value = lastName;
      emailInput.value = email;
      birthDateInput.value = birthDate;
      positionInput.value = position;
      salaryInput.value = salary;

      tableRow.remove();
      const currentSum = Number(sumSpan.textContent);
      sumSpan.textContent = Math.abs(Number(salary) - currentSum).toFixed(2);
    }

    firedBtn.addEventListener("click", onFire);
    function onFire() {
      tableRow.remove();
      const currentSum = Number(sumSpan.textContent);
      sumSpan.textContent = Math.abs(Number(salary) - currentSum).toFixed(2);
    }
  }

  function resetInput() {
    firstNameInput.value = "";
    lastNameInput.value = "";
    emailInput.value = "";
    birthDateInput.value = "";
    positionInput.value = "";
    salaryInput.value = "";
  }
}
solve();
