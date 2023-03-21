window.addEventListener("load", solve);

function solve() {
  let firstNameInput = document.getElementById("first-name");
  let lastNameInput = document.getElementById("last-name");
  let ageInput = document.getElementById("age");
  let titleInput = document.getElementById("story-title");
  let genreInput = document.getElementById("genre");
  let storyInput = document.getElementById("story");
  const previewList = document.getElementById("preview-list");
  const mainDiv = document.getElementById("main");

  const publishBtn = document.getElementById("form-btn");
  publishBtn.addEventListener("click", onPublish);
  publishBtn.addEventListener("click", resetInput);

  function onPublish(e) {
    e.preventDefault();
    const name = firstNameInput.value;
    const surname = lastNameInput.value;
    const age = ageInput.value;
    const title = titleInput.value;
    const story = storyInput.value;
    const genre = genreInput.value;

    if (
      name == "" ||
      surname == "" ||
      age == "" ||
      title == "" ||
      story == ""
    ) {
      return;
    }

    const element = document.createElement("article");
    const li = document.createElement("li");
    li.classList.add("story-info");
    element.innerHTML = `<h4>Name: ${name} ${surname}</h4>
    <p>Age: ${age}</p>
    <p>Title: ${title}</p>
    <p>Genre: ${genre}</p>
    <p>${story}</p>
    `;

    const saveBtn = document.createElement("button");
    const editBtn = document.createElement("button");
    const deleteBtn = document.createElement("button");

    editBtn.addEventListener("click", onEdit);
    saveBtn.addEventListener("click", onSave);
    deleteBtn.addEventListener("click", onDelete);

    saveBtn.textContent = "Save Story";
    editBtn.textContent = "Edit Story";
    deleteBtn.textContent = "Delete Story";

    saveBtn.classList.add("save-btn");
    editBtn.classList.add("edit-btn");
    deleteBtn.classList.add("delete-btn");

    li.appendChild(element);
    li.appendChild(saveBtn);
    li.appendChild(editBtn);
    li.appendChild(deleteBtn);
    previewList.appendChild(li);
    publishBtn.disabled = true;

    function onEdit() {
      firstNameInput.value = name;
      lastNameInput.value = surname;
      ageInput.value = age;
      titleInput.value = title;
      storyInput.value = story;
      li.remove();
      publishBtn.disabled = false;
    }

    function onSave() {
      mainDiv.replaceChildren();
      const message = document.createElement("h1");
      message.textContent = "Your scary story is saved!";
      mainDiv.appendChild(message);
    }

    function onDelete() {
      previewList.removeChild(li);
      publishBtn.disabled = false;
    }
  }

  function resetInput() {
    firstNameInput.value = "";
    lastNameInput.value = "";
    ageInput.value = "";
    titleInput.value = "";
    storyInput.value = "";
  }
}
