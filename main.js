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
const renderDivs = (item) => {
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
  productPrice.appendChild(currency);
  main.appendChild(div);
  div.appendChild(productName);
  div.appendChild(productPrice);
  return div;
};
const renderProductsInCart = () => {
  cart.textContent = "";
  productsInCart.forEach((element) => {
    const div = document.createElement("div");
    div.classList.add("cart__element");
    div.textContent = element.name + " " + element.price;
    cart.appendChild(div);
    const buttonDel = document.createElement("button");
    buttonDel.classList.add("product__rm-from-cart");
    buttonDel.textContent = "Usuń";
    buttonDel.addEventListener("click", (e) => {
      e.target.parentNode.remove();
      productsInCart.splice(
        productsInCart.indexOf(e.target.parentNode.firstChild.textContent),
        1
      );
      renderProductsInCart();
      renderCartInMainComponent();
    });
    div.appendChild(buttonDel);
  });
};
const renderCartInMainComponent = () => {
  main.innerHTML = "";
  productsInCart.forEach((item) => {
    const buttonDel = document.createElement("button");
    buttonDel.classList.add("product__rm-from-cart");
    buttonDel.textContent = "Usuń";
    buttonDel.addEventListener("click", (e) => {
      e.target.parentNode.remove();
      productsInCart.splice(
        productsInCart.indexOf(e.target.parentNode.firstChild.textContent),
        1
      );
      renderProductsInCart();
    });
    renderDivs(item).appendChild(buttonDel);

    // div.appendChild(buttonDel);
  });
  const previousButton = document.createElement("button");
  previousButton.textContent = "Cofnij do sklepu";
  previousButton.classList.add("button__prev");
  main.appendChild(previousButton);
  previousButton.addEventListener("click", () => {
    main.innerHTML = "";
    renderListOfProducts();
  });
  console.log(
    "Wartość koszyka " +
      productsInCart.reduce((acc, currentVal) => {
        return acc.price + currentVal.price;
      })
  );
};
cartSummary.addEventListener("click", renderCartInMainComponent);
const addToCart = (name, price) => {
  //   console.log(name, +price, "działa");
  price = +price;
  if (productsInCart.find((el) => el.name === name)) {
    return;
  }

  productsInCart.push({ name, price });

  renderProductsInCart();
};
const renderListOfProducts = () => {
  productList.forEach((item) => {
    // const div = document.createElement("div");
    // div.classList.add("product");
    // const productName = document.createElement("h3");
    // productName.classList.add("product__name");
    // productName.textContent = item.name;

    // const productPrice = document.createElement("p");
    // productPrice.classList.add("product__price");
    // productPrice.textContent = item.price;
    // const currency = document.createElement("span");
    // currency.classList.add("product__currency");
    // currency.textContent = "zł";

    const buttonAdd = document.createElement("button");

    buttonAdd.classList.add("product__add-to-cart");
    buttonAdd.textContent = "Dodaj do koszyka";
    buttonAdd.addEventListener("click", () => addToCart(item.name, item.price));
    renderDivs(item).appendChild(buttonAdd);

    // main.appendChild(div);
    // div.appendChild(productName);
    // div.appendChild(productPrice);
    // div.appendChild(buttonAdd);
  });
};

renderListOfProducts();
