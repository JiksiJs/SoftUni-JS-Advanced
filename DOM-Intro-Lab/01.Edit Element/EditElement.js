function editElement(element, match, replacer) {
  let text = element.textContent;
  let result = text.split(match).join(replacer);
  document.getElementById("e1").textContent = result;
}
