"use strict";

console.log(">> Ready :)");

class Detail {
  constructor() {
    this.product = undefined;
  }

  async init() {
    this.product = await fetch("../assets/data/products.json")
      .then((data) => data.json())
      .then((res) => res.product);
    console.log(this.product);
    this.createDetailCard(product);
  }

  createDetailCard(data) {
    const container = document.querySelector(".js-detail-product");

    const card = document.createElement("div");
    //Ficha de producto

    container.appendChild(detailProduct);
  }
}

const detail = new Detail();
