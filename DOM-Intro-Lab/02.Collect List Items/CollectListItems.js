function extractText() {
  let items = Array.from(document.querySelectorAll("li"));
  let result = items.map((e) => e.textContent);
  document.getElementById("result").textContent = result;
}
