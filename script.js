const state = {
  cart: JSON.parse(localStorage.getItem("ferFeryCart")) || [],
  pinned: JSON.parse(localStorage.getItem("ferFeryPinned")) || [],
  currentProduct: null
};


/* =========================
   ELEMENTS
========================= */

const hamburger = document.getElementById("hamburger");
const sideMenu = document.getElementById("sideMenu");
const overlay = document.getElementById("overlay");
const closeMenu = document.getElementById("closeMenu");

const cartButton = document.getElementById("cartButton");
const cartCount = document.getElementById("cartCount");

const search = document.getElementById("search");
const clearSearch = document.getElementById("clearSearch");
const searchResults = document.getElementById("searchResults");

const productModal = document.getElementById("productModal");
const modalClose = document.getElementById("modalClose");
const modalImage = document.getElementById("modalImage");
const modalName = document.getElementById("modalName");
const modalCategory = document.getElementById("modalCategory");
const modalPrice = document.getElementById("modalPrice");
const modalAdd = document.getElementById("modalAdd");

const toast = document.getElementById("toast");


/* =========================
   PRICE
========================= */

function formatPrice(price) {
  return Number(price).toLocaleString("fa-IR") + " تومان";
}


/* =========================
   LOCAL STORAGE
========================= */

function saveCart() {
  localStorage.setItem(
    "ferFeryCart",
    JSON.stringify(state.cart)
  );
}

function savePinned() {
  localStorage.setItem(
    "ferFeryPinned",
    JSON.stringify(state.pinned)
  );
}


/* =========================
   MENU
========================= */

function openMenu() {
  sideMenu.classList.add("active");
  overlay.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeSideMenu() {
  sideMenu.classList.remove("active");
  overlay.classList.remove("active");
  document.body.style.overflow = "";
}

hamburger.addEventListener("click", openMenu);
closeMenu.addEventListener("click", closeSideMenu);
overlay.addEventListener("click", closeSideMenu);


/* =========================
   MENU LINKS
========================= */

document.querySelectorAll(".menu-link").forEach(link => {

  link.addEventListener("click", event => {

    event.preventDefault();

    const targetId = link.getAttribute("href");
    const target = document.querySelector(targetId);

    closeSideMenu();

    if (target) {

      setTimeout(() => {

        target.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });

      }, 150);

    }

  });

});


/* =========================
   PRODUCT CARD
========================= */

function createCard(product) {

  const isPinned =
    state.pinned.includes(product.id);

  return `
    <article class="card">

      <div class="image-box">

        <img
          src="${product.image}"
          alt="${product.name} - ${product.category} - fer fery"
          loading="lazy"
        >

        <button
          class="pin ${isPinned ? "active" : ""}"
          data-pin="${product.id}"
          aria-label="پین کردن محصول"
        >
          ${isPinned ? "📌" : "♡"}
        </button>

      </div>

      <div class="product-info">

        <div class="product-name">
          ${product.name}
        </div>

        <div class="price">
          ${formatPrice(product.price)}
        </div>

        <div class="product-actions">

          <button
            class="view"
            data-view="${product.id}"
          >
            مشاهده محصول
          </button>

          <button
            class="add"
            data-add="${product.id}"
          >
            افزودن به سبد
          </button>

        </div>

      </div>

    </article>
  `;
}


/* =========================
   RENDER PRODUCTS
========================= */

function renderProducts() {

  const categories = {

    "مجلسی": "majlesiGrid",

    "روزمره": "rozmarreGrid",

    "کودک": "koodakGrid",

    // اصلاح شد:
    // پاپیون با products.js یکی است
    "پاپیون": "papionGrid"

  };


  Object.entries(categories).forEach(
    ([category, elementId]) => {

      const element =
        document.getElementById(elementId);

      if (!element) return;


      const categoryProducts =
        products.filter(
          product =>
            product.category === category
        );


      element.innerHTML =
        categoryProducts
          .map(createCard)
          .join("");

    }
  );


  renderPinned();
}


/* =========================
   PINNED
========================= */

function togglePin(id) {

  id = Number(id);

  if (state.pinned.includes(id)) {

    state.pinned =
      state.pinned.filter(
        item => item !== id
      );

    showToast(
      "محصول از پین‌شده‌ها حذف شد"
    );

  } else {

    state.pinned.push(id);

    showToast(
      "محصول به پین‌شده‌ها اضافه شد 📌"
    );

  }

  savePinned();

  renderProducts();
}


