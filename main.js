const main = document.querySelector(".main");
const cart = document.querySelector(".cart");
const productList = [
  { name: "Produkt1", price: "31" },
  { name: "Prod2", price: "2223" },
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
  const buttonAdd = document.createElement("button");
  buttonAdd.classList.add("product__add-to-cart");
  buttonAdd.textContent = "Dodaj do koszyka";
  buttonAdd.addEventListener("click", () =>
    addToCart(productName.textContent, productPrice.textContent)
  );
  main.appendChild(div);
  div.appendChild(productName);
  div.appendChild(productPrice);
  div.appendChild(buttonAdd);
});