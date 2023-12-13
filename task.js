const dec = document.getElementsByClassName("product__quantity-control_dec");
for (i = 0; i < dec.length; i++) {
  dec[i].addEventListener("click", (e) => {
    e.currentTarget.nextElementSibling.textContent++;
  });
} 

const inc = document.getElementsByClassName("product__quantity-control_inc");
for (i = 0; i < dec.length; i++) {
  inc[i].addEventListener("click", (e) => {
    if (e.currentTarget.previousElementSibling.textContent > 1) {
      e.currentTarget.previousElementSibling.textContent--;
    }
  });
}
 
const prodAdd = document.getElementsByClassName("product__add");
for (i = 0; i < prodAdd.length; i++) {
  prodAdd[i].addEventListener("click", (e) => {
    let parentEl = e.currentTarget.parentElement.parentElement.parentElement;
    let dataID = parentEl.dataset.id;
    let src = parentEl.children[1].src;
    let numb = e.currentTarget.previousElementSibling.children[1].textContent;
    const cart = document.querySelector(".cart__products");
    const div1 = document.createElement("DIV");
    div1.className = "cart__product";
    div1.dataset.id = dataID;
    cart.appendChild(div1);
    const img = document.createElement("img");
    img.className = "cart__product-image";
    img.src = src;
    div1.appendChild(img);
    const div2 = document.createElement("DIV");
    div2.className = "cart__product-count";
    div2.textContent = numb;
    div1.appendChild(div2);
  });
}