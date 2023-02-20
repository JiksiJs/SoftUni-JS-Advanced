function deleteByEmail() {
  const input = document.querySelector("input[type=text]").value;
  let rows = document.querySelectorAll("tbody tr");
  let result = document.getElementById("result");

  for (let row of rows) {
    if (row.lastElementChild.textContent.includes(input)) {
      row.remove();
      result.textContent = "Deleted";
    } else {
      result.textContent = "Not found.";
    }
  }
}
