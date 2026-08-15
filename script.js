// ==========================================
// FER FERY
// کنترل کامل سایت
// ==========================================


// ==========================================
// متغیرهای اصلی
// ==========================================

let cart = JSON.parse(localStorage.getItem("ferFeryCart")) || [];

let pinned = JSON.parse(
  localStorage.getItem("ferFeryPinned")
) || [];

let currentProduct = null;


// ==========================================
// المنت‌های اصلی
// ==========================================

const hamburgerBtn = document.getElementById("hamburgerBtn");
const sideMenu = document.getElementById("sideMenu");
const menuOverlay = document.getElementById("menuOverlay");
const closeMenu = document.getElementById("closeMenu");

const cartButton = document.getElementById("cartButton");
const cartCount = document.getElementById("cartCount");

const searchInput = document.getElementById("searchInput");
const clearSearch = document.getElementById("clearSearch");
const searchResults = document.getElementById("searchResults");

const pinnedProducts = document.getElementById("pinnedProducts");
const emptyPinned = document.getElementById("emptyPinned");

const cartItems = document.getElementById("cartItems");
const emptyCart = document.getElementById("emptyCart");
const cartTotalBox = document.getElementById("cartTotalBox");
const cartTotal = document.getElementById("cartTotal");

const productModal = document.getElementById("productModal");
const closeModal = document.getElementById("closeModal");

const modalImage = document.getElementById("modalImage");
const modalName = document.getElementById("modalName");
const modalCategory = document.getElementById("modalCategory");
const modalPrice = document.getElementById("modalPrice");
const modalAddCart = document.getElementById("modalAddCart");

const openPinned = document.getElementById("openPinned");
const openCart = document.getElementById("openCart");

const clearPinned = document.getElementById("clearPinned");
const clearCart = document.getElementById("clearCart");


// ==========================================
// ذخیره اطلاعات
// ==========================================

function saveCart(){

  localStorage.setItem(
    "ferFeryCart",
    JSON.stringify(cart)
  );

}


function savePinned(){

  localStorage.setItem(
    "ferFeryPinned",
    JSON.stringify(pinned)
  );

}


// ==========================================
// باز و بسته کردن منو
// ==========================================

function openSideMenu(){

  sideMenu.classList.add("active");
  menuOverlay.classList.add("active");

  document.body.style.overflow = "hidden";

}


function closeSideMenu(){

  sideMenu.classList.remove("active");
  menuOverlay.classList.remove("active");

  document.body.style.overflow = "";

}


hamburgerBtn.addEventListener(
  "click",
  openSideMenu
);


closeMenu.addEventListener(
  "click",
  closeSideMenu
);


menuOverlay.addEventListener(
  "click",
  closeSideMenu
);


// ==========================================
// انتقال نرم به بخش‌ها
// ==========================================

document.querySelectorAll(".menu-link").forEach(link => {

  link.addEventListener("click", function(){

    const target = this.getAttribute("href");

    if(!target || !target.startsWith("#")){
      return;
    }

    closeSideMenu();

    setTimeout(() => {

      const element =
        document.querySelector(target);

      if(element){

        element.scrollIntoView({
          behavior:"smooth",
          block:"start"
        });

      }

    },150);

  });

});


// ==========================================
// ساخت کارت محصول
// ==========================================

