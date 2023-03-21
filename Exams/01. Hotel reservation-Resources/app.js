window.addEventListener("load", solve);

function solve() {
  let firstNameInput = document.getElementById("first-name");
  let lastNameInput = document.getElementById("last-name");
  let dateInInput = document.getElementById("date-in");
  let dateOutInput = document.getElementById("date-out");
  let peopleCountInput = document.getElementById("people-count");
  const nextBtn = document.getElementById("next-btn");
  const infoList = document.querySelector(".info-list");
  const confirmList = document.querySelector(".confirm-list");
  const verification = document.getElementById("verification");

  nextBtn.addEventListener("click", onReserve);
  nextBtn.addEventListener("click", resetInput);

  function onReserve(e) {
    e.preventDefault();
    const firstName = firstNameInput.value;
    const lastName = lastNameInput.value;
    const dateIn = dateInInput.value;
    const dateOut = dateOutInput.value;
    const people = peopleCountInput.value;

    if (
      firstName == "" ||
      lastName == "" ||
      dateIn == "" ||
      dateOut == "" ||
      people == "" ||
      new Date(dateIn) >= new Date(dateOut)
    ) {
      return;
    }

    // Main structure of the reservation list
    const liElement = document.createElement("li");
    const article = document.createElement("article");
    liElement.classList.add("reservation-content");

    // Create the new elements
    const h3 = document.createElement("h3");
    const dateInP = document.createElement("p");
    const dateOutP = document.createElement("p");
    const peopleCountP = document.createElement("p");

    //Create Edit and Continue buttons and add classes to them
    const editBtn = document.createElement("button");
    const continueBtn = document.createElement("button");
    editBtn.classList.add("edit-btn");
    continueBtn.classList.add("continue-btn");

    editBtn.textContent = "Edit";
    continueBtn.textContent = "Continue";

    //Set the text content of the elements
    h3.textContent = `Name: ${firstName} ${lastName}`;
    dateInP.textContent = `From date: ${dateIn}`;
    dateOutP.textContent = `To date: ${dateOut}`;
    peopleCountP.textContent = `For ${people} people`;

    //Append elemets to article element
    article.appendChild(h3);
    article.appendChild(dateInP);
    article.appendChild(dateOutP);
    article.appendChild(peopleCountP);

    //Append article and buttons to the list element
    liElement.appendChild(article);
    liElement.appendChild(editBtn);
    liElement.appendChild(continueBtn);

    //Append the list element to the info list
    infoList.appendChild(liElement);

    //Disable button "Next"
    nextBtn.disabled = true;

    editBtn.addEventListener("click", onEdit);
    function onEdit() {
      //Load all the information back to the input fields
      firstNameInput.value = firstName;
      lastNameInput.value = lastName;
      dateInInput.value = dateIn;
      dateOutInput.value = dateOut;
      peopleCountInput.value = people;

      //Remove the list element from the reservation list
      liElement.remove();

      //Enable button "Next"
      nextBtn.disabled = false;
    }

    continueBtn.addEventListener("click", onContinue);
    function onContinue() {
      let liElementConfirm = document.createElement("li");
      liElementConfirm.classList.add("reservation-content");

      let articleConfirm = document.createElement("article");
      articleConfirm = article;

      let confirmBtn = document.createElement("button");
      confirmBtn.classList.add("confirm-btn");
      confirmBtn.textContent = "Confirm";

      let cancelBtn = document.createElement("button");
      cancelBtn.classList.add("cancel-btn");
      cancelBtn.textContent = "Cancel";

      liElementConfirm.appendChild(articleConfirm);
      liElementConfirm.appendChild(confirmBtn);
      liElementConfirm.appendChild(cancelBtn);
      liElement.remove();

      confirmList.appendChild(liElementConfirm);

      confirmBtn.addEventListener("click", onConfirm);
      function onConfirm() {
        liElementConfirm.remove();
        nextBtn.disabled = false;

        verification.classList.add("reservation-confirmed");
        verification.textContent = "Confirmed.";
      }

      cancelBtn.addEventListener("click", onCancel);
      function onCancel() {
        confirmList.removeChild(liElementConfirm);
        nextBtn.disabled = false;

        verification.classList.add("reservation-canceled");
        verification.textContent = "Cancelled.";
      }
    }
  }

  function resetInput() {
    firstNameInput.value = "";
    lastNameInput.value = "";
    dateInInput.value = "";
    dateOutInput.value = "";
    peopleCountInput.value = "";
  }
}
