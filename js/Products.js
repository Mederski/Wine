const products = document.querySelector(".products__item-yellow");
const productsLine = document.querySelector(".products-all");

productsLine.addEventListener("click", () => {
    products.classList.toggle("active")
    document.querySelector(".products-item").classList.toggle("active")
});