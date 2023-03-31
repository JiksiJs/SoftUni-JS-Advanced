window.addEventListener("load", solve);

function solve() {
  const firstNameInput = document.getElementById("first-name");
  const lastNameInput = document.getElementById("last-name");
  const peopleCountInput = document.getElementById("people-count");
  const dateInput = document.getElementById("from-date");
  const daysInput = document.getElementById("days-count");
  const nextBtn = document.getElementById("next-btn");
  const ticketList = document.querySelector(".ticket-info-list");
  const confirmTicket = document.querySelector(".confirm-ticket");
  const mainDiv = document.getElementById("main");

  nextBtn.addEventListener("click", onCreate);
  nextBtn.addEventListener("click", resetInput);

  function onCreate(e) {
    e.preventDefault();
    let firstName = firstNameInput.value;
    let lastName = lastNameInput.value;
    let peopleCount = peopleCountInput.value;
    let date = dateInput.value;
    let days = daysInput.value;

    if (
      firstName == "" ||
      lastName == "" ||
      peopleCount == "" ||
      date == "" ||
      days == ""
    ) {
      return;
    }

    const liElement = document.createElement("li");
    liElement.classList.add("ticket");
    const article = document.createElement("article");

    const nameElement = document.createElement("h3");
    nameElement.textContent = `Name: ${firstName} ${lastName}`;

    const dateElement = document.createElement("p");
    dateElement.textContent = `From date: ${date}`;

    const daysElement = document.createElement("p");
    daysElement.textContent = `For ${days} days`;

    const peopleElement = document.createElement("p");
    peopleElement.textContent = `For ${peopleCount} people`;

    const editBtn = document.createElement("button");
    editBtn.classList.add("edit-btn");
    editBtn.textContent = "Edit";

    const continueBtn = document.createElement("button");
    continueBtn.classList.add("continue-btn");
    continueBtn.textContent = "Continue";

    article.appendChild(nameElement);
    article.appendChild(dateElement);
    article.appendChild(daysElement);
    article.appendChild(peopleElement);
    liElement.appendChild(article);
    liElement.appendChild(editBtn);
    liElement.appendChild(continueBtn);

    ticketList.appendChild(liElement);
    nextBtn.disabled = true;

    editBtn.addEventListener("click", onEdit);
    continueBtn.addEventListener("click", onContinue);

    function onEdit() {
      firstNameInput.value = firstName;
      lastNameInput.value = lastName;
      peopleCountInput.value = peopleCount;
      dateInput.value = date;
      daysInput.value = days;

      liElement.remove();
      nextBtn.disabled = false;
    }

    function onContinue() {
      liElement.remove();
      confirmTicket.appendChild(liElement);
      liElement.classList.remove("ticket");
      liElement.classList.add("ticket-content");
      editBtn.remove();
      continueBtn.remove();

      const confirmBtn = document.createElement("button");
      confirmBtn.classList.add("confirm-btn");
      confirmBtn.textContent = "Confirm";
      const cancelBtn = document.createElement("button");
      cancelBtn.classList.add("cancel-btn");
      cancelBtn.textContent = "Cancel";

      liElement.appendChild(confirmBtn);
      liElement.appendChild(cancelBtn);

      cancelBtn.addEventListener("click", onCancel);
      confirmBtn.addEventListener("click", onConfirm);

      function onCancel() {
        liElement.remove();
        nextBtn.disabled = false;
      }

      function onConfirm() {
        mainDiv.remove();

        const text = document.createElement("h1");
        text.id = "thank-you";
        text.textContent = "Thank you, have a nice day!";

        const backBtn = document.createElement("button");
        backBtn.id = "back-btn";
        backBtn.textContent = "Back";
        body.appendChild(text);
        body.appendChild(backBtn);

        backBtn.addEventListener("click", onBack);

        function onBack() {
          location.reload();
          //    text.remove();
          //   backBtn.remove();
          //   body.appendChild(mainDiv);
        }
      }
    }
  }

  function resetInput() {
    firstNameInput.value = "";
    lastNameInput.value = "";
    peopleCountInput.value = "";
    dateInput.value = "";
    daysInput.value = "";
  }
}
