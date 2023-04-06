window.addEventListener("load", solve);

function solve() {
  const gemNameInput = document.getElementById("gem-name");
  const colorInput = document.getElementById("color");
  const caratsInput = document.getElementById("carats");
  const priceInput = document.getElementById("price");
  const typeInput = document.getElementById("type");
  const addBtn = document.getElementById("add-btn");
  const previewList = document.getElementById("preview-list");
  const collection = document.getElementById("collection");

  addBtn.addEventListener("click", onAdd);
  addBtn.addEventListener("click", resetInput);

  function onAdd() {
    let gemName = gemNameInput.value;
    let color = colorInput.value;
    let carats = caratsInput.value;
    let price = priceInput.value;
    let type = typeInput.value;

    if (
      gemName == "" ||
      color == "" ||
      carats == "" ||
      price == "" ||
      type == ""
    ) {
      return;
    }

    const liElement = document.createElement("li");
    liElement.classList.add("gem-info");

    const article = document.createElement("article");
    const heading = document.createElement("h4");
    const colorParagraph = document.createElement("p");
    const caratsParagraph = document.createElement("p");
    const priceParagraph = document.createElement("p");
    const typeParagraph = document.createElement("p");

    heading.textContent = `${gemName}`;
    colorParagraph.textContent = `Color: ${color}`;
    caratsParagraph.textContent = `Carats: ${carats}`;
    priceParagraph.textContent = `Price: ${price} $`;
    typeParagraph.textContent = `Type: ${type}`;

    article.appendChild(heading);
    article.appendChild(colorParagraph);
    article.appendChild(caratsParagraph);
    article.appendChild(priceParagraph);
    article.appendChild(typeParagraph);

    const saveBtn = document.createElement("button");
    saveBtn.classList.add("save-btn");
    saveBtn.textContent = "Save to Collection";

    const editBtn = document.createElement("button");
    editBtn.classList.add("edit-btn");
    editBtn.textContent = "Edit Information";

    const cancelBtn = document.createElement("button");
    cancelBtn.classList.add("cancel-btn");
    cancelBtn.textContent = "Cancel";

    liElement.appendChild(article);
    liElement.appendChild(saveBtn);
    liElement.appendChild(editBtn);
    liElement.appendChild(cancelBtn);

    previewList.appendChild(liElement);
    addBtn.disabled = true;

    editBtn.addEventListener("click", onEdit);
    saveBtn.addEventListener("click", onSave);
    cancelBtn.addEventListener("click", onCancel);

    function onEdit() {
      gemNameInput.value = gemName;
      colorInput.value = color;
      caratsInput.value = carats;
      priceInput.value = price;
      typeInput.value = type;

      liElement.remove();
      addBtn.disabled = false;
    }

    function onSave() {
      const newList = document.createElement("li");
      const text = document.createElement("p");
      text.classList.add("collection-item");
      text.textContent = `${gemName} - Color: ${color}/ Carats: ${carats}/ Price: ${price}$/ Type: ${type}`;

      newList.appendChild(text);
      collection.appendChild(newList);

      liElement.remove();
      addBtn.disabled = false;
    }

    function onCancel() {
      liElement.remove();
      addBtn.disabled = false;
    }
  }

  function resetInput() {
    gemNameInput.value = "";
    colorInput.value = "";
    caratsInput.value = "";
    priceInput.value = "";
    typeInput.value = "";
  }
}
