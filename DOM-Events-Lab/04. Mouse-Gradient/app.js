function attachGradientEvents() {
  const gradient = document.getElementById("gradient");
  gradient.addEventListener("mousemove", onMove);

  function onMove(event) {
    const x = event.offsetX;
    const percent = Math.floor((x / 300) * 100);
    document.getElementById("result").textContent = percent + "%";
  }
}