function createProductCard(product){

  const isPinned =
    pinned.includes(product.id);

  return `

    <article
      class="card"
      data-product-id="${product.id}"
    >

      <div class="img-wrap">

        <img
          class="product-img"
          src="${product.image}"
          alt="${product.name}"
          loading="lazy"
          onerror="this.src='https://placehold.co/600x600/fff0f5/c63f73?text=fer+fery'"
        >

        <button
          class="pin ${isPinned ? "active" : ""}"
          data-pin="${product.id}"
          aria-label="پین کردن محصول"
        >
          ${isPinned ? "📌" : "♡"}
        </button>

      </div>


      <div class="info">

        <div class="name">
          ${product.name}
        </div>

        <div class="price">
          ${formatPrice(product.price)}
        </div>


        <div class="actions">

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


// ==========================================
// نمایش محصولات
// ==========================================

function renderCategory(categoryId, elementId){

  const container =
    document.getElementById(elementId);

  if(!container){
    return;
  }

  const categoryProducts =
    getProductsByCategory(categoryId);

  container.innerHTML =
    categoryProducts
      .map(createProductCard)
      .join("");

}


// ==========================================
// نمایش همه دسته‌ها
// ==========================================

function renderAllProducts(){

  renderCategory(
    "majlesi",
    "majlesiProducts"
  );

  renderCategory(
    "rozmarre",
    "rozmarreProducts"
  );

  renderCategory(
    "koodak",
    "koodakProducts"
  );

  renderCategory(
    "papion",
    "papionProducts"
  );

  renderPinned();

}


// ==========================================
// پین کردن محصول
// ==========================================

function togglePinned(id){

  id = Number(id);

  if(pinned.includes(id)){

    pinned =
      pinned.filter(
        productId => productId !== id
      );

  }else{

    pinned.push(id);

  }

  savePinned();

  renderAllProducts();

}


// ==========================================
// نمایش محصولات پین شده
// ==========================================

function renderPinned(){

  if(!pinnedProducts){
    return;
  }

  const pinnedList =
    products.filter(
      product => pinned.includes(product.id)
    );

  if(pinnedList.length === 0){

    pinnedProducts.innerHTML = "";

    emptyPinned.style.display = "block";

    return;

  }

  emptyPinned.style.display = "none";

  pinnedProducts.innerHTML =
    pinnedList
      .map(createProductCard)
      .join("");

}


// ==========================================
// افزودن به سبد خرید
// ==========================================

function addToCart(id){

  id = Number(id);

  const existing =
    cart.find(
      item => item.id === id
    );

  if(existing){

    existing.quantity += 1;

  }else{

    cart.push({
      id:id,
      quantity:1
    });

  }

  saveCart();

  renderCart();

  updateCartCount();

  showToast("محصول به سبد خرید اضافه شد 🛍️");

}


// ==========================================
// کاهش تعداد
// ==========================================

function decreaseQuantity(id){

  const item =
    cart.find(
      item => item.id === Number(id)
    );

  if(!item){
    return;
  }

  item.quantity -= 1;

  if(item.quantity <= 0){

    cart =
      cart.filter(
        cartItem =>
          cartItem.id !== Number(id)
      );

  }

  saveCart();

  renderCart();

  updateCartCount();

}


// ==========================================
// افزایش تعداد
// ==========================================

function increaseQuantity(id){

  const item =
    cart.find(
      item => item.id === Number(id)
    );

  if(!item){
    return;
  }

  item.quantity += 1;

  saveCart();

  renderCart();

  updateCartCount();

}


// ==========================================
// حذف از سبد خرید
// ==========================================

function removeFromCart(id){

  cart =
    cart.filter(
      item =>
        item.id !== Number(id)
    );

  saveCart();

  renderCart();

  updateCartCount();

}


// ==========================================
// نمایش سبد خرید
// ==========================================

function renderCart(){

  if(!cartItems){
    return;
  }

  if(cart.length === 0){

    cartItems.innerHTML = "";

    emptyCart.style.display = "block";

    cartTotalBox.style.display = "none";

    return;

  }

  emptyCart.style.display = "none";

  cartTotalBox.style.display = "flex";


  cartItems.innerHTML =
    cart.map(item => {

      const product =
        getProductById(item.id);

      if(!product){
        return "";
      }

      return `

        <div
          class="cart-item"
          data-cart-id="${product.id}"
        >

          <img
            src="${product.image}"
            alt="${product.name}"
            onerror="this.src='https://placehold.co/200x200/fff0f5/c63f73?text=fer+fery'"
          >

          <div class="cart-info">

            <div class="cart-name">
              ${product.name}
            </div>

            <div class="cart-price">
              ${formatPrice(product.price)}
            </div>

          </div>


          <div class="quantity-controls">

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
            class="remove-cart"
            data-remove="${product.id}"
          >
            حذف
          </button>

        </div>

      `;

    }).join("");


  updateCartTotal();

}


// ==========================================
// مجموع سبد خرید
// ==========================================

function updateCartTotal(){

  let total = 0;

  cart.forEach(item => {

    const product =
      getProductById(item.id);

    if(product){

      total +=
        product.price *
        item.quantity;

    }

  });

  cartTotal.textContent =
    formatPrice(total);

}


// ==========================================
// تعداد کل محصولات سبد
// ==========================================

function updateCartCount(){

  const total =
    cart.reduce(
      (sum,item) =>
        sum + item.quantity,
      0
    );

  cartCount.textContent =
    total.toLocaleString("fa-IR");

}


// ==========================================
// مشاهده محصول
// ==========================================

function openProductModal(id){

  const product =
    getProductById(id);

  if(!product){
    return;
  }

  currentProduct = product;

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

  productModal.classList.add("active");

  document.body.style.overflow = "hidden";

}


function closeProductModal(){

  productModal.classList.remove("active");

  document.body.style.overflow = "";

  currentProduct = null;

}


closeModal.addEventListener(
  "click",
  closeProductModal
);


productModal.addEventListener(
  "click",
  event => {

    if(event.target === productModal){

      closeProductModal();

    }

  }
);


// ==========================================
// افزودن محصول از داخل پنجره
// ==========================================

modalAddCart.addEventListener(
  "click",
  () => {

    if(!currentProduct){
      return;
    }

    addToCart(
      currentProduct.id
    );

    closeProductModal();

  }
);


// ==========================================
// جستجوی محصولات
// ==========================================

function searchProducts(){

  const query =
    searchInput.value
      .trim()
      .toLowerCase();

  if(query === ""){

    searchResults.innerHTML = "";

    searchResults.classList.remove("active");

    return;

  }


  const results =
    products.filter(product =>

      product.name
        .toLowerCase()
        .includes(query)

      ||

      product.category
        .toLowerCase()
        .includes(query)

    );


  if(results.length === 0){

    searchResults.innerHTML = `

      <div class="search-result">

        <span>
          محصولی پیدا نشد.
        </span>

      </div>

    `;

  }else{

    searchResults.innerHTML =
      results.map(product => `

        <div
          class="search-result"
          data-search-product="${product.id}"
        >

          <img
            src="${product.image}"
            alt="${product.name}"
            onerror="this.src='https://placehold.co/100x100/fff0f5/c63f73?text=fer+fery'"
          >

          <div>

            <div class="search-result-name">
              ${product.name}
            </div>

            <small>
              ${product.category}
            </small>

          </div>

        </div>

      `).join("");

  }

  searchResults.classList.add("active");

}


searchInput.addEventListener(
  "input",
  searchProducts
);


// ==========================================
// پاک کردن جستجو
// ==========================================

clearSearch.addEventListener(
  "click",
  () => {

    searchInput.value = "";

    searchResults.innerHTML = "";

    searchResults.classList.remove(
      "active"
    );

    searchInput.focus();

  }
);


// ==========================================
// کلیک روی نتایج جستجو
// ==========================================

searchResults.addEventListener(
  "click",
  event => {

    const result =
      event.target.closest(
        "[data-search-product]"
      );

    if(!result){
      return;
    }

    const id =
      result.dataset.searchProduct;

    searchResults.classList.remove(
      "active"
    );

    searchInput.value = "";

    openProductModal(id);

  }
);


// ==========================================
// کلیک‌های مربوط به محصولات
// ==========================================

document.addEventListener(
  "click",
  event => {

    const pinButton =
      event.target.closest(
        "[data-pin]"
      );

    if(pinButton){

      togglePinned(
        pinButton.dataset.pin
      );

      return;

    }


    const viewButton =
      event.target.closest(
        "[data-view]"
      );

    if(viewButton){

      openProductModal(
        viewButton.dataset.view
      );

      return;

    }


    const addButton =
      event.target.closest(
        "[data-add]"
      );

    if(addButton){

      addToCart(
        addButton.dataset.add
      );

      return;

    }


    const increaseButton =
      event.target.closest(
        "[data-increase]"
      );

    if(increaseButton){

      increaseQuantity(
        increaseButton.dataset.increase
      );

      return;

    }


    const decreaseButton =
      event.target.closest(
        "[data-decrease]"
      );

    if(decreaseButton){

      decreaseQuantity(
        decreaseButton.dataset.decrease
      );

      return;

    }


    const removeButton =
      event.target.closest(
        "[data-remove]"
      );

    if(removeButton){

      removeFromCart(
        removeButton.dataset.remove
      );

      return;

    }

  }
);


// ==========================================
// دکمه سبد خرید بالای سایت
// ==========================================

cartButton.addEventListener(
  "click",
  () => {

    document
      .getElementById("cartSection")
      .scrollIntoView({
        behavior:"smooth"
      });

  }
);


// ==========================================
// منوی پین‌شده‌ها
// ==========================================

openPinned.addEventListener(
  "click",
  () => {

    closeSideMenu();

    setTimeout(() => {

      document
        .getElementById("pinnedSection")
        .scrollIntoView({
          behavior:"smooth"
        });

    },150);

  }
);


// ==========================================
// منوی سبد خرید
// ==========================================

openCart.addEventListener(
  "click",
  () => {

    closeSideMenu();

    setTimeout(() => {

      document
        .getElementById("cartSection")
        .scrollIntoView({
          behavior:"smooth"
        });

    },150);

  }
);


// ==========================================
// خالی کردن پین‌ها
// ==========================================

clearPinned.addEventListener(
  "click",
  () => {

    if(pinned.length === 0){
      return;
    }

    pinned = [];

    savePinned();

    renderAllProducts();

    showToast(
      "پین‌شده‌ها پاک شدند"
    );

  }
);


// ==========================================
// خالی کردن سبد
// ==========================================

clearCart.addEventListener(
  "click",
  () => {

    if(cart.length === 0){
      return;
    }

    cart = [];

    saveCart();

    renderCart();

    updateCartCount();

    showToast(
      "سبد خرید خالی شد"
    );

  }
);


// ==========================================
// تماس با فروشنده
// فقط انتقال به بخش تماس
// بدون alert
// ==========================================

const sellerContactButton =
  document.getElementById(
    "sellerContactButton"
  );

if(sellerContactButton){

  sellerContactButton.addEventListener(
    "click",
    event => {

      event.preventDefault();

      document
        .getElementById("sellerContact")
        .scrollIntoView({
          behavior:"smooth",
          block:"start"
        });

    }
  );

}


// ==========================================
// پیام کوچک پایین صفحه
// ==========================================

function showToast(message){

  const oldToast =
    document.querySelector(
      ".fer-toast"
    );

  if(oldToast){
    oldToast.remove();
  }


  const toast =
    document.createElement("div");

  toast.className =
    "fer-toast";

  toast.textContent =
    message;


  Object.assign(
    toast.style,
    {
      position:"fixed",
      bottom:"25px",
      left:"50%",
      transform:"translateX(-50%) translateY(20px)",
      zIndex:"5000",
      padding:"12px 20px",
      borderRadius:"14px",
      background:"linear-gradient(135deg,#ef6f9d,#c63f73)",
      color:"#fff",
      boxShadow:"0 12px 30px rgba(198,63,115,.25)",
      opacity:"0",
      transition:"all .35s ease",
      fontSize:"14px"
    }
  );


  document.body.appendChild(toast);


  requestAnimationFrame(() => {

    toast.style.opacity = "1";

    toast.style.transform =
      "translateX(-50%) translateY(0)";

  });


  setTimeout(() => {

    toast.style.opacity = "0";

    toast.style.transform =
      "translateX(-50%) translateY(20px)";

    setTimeout(
      () => toast.remove(),
      350
    );

  },2200);

}


// ==========================================
// بستن مودال با کلید ESC
// ==========================================

document.addEventListener(
  "keydown",
  event => {

    if(event.key === "Escape"){

      closeProductModal();

      closeSideMenu();

    }

  }
);


// ==========================================
// بستن نتایج جستجو با کلیک بیرون
// ==========================================

document.addEventListener(
  "click",
  event => {

    if(
      !event.target.closest(
        ".search-section"
      )
    ){

      searchResults.classList.remove(
        "active"
      );

    }

  }
);


// ==========================================
// اجرای اولیه سایت
// ==========================================

document.addEventListener(
  "DOMContentLoaded",
  () => {

    renderAllProducts();

    renderCart();

    updateCartCount();

  }
);


// ==========================================
// افکت ورود کارت‌ها هنگام اسکرول
// ==========================================

const observer =
  new IntersectionObserver(
    entries => {

      entries.forEach(entry => {

        if(entry.isIntersecting){

          entry.target.style.opacity = "1";

          entry.target.style.transform =
            "translateY(0)";

          o
