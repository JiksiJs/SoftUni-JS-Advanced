function solve() {
  document.querySelector("#searchBtn").addEventListener("click", onClick);

  function onClick() {
    let rows = Array.from(document.querySelectorAll("tbody tr"));
    let match = document.getElementById("searchField").value;

    for (let row of rows) {
      if (row.textContent.includes(match)) {
        row.classList.add("select");
      } else {
        row.classList.remove("select");
      }
    }
    match.textContent = "";
  }
}
