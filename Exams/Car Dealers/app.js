window.addEventListener("load", solve);

function solve() {
  const makeInput = document.getElementById("make");
  const modelInput = document.getElementById("model");
  const yearInput = document.getElementById("year");
  const fuelInput = document.getElementById("fuel");
  const originalCostInput = document.getElementById("original-cost");
  const sellingPriceInput = document.getElementById("selling-price");
  const publishBtn = document.getElementById("publish");
  const tableBody = document.getElementById("table-body");
  const soldCars = document.getElementById("cars-list");
  const profitEl = document.getElementById("profit");

  publishBtn.addEventListener("click", onPublish);
  publishBtn.addEventListener("click", resetInput);

  function onPublish(e) {
    e.preventDefault();
    let make = makeInput.value;
    let model = modelInput.value;
    let year = yearInput.value;
    let fuel = fuelInput.value;
    let originalCost = originalCostInput.value;
    let sellingPrice = sellingPriceInput.value;

    if (
      make == "" ||
      model == "" ||
      year == "" ||
      fuel == "" ||
      originalCost == "" ||
      sellingPrice == "" ||
      originalCost > sellingPrice
    ) {
      return;
    }

    const tableRow = document.createElement("tr");
    tableRow.classList.add("row");

    const makeData = document.createElement("td");
    const modelData = document.createElement("td");
    const yearData = document.createElement("td");
    const fuelData = document.createElement("td");
    const originalPriceData = document.createElement("td");
    const sellingPriceData = document.createElement("td");
    const buttonsData = document.createElement("td");
    const editBtn = document.createElement("button");
    const sellBtn = document.createElement("button");

    makeData.textContent = `${make}`;
    modelData.textContent = `${model}`;
    yearData.textContent = `${year}`;
    fuelData.textContent = `${fuel}`;
    originalPriceData.textContent = `${originalCost}`;
    sellingPriceData.textContent = `${sellingPrice}`;
    editBtn.textContent = "Edit";
    editBtn.classList.add("action-btn");
    editBtn.classList.add("edit");
    sellBtn.textContent = "Sell";
    sellBtn.classList.add("action-btn");
    sellBtn.classList.add("sell");

    buttonsData.appendChild(editBtn);
    buttonsData.appendChild(sellBtn);

    tableRow.appendChild(makeData);
    tableRow.appendChild(modelData);
    tableRow.appendChild(yearData);
    tableRow.appendChild(fuelData);
    tableRow.appendChild(originalPriceData);
    tableRow.appendChild(sellingPriceData);
    tableRow.appendChild(buttonsData);

    tableBody.appendChild(tableRow);

    editBtn.addEventListener("click", onEdit);
    sellBtn.addEventListener("click", onSell);

    function onEdit() {
      makeInput.value = make;
      modelInput.value = model;
      yearInput.value = year;
      fuelInput.value = fuel;
      originalCostInput.value = originalCost;
      sellingPriceInput.value = sellingPrice;

      tableRow.remove();
    }

    function onSell() {
      const listElement = document.createElement("li");
      listElement.classList.add("each-list");

      const makeModelEl = document.createElement("span");
      const yearEL = document.createElement("span");
      const priceDiffEl = document.createElement("span");

      let priceDiff = Number(sellingPrice) - Number(originalCost);

      makeModelEl.textContent = `${make} ${model}`;
      yearEL.textContent = `${year}`;
      priceDiffEl.textContent = `${priceDiff}`;

      listElement.appendChild(makeModelEl);
      listElement.appendChild(yearEL);
      listElement.appendChild(priceDiffEl);

      soldCars.appendChild(listElement);
      tableRow.remove();

      let sum = Number(profitEl.textContent);
      profitEl.textContent = (sum + priceDiff).toFixed(2);
    }
  }

  function resetInput() {
    makeInput.value = "";
    modelInput.value = "";
    yearInput.value = "";
    fuelInput.value = "";
    originalCostInput.value = "";
    sellingPriceInput.value = "";
  }
}
