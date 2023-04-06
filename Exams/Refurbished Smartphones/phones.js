class RefurbishedSmartphones {
  constructor(retailer) {
    this.retailer = retailer;
    this.availableSmartphones = [];
    this.soldSmartphones = [];
    this.revenue = 0;
  }

  addSmartphone(model, storage, price, condition) {
    if (model == "" || storage < 0 || price < 0 || condition == "") {
      throw new Error("Invalid smartphone!");
    }

    this.availableSmartphones.push({ model, storage, price, condition });

    return `New smartphone added: ${model} / ${storage} GB / ${condition} condition - ${price.toFixed(
      2
    )}$`;
  }

  sellSmartphone(model, desiredStorage) {
    let index = this.availableSmartphones.findIndex((p) => p.model === model);
    let match = this.availableSmartphones[index];

    if (match == undefined) {
      throw new Error(`${model} was not found!`);
    }

    const storageDelta = desiredStorage - match.storage;

    const sold = {
      model: match.model,
      storage: match.storage,
    };

    if (match.storage >= desiredStorage) {
      sold.soldPrice = match.price;
    } else if (storageDelta <= 128) {
      sold.soldPrice = match.price * 0.9;
    } else if (storageDelta > 128) {
      sold.soldPrice = match.price * 0.8;
    }

    this.soldSmartphones.push(sold);
    this.availableSmartphones.splice(index, 1);

    this.revenue += sold.soldPrice;
    return `${model} was sold for ${sold.soldPrice.toFixed(2)}$`;
  }

  upgradePhones() {
    if (this.availableSmartphones.length == 0) {
      throw new Error("There are no available smartphones!");
    }

    let newStorage = this.availableSmartphones.map((p) => p.storage * 2);

    const result = this.availableSmartphones.map(
      (p) =>
        `${p.model} / ${newStorage.shift()} GB / ${
          p.condition
        } condition / ${p.price.toFixed(2)}$`
    );
    result.unshift("Upgraded Smartphones:");
    return result.join("\n");
  }

  salesJournal(criteria) {
    if (criteria == "storage") {
      this.soldSmartphones.sort((a, b) => b.storage - a.storage);
    } else if (criteria == "model") {
      this.soldSmartphones.sort((a, b) => a.model.localeCompare(b.model));
    } else {
      throw new Error("Invalid criteria!");
    }

    const result = this.soldSmartphones.map(
      (p) => `${p.model} / ${p.storage} GB / ${p.soldPrice.toFixed(2)}$`
    );
    result.unshift(`${this.soldSmartphones.length} smartphones sold:`);
    result.unshift(
      `${this.retailer} has a total income of ${this.revenue.toFixed(2)}$`
    );

    return result.join("\n");
  }
}

let retailer = new RefurbishedSmartphones("SecondLife Devices");
retailer.addSmartphone("Samsung S20 Ultra", 128, 1000, "good");
console.log(retailer.sellSmartphone("Samsung S20 Ultra", 560));
