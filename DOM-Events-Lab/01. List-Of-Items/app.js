function addItem() {
  const input = document.getElementById("newItemText").value;
  const list = document.getElementById("items");
  let newList = document.createElement("li");
  newList.textContent = input;
  list.appendChild(newList);
}
