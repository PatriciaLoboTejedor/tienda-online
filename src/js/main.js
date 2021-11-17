"use strict";

console.log(">> Ready :)");

class Main {
  constructor() {
    this.products = [];
    this.min = 0;
    this.max = 5;
  }

  async init() {
    this.initListenersInput();
    this.products = await fetch("../assets/data/products.json")
      .then((data) => data.json())
      .then((res) => res.products);
    this.products.forEach((card) => {
      this.createCard(card);
    });
    this.initListenerCard();
  }

  initListenerCard() {
    const cards = document.querySelectorAll(".js-buttonDetail");
    cards.forEach((card) => {
      card.addEventListener("click", () => this.navigateDetail(card.id));
    });
  }

  navigateDetail(id) {
    window.location.href = "product.html?id=" + id;
  }

  initListenersInput() {
    const min = document.querySelector("#inputMin");
    const max = document.querySelector("#inputMax");

    min.addEventListener("change", (ev) => {
      this.min = ev.target.value;
      this.changeInput();
    });

    max.addEventListener("change", (ev) => {
      this.max = ev.target.value;
      this.changeInput();
    });
  }

  clearCards() {
    const cards = document.querySelectorAll(".card");
    cards.forEach((cardElement) => {
      cardElement.remove();
    });
  }

  changeInput() {
    const filterProducts = this.products.filter(
      (card) => card.price >= this.min && card.price <= this.max
    );
    this.clearCards();
    filterProducts.forEach((card) => {
      this.createCard(card);
    });
  }

  createCard(data) {
    const container = document.querySelector(".js-container-products");

    const card = document.createElement("div");
    card.setAttribute("class", "card");
    card.setAttribute("style", "width: 14rem");
    card.setAttribute("id", data.id);

    const cardImg = document.createElement("img");
    cardImg.setAttribute("class", "card-img-top");
    cardImg.setAttribute("src", data.img);
    cardImg.setAttribute("alt", data.title);

    const cardBody = document.createElement("div");
    cardBody.setAttribute("class", "card-body");

    const cardTitle = document.createElement("h4");
    cardTitle.setAttribute("class", "card-title");
    cardTitle.innerHTML = data.title;

    const cardText = document.createElement("p");
    cardText.setAttribute("class", "card-text");
    cardText.innerHTML = data.text;

    const cardPrice = document.createElement("h5");
    cardPrice.setAttribute("class", "card-title");
    cardPrice.innerHTML = data.price + "€";

    const cardButton = document.createElement("a");
    cardButton.setAttribute("class", "btn btn-primary js-buttonDetail");
    cardButton.setAttribute("href", "#");
    cardButton.innerHTML = "Detalle";
    cardButton.setAttribute("id", data.id);

    cardBody.appendChild(cardTitle);
    cardBody.appendChild(cardText);
    cardBody.appendChild(cardPrice);
    cardBody.appendChild(cardButton);

    card.appendChild(cardImg);
    card.appendChild(cardBody);

    container.appendChild(card);
  }
}

const main = new Main();
main.init();
