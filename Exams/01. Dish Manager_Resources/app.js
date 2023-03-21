window.addEventListener("load", solve);

function solve() {
  let firstNameInput = document.getElementById("first-name");
  let lastNameInput = document.getElementById("last-name");
  let ageInput = document.getElementById("age");
  let descriptionInput = document.getElementById("task");
  let genderSelect = document.getElementById("genderSelect");
  const progressList = document.getElementById("in-progress");
  const spanCount = document.getElementById("progress-count");
  const finishedList = document.getElementById("finished");

  const submitBtn = document.getElementById("form-btn");
  submitBtn.addEventListener("click", onSubmit);
  submitBtn.addEventListener("click", resetInput);

  function onSubmit(e) {
    e.preventDefault();
    const name = firstNameInput.value;
    const lastName = lastNameInput.value;
    const age = ageInput.value;
    const description = descriptionInput.value;
    const gender = genderSelect.value;

    if (name == "" || lastName == "" || age == "" || description == "") {
      return;
    }

    const article = document.createElement("article");
    const liElement = document.createElement("li");
    liElement.classList.add("each-line");

    const h4 = document.createElement("h4");
    const genderAgeP = document.createElement("p");
    const descriptionP = document.createElement("p");

    h4.textContent = `${name} ${lastName}`;
    genderAgeP.textContent = `${gender}, ${age}`;
    descriptionP.textContent = description;

    const editBtn = document.createElement("button");
    editBtn.classList.add("edit-btn");
    editBtn.textContent = "Edit";

    const completeBtn = document.createElement("button");
    completeBtn.classList.add("complete-btn");
    completeBtn.textContent = "Mark as complete";

    article.appendChild(h4);
    article.appendChild(genderAgeP);
    article.appendChild(descriptionP);

    liElement.appendChild(article);
    liElement.appendChild(editBtn);
    liElement.appendChild(completeBtn);
    progressList.appendChild(liElement);

    spanCount.textContent = Number.parseInt(spanCount.textContent) + 1;

    editBtn.addEventListener("click", onEdit);
    completeBtn.addEventListener("click", onFinish);

    function onEdit() {
      firstNameInput.value = name;
      lastNameInput.value = lastName;
      ageInput.value = age;
      descriptionInput.value = description;

      progressList.removeChild(liElement);
      spanCount.textContent = Number.parseInt(spanCount.textContent) - 1;
    }

    function onFinish() {
      progressList.removeChild(liElement);
      finishedList.appendChild(liElement);
      spanCount.textContent = Number.parseInt(spanCount.textContent) - 1;

      liElement.removeChild(editBtn);
      liElement.removeChild(completeBtn);
    }

    const clearBtn = document.getElementById("clear-btn");
    clearBtn.addEventListener("click", onClear);

    function onClear() {
      finishedList.removeChild(liElement);
    }
  }

  function resetInput() {
    firstNameInput.value = "";
    lastNameInput.value = "";
    ageInput.value = "";
    descriptionInput.value = "";
  }
}
