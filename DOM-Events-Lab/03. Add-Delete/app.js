function addItem() {
  const input = document.getElementById("newItemText").value;
  const list = document.getElementById("items");
  let newList = document.createElement("li");
  newList.textContent = input;
  list.appendChild(newList);

  let deleteBtn = document.createElement("a");
  deleteBtn.textContent = "[Delete]";
  deleteBtn.href = "#";
  newList.appendChild(deleteBtn);

  deleteBtn.addEventListener("click", deleteList);

  function deleteList() {
    newList.remove();
  }
}
