function search() {
  let towns = Array.from(document.querySelectorAll("li"));
  let searchInput = document.getElementById("searchText").value;
  let counter = 0;

  for (let town of towns) {
    town.style.fontWeight = "normal";
    town.style.textDecoration = "none";

    if (town.textContent.includes(searchInput)) {
      town.style.fontWeight = "bold";
      town.style.textDecoration = "underline";
      counter++;
    }
  }
  document.getElementById("result").textContent = `${counter} matches found`;
}
