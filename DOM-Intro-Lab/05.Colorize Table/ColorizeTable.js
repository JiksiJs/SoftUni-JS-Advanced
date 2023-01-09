function colorize() {
  let rows = Array.from(document.querySelectorAll("tr:nth-child(even)"));

  rows.forEach((e) => (e.style.background = "Teal"));
}
