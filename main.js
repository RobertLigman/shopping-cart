const main = document.querySelector(".main");
const cart = document.querySelector(".cart");
const cartSummary = document.querySelector(".cart__summary");
const productList = [
  { name: "Produkt1", price: "31" },
  { name: "Prod2", price: "2223" },
  { name: "Prod3", price: "2113" },
  { name: "Prod4", price: "2223" },
];
const productsInCart = [];
const renderProductsInCart = () => {
  cart.textContent = "";
  productsInCart.forEach((element) => {
    const div = document.createElement("div");
    div.classList.add("cart__element");
    div.textContent = element.name + " " + element.price;
    cart.appendChild(div);
  });
};
cartSummary.addEventListener("click", () => {
  main.innerHTML = "";
  productsInCart.forEach((item) => {
    const div = document.createElement("div");
    div.classList.add("product");
    const productName = document.createElement("h3");
    productName.classList.add("product__name");
    productName.textContent = item.name;

    const productPrice = document.createElement("p");
    productPrice.classList.add("product__price");
    productPrice.textContent = item.price;
    const currency = document.createElement("span");
    currency.classList.add("product__currency");
    currency.textContent = "zł";

    const buttonDel = document.createElement("button");
    buttonDel.classList.add("product__rm-from-cart");
    buttonDel.textContent = "Usuń";
    buttonDel.addEventListener("click", (e) => {
      e.target.parentNode.remove();
    });
    main.appendChild(div);
    div.appendChild(productName);
    div.appendChild(productPrice);
    div.appendChild(buttonDel);
  });
  console.log(
    "Wartość koszyka " +
      productsInCart.reduce((acc, currentVal) => {
        return acc.price + currentVal.price;
      })
  );
});
const addToCart = (name, price) => {
  //   console.log(name, +price, "działa");
  price = +price;
  if (productsInCart.find((el) => el.name === name)) {
    return;
  }

  productsInCart.push({ name, price });

  renderProductsInCart();
};
productList.forEach((item) => {
  const div = document.createElement("div");
  div.classList.add("product");
  const productName = document.createElement("h3");
  productName.classList.add("product__name");
  productName.textContent = item.name;

  const productPrice = document.createElement("p");
  productPrice.classList.add("product__price");
  productPrice.textContent = item.price;
  const currency = document.createElement("span");
  currency.classList.add("product__currency");
  currency.textContent = "zł";

  const buttonAdd = document.createElement("button");
  buttonAdd.classList.add("product__add-to-cart");
  buttonAdd.textContent = "Dodaj do koszyka";
  buttonAdd.addEventListener("click", () => addToCart(item.name, item.price));

  productPrice.appendChild(currency);
  main.appendChild(div);
  div.appendChild(productName);
  div.appendChild(productPrice);
  div.appendChild(buttonAdd);
});