function renderPinned() {

  const grid =
    document.getElementById("pinnedGrid");

  const empty =
    document.getElementById("emptyPinned");


  const pinnedProducts =
    products.filter(
      product =>
        state.pinned.includes(product.id)
    );


  if (pinnedProducts.length === 0) {

    grid.innerHTML = "";

    empty.style.display = "block";

    return;

  }


  empty.style.display = "none";


  grid.innerHTML =
    pinnedProducts
      .map(createCard)
      .join("");
}


/* =========================
   CART
========================= */

function addToCart(id) {

  id = Number(id);

  const existing =
    state.cart.find(
      item => item.id === id
    );


  if (existing) {

    existing.quantity++;

  } else {

    state.cart.push({
      id: id,
      quantity: 1
    });

  }


  saveCart();

  renderCart();

  updateCartCount();

  showToast(
    "محصول به سبد خرید اضافه شد 🛍️"
  );
}


function increaseQuantity(id) {

  id = Number(id);

  const item =
    state.cart.find(
      product => product.id === id
    );


  if (!item) return;


  item.quantity++;

  saveCart();

  renderCart();

  updateCartCount();
}


function decreaseQuantity(id) {

  id = Number(id);

  const item =
    state.cart.find(
      product => product.id === id
    );


  if (!item) return;


  item.quantity--;


  if (item.quantity <= 0) {

    state.cart =
      state.cart.filter(
        product => product.id !== id
      );

  }


  saveCart();

  renderCart();

  updateCartCount();
}


function removeFromCart(id) {

  id = Number(id);

  state.cart =
    state.cart.filter(
      product => product.id !== id
    );


  saveCart();

  renderCart();

  updateCartCount();

  showToast("محصول حذف شد");
}


/* =========================
   RENDER CART
========================= */

function renderCart() {

  const container =
    document.getElementById("cartItems");

  const empty =
    document.getElementById("emptyCart");

  const totalBox =
    document.getElementById("cartTotalBox");


  if (state.cart.length === 0) {

    container.innerHTML = "";

    empty.style.display = "block";

    totalBox.hidden = true;

    return;

  }


  empty.style.display = "none";

  totalBox.hidden = false;


  container.innerHTML =
    state.cart
      .map(item => {

        const product =
          products.find(
            product =>
              product.id === item.id
          );


        if (!product) return "";


        return `
          <div class="cart-item">

            <img
              src="${product.image}"
              alt="${product.name}"
            >

            <div class="cart-info">

              <strong>
                ${product.name}
              </strong>

              <div class="cart-price">
                ${formatPrice(product.price)}
              </div>

            </div>

            <div class="quantity">

              <button
                data-increase="${product.id}"
              >
                +
              </button>

              <strong>
                ${item.quantity}
              </strong>

              <button
                data-decrease="${product.id}"
              >
                −
              </button>

            </div>

            <button
              class="remove"
              data-remove="${product.id}"
            >
              حذف
            </button>

          </div>
        `;

      })
      .join("");


  updateTotal();
}


function updateTotal() {

  let total = 0;


  state.cart.forEach(item => {

    const product =
      products.find(
        product =>
          product.id === item.id
      );


    if (product) {

      total +=
        product.price *
        item.quantity;

    }

  });


  document.getElementById(
    "cartTotal"
  ).textContent =
    formatPrice(total);
}


function updateCartCount() {

  const count =
    state.cart.reduce(
      (sum, item) =>
        sum + item.quantity,
      0
    );


  cartCount.textContent =
    count.toLocaleString("fa-IR");
}


/* =========================
   SEARCH
========================= */

search.addEventListener(
  "input",
  () => {

    const query =
      search.value
        .trim()
        .toLowerCase();


    if (!query) {

      searchResults.innerHTML = "";

      searchResults.classList.remove(
        "active"
      );

      return;
    }


    const results =
      products.filter(product => {

        return (
          product.name
            .toLowerCase()
            .includes(query)
          ||
          product.category
            .toLowerCase()
            .includes(query)
        );

      });


    if (results.length === 0) {

      searchResults.innerHTML = `
        <div class="search-result">
          محصولی پیدا نشد.
        </div>
      `;

    } else {

      searchResults.innerHTML =
        results
          .map(product => `
            <div
              class="search-result"
              data-search="${product.id}"
            >

              <img
                src="${product.image}"
                alt="${product.name}"
              >

              <div>

                <strong>
                  ${product.name}
                </strong>

                <small>
                  ${product.category}
                </small>

              </div>

            </div>
          `)
          .join("");

    }


    searchResults.classList.add(
      "active"
    );

  }
);


