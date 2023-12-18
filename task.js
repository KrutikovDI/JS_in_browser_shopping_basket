const dec = document.getElementsByClassName("product__quantity-control_dec");
for (let i = 0; i < dec.length; i++) {
  dec[i].addEventListener("click", (e) => {
    e.currentTarget.nextElementSibling.textContent++;
  });
}
const inc = document.getElementsByClassName("product__quantity-control_inc");
for (let i = 0; i < dec.length; i++) {
  inc[i].addEventListener("click", (e) => {
    if (e.currentTarget.previousElementSibling.textContent > 1) {
      e.currentTarget.previousElementSibling.textContent--;
    }
  });
}

const prodAdd = document.getElementsByClassName("product__add");
for (let i = 0; i < prodAdd.length; i++) {
  prodAdd[i].addEventListener("click", (e) => {
    let parentEl = e.currentTarget.parentElement.parentElement.parentElement;
    let dataID = parentEl.dataset.id;
    let src = parentEl.children[1].src;
    let numb = e.currentTarget.previousElementSibling.children[1].textContent;
    const cart = document.querySelector(".cart__products");
    let flag = 0;
    if (cart.children.length == 0) {
      cart.insertAdjacentHTML(
        "beforeEnd",
        `<div class="cart__product" data-id=${dataID}><img class="cart__product-image" src=${src}><div class="cart__product-count">${numb}</div></div>`
      );
    } else {
      let prod = [...cart.children].find((item) => item.dataset.id == dataID);
      if (prod == undefined) {
        cart.insertAdjacentHTML(
          "beforeEnd",
          `<div class="cart__product" data-id=${dataID}><img class="cart__product-image" src=${src}><div class="cart__product-count">${numb}</div></div>`
        );
      } else {
        prod.children[1].textContent =
          Number(prod.children[1].textContent) + Number(numb);
      }
    }
  });
}