clearSearch.addEventListener(
  "click",
  () => {

    search.value = "";

    searchResults.innerHTML = "";

    searchResults.classList.remove(
      "active"
    );

    search.focus();

  }
);


/* =========================
   PRODUCT MODAL
========================= */

function openProduct(id) {

  id = Number(id);


  const product =
    products.find(
      item => item.id === id
    );


  if (!product) return;


  state.currentProduct = product;


  modalImage.src =
    product.image;

  modalImage.alt =
    product.name;

  modalName.textContent =
    product.name;

  modalCategory.textContent =
    product.category;

  modalPrice.textContent =
    formatPrice(product.price);


  productModal.classList.add(
    "active"
  );


  productModal.setAttribute(
    "aria-hidden",
    "false"
  );


  document.body.style.overflow =
    "hidden";
}


function closeProduct() {

  productModal.classList.remove(
    "active"
  );


  productModal.setAttribute(
    "aria-hidden",
    "true"
  );


  document.body.style.overflow = "";

  state.currentProduct = null;
}


modalClose.addEventListener(
  "click",
  closeProduct
);


productModal.addEventListener(
  "click",
  event => {

    if (
      event.target ===
      productModal
    ) {

      closeProduct();

    }

  }
);


modalAdd.addEventListener(
  "click",
  () => {

    if (
      state.currentProduct
    ) {

      addToCart(
        state.currentProduct.id
      );

      closeProduct();

    }

  }
);


/* =========================
   GLOBAL CLICK
========================= */

document.addEventListener(
  "click",
  event => {

    const pin =
      event.target.closest(
        "[data-pin]"
      );


    if (pin) {

      togglePin(
        pin.dataset.pin
      );

      return;
    }


    const view =
      event.target.closest(
        "[data-view]"
      );


    if (view) {

      openProduct(
        view.dataset.view
      );

      return;
    }


    const add =
      event.target.closest(
        "[data-add]"
      );


    if (add) {

      addToCart(
        add.dataset.add
      );

      return;
    }


    const increase =
      event.target.closest(
        "[data-increase]"
      );


    if (increase) {

      increaseQuantity(
        increase.dataset.increase
      );

      return;
    }


    const decrease =
      event.target.closest(
        "[data-decrease]"
      );


    if (decrease) {

      decreaseQuantity(
        decrease.dataset.decrease
      );

      return;
    }


    const remove =
      event.target.closest(
        "[data-remove]"
      );


    if (remove) {

      removeFromCart(
        remove.dataset.remove
      );

      return;
    }


    const searchItem =
      event.target.closest(
        "[data-search]"
      );


    if (searchItem) {

      openProduct(
        searchItem.dataset.search
      );

      searchResults.classList.remove(
        "active"
      );

      search.value = "";

    }

  }
);


/* =========================
   CART BUTTON
========================= */

cartButton.addEventListener(
  "click",
  () => {

    const cartSection =
      document.getElementById("cart");


    cartSection.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });

  }
);


/* =========================
   CONTACT LINKS
========================= */

document
  .querySelectorAll(
    'a[href="#contact"]'
  )
  .forEach(link => {

    link.addEventListener(
      "click",
      event => {

        event.preventDefault();

        closeSideMenu();


        const contact =
          document.getElementById(
            "contact"
          );


        contact.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });

      }
    );

  });


/* =========================
   TOAST
========================= */

let toastTimer;


function showToast(message) {

  toast.textContent = message;

  toast.classList.add("show");


  clearTimeout(toastTimer);


  toastTimer =
    setTimeout(() => {

      toast.classList.remove(
        "show"
      );

    }, 2200);

}


/* =========================
   ESC
========================= */

document.addEventListener(
  "keydown",
  event => {

    if (event.key === "Escape") {

      closeProduct();

      closeSideMenu();

    }

  }
);


/* =========================
   START
========================= */

renderProducts();

renderCart();

updateCartCount();