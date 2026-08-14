/* =====================================================
   MAISON ROSE
   SCRIPT.JS
   ===================================================== */


/* =====================================================
   ELEMENTS
   ===================================================== */

const hamburger = document.getElementById("hamburger");
const sideMenu = document.getElementById("sideMenu");
const menuOverlay = document.getElementById("menuOverlay");
const closeMenu = document.getElementById("closeMenu");

const searchButton = document.getElementById("searchButton");
const searchArea = document.getElementById("searchArea");
const searchInput = document.getElementById("searchInput");
const searchResults = document.getElementById("searchResults");
const clearSearch = document.getElementById("clearSearch");

const cartButton = document.getElementById("cartButton");
const menuCartButton = document.getElementById("menuCartButton");
const cartCount = document.getElementById("cartCount");
const cartList = document.getElementById("cartList");
const cartTotal = document.getElementById("cartTotal");

const pinnedButton = document.getElementById("pinnedButton");
const favoritesButton = document.getElementById("favoritesButton");

const pinnedProducts = document.getElementById("pinnedProducts");
const favoriteProducts = document.getElementById("favoriteProducts");

const productModal = document.getElementById("productModal");
const modalClose = document.getElementById("modalClose");
const modalImage = document.getElementById("modalImage");
const modalName = document.getElementById("modalName");
const modalCategory = document.getElementById("modalCategory");
const modalPrice = document.getElementById("modalPrice");
const modalAddCart = document.getElementById("modalAddCart");

const toast = document.getElementById("toast");


/* =====================================================
   DATA
   ===================================================== */

let cart = JSON.parse(
    localStorage.getItem("maisonRoseCart")
) || [];

let pinned = JSON.parse(
    localStorage.getItem("maisonRosePinned")
) || [];

let favorites = JSON.parse(
    localStorage.getItem("maisonRoseFavorites")
) || [];

let currentModalProduct = null;


/* =====================================================
   SAVE DATA
   ===================================================== */

function saveData() {

    localStorage.setItem(
        "maisonRoseCart",
        JSON.stringify(cart)
    );

    localStorage.setItem(
        "maisonRosePinned",
        JSON.stringify(pinned)
    );

    localStorage.setItem(
        "maisonRoseFavorites",
        JSON.stringify(favorites)
    );

}


/* =====================================================
   FORMAT PRICE
   ===================================================== */

function formatPrice(price) {

    return new Intl.NumberFormat("fa-IR").format(price)
        + " تومان";

}


/* =====================================================
   TOAST
   ===================================================== */

let toastTimer;

function showToast(message) {

    toast.textContent = message;

    toast.classList.add("show");

    clearTimeout(toastTimer);

    toastTimer = setTimeout(() => {

        toast.classList.remove("show");

    }, 2200);

}


/* =====================================================
   IMAGE FALLBACK
   ===================================================== */

function imageError(img) {

    img.onerror = null;

    img.src =
        "data:image/svg+xml;charset=UTF-8," +
        encodeURIComponent(`
            <svg xmlns="http://www.w3.org/2000/svg"
                 width="600"
                 height="750"
                 viewBox="0 0 600 750">

                <rect width="600"
                      height="750"
                      fill="#f3d2ce"/>

                <text
                    x="300"
                    y="350"
                    text-anchor="middle"
                    font-size="34"
                    fill="#9f5265">

                    Maison Rose

                </text>

                <text
                    x="300"
                    y="400"
                    text-anchor="middle"
                    font-size="20"
                    fill="#806265">

                    تصویر محصول

                </text>

            </svg>
        `);

}


/* =====================================================
   PRODUCT CARD
   ===================================================== */

function createProductCard(product) {

    const isPinned =
        pinned.includes(product.id);

    const isFavorite =
        favorites.includes(product.id);


    return `

        <article
            class="product-card"
            data-id="${product.id}"
        >

            <div class="product-image">

                <img
                    src="${product.image}"
                    alt="${product.name}"
                    onerror="imageError(this)"
                >

                <div class="product-actions">

                    <button
                        class="product-action pin-button ${
                            isPinned ? "active" : ""
                        }"
                        data-id="${product.id}"
                        title="پین کردن"
                    >
                        📌
                    </button>


                    <button
                        class="product-action favorite-button ${
                            isFavorite ? "active" : ""
                        }"
                        data-id="${product.id}"
                        title="علاقه‌مندی"
                    >
                        ${
                            isFavorite
                            ? "❤️"
                            : "♡"
                        }
                    </button>

                </div>

            </div>


            <div class="product-info">

                <h4>
                    ${product.name}
                </h4>


                <div class="product-price">

                    ${formatPrice(product.price)}

                </div>


                <button
                    class="add-to-cart"
                    data-id="${product.id}"
                >
                    افزودن به سبد خرید
                </button>


                <button
                    class="quick-view"
                    data-id="${product.id}"
                >
                    مشاهده محصول
                </button>

            </div>

        </article>

    `;

}


/* =====================================================
   RENDER PRODUCTS
   ===================================================== */

function renderProducts() {

    document
        .querySelectorAll(".product-grid")
        .forEach(grid => {

            const category =
                grid.dataset.products;

            const categoryProducts =
                products.filter(
                    product =>
                        product.category === category
                );

            grid.innerHTML =
                categoryProducts
                    .map(createProductCard)
                    .join("");

        });

}


/* =====================================================
   RENDER SAVED PRODUCTS
   ===================================================== */

function renderSavedProducts() {

    const pinnedItems =
        products.filter(
            product =>
                pinned.includes(product.id)
        );


    const favoriteItems =
        products.filter(
            product =>
                favorites.includes(product.id)
        );


    if (pinnedItems.length === 0) {

        pinnedProducts.innerHTML = `
            <div class="empty-message">
                هنوز محصولی پین نکرده‌اید.
            </div>
        `;

    } else {

        pinnedProducts.innerHTML =
            pinnedItems
                .map(createProductCard)
                .join("");

    }


    if (favoriteItems.length === 0) {

        favoriteProducts.innerHTML = `
            <div class="empty-message">
                هنوز محصولی به علاقه‌مندی‌ها اضافه نشده.
            </div>
        `;

    } else {

        favoriteProducts.innerHTML =
            favoriteItems
                .map(createProductCard)
                .join("");

    }

}


/* =====================================================
   PIN PRODUCT
   ===================================================== */

function togglePin(id) {

    if (pinned.includes(id)) {

        pinned =
            pinned.filter(
                productId =>
                    productId !== id
            );

        showToast(
            "محصول از پین‌ها حذف شد"
        );

    } else {

        pinned.push(id);

        showToast(
            "محصول پین شد 📌"
        );

    }


    saveData();

    renderProducts();

    renderSavedProducts();

}


/* =====================================================
   FAVORITE PRODUCT
   ===================================================== */

function toggleFavorite(id) {

    if (favorites.includes(id)) {

        favorites =
            favorites.filter(
                productId =>
                    productId !== id
            );

        showToast(
            "از علاقه‌مندی‌ها حذف شد"
        );

    } else {

        favorites.push(id);

        showToast(
            "به علاقه‌مندی‌ها اضافه شد ❤️"
        );

    }


    saveData();

    renderProducts();

    renderSavedProducts();

}


/* =====================================================
   ADD TO CART
   ===================================================== */

function addToCart(id) {

    const product =
        products.find(
            item => item.id === id
        );

    if (!product) return;


    const existing =
        cart.find(
            item => item.id === id
        );


    if (existing) {

        existing.quantity++;

    } else {

        cart.push({

            id: product.id,

            quantity: 1

        });

    }


    saveData();

    renderCart();

    updateCartCount();

    showToast(
        `${product.name} به سبد خرید اضافه شد`
    );

}


/* =====================================================
   REMOVE FROM CART
   ===================================================== */

function removeFromCart(id) {

    cart =
        cart.filter(
            item =>
                item.id !== id
        );

    saveData();

    renderCart();

    updateCartCount();

}


/* =====================================================
   CHANGE CART QUANTITY
   ===================================================== */

function changeQuantity(id, amount) {

    const item =
        cart.find(
            cartItem =>
                cartItem.id === id
        );

    if (!item) return;


    item.quantity += amount;


    if (item.quantity <= 0) {

        removeFromCart(id);

        return;

    }


    saveData();

    renderCart();

    updateCartCount();

}


/* =====================================================
   RENDER CART
   ===================================================== */

function renderCart() {

    if (cart.length === 0) {

        cartList.innerHTML = `
            <div class="empty-message">
                سبد خرید شما خالی است 🛍️
            </div>
        `;

        cartTotal.textContent =
            "۰ تومان";

        return;

    }


    let total = 0;


    cartList.innerHTML =
        cart.map(item => {

            const product =
                products.find(
                    p =>
                        p.id === item.id
                );


            if (!product) return "";


            const itemTotal =
                product.price *
                item.quantity;


            total += itemTotal;


            return `

                <div
                    class="cart-item"
                    data-id="${product.id}"
                >

                    <div>

                        <strong>
                            ${product.name}
                        </strong>

                        <div>
                            ${formatPrice(product.price)}
                        </div>

                    </div>


                    <div class="cart-controls">

                        <button
                            data-action="increase"
                            data-id="${product.id}"
                        >
                            +
                        </button>


                        <span>
                            ${item.quantity}
                        </span>


                        <button
                            data-action="decrease"
                            data-id="${product.id}"
                        >
                            −
                        </button>


                        <button
                            data-action="remove"
                            data-id="${product.id}"
                        >
                            🗑️
                        </button>

                    </div>

                </div>

            `;

        }).join("");


    cartTotal.textContent =
        formatPrice(total);

}


/* =====================================================
   CART COUNT
   ===================================================== */

function updateCartCount() {

    const count =
        cart.reduce(
            (sum, item) =>
                sum + item.quantity,
            0
        );


    cartCount.textContent =
        new Intl.NumberFormat(
            "fa-IR"
        ).format(count);

}


/* =====================================================
   OPEN PRODUCT MODAL
   ===================================================== */

function openProductModal(id) {

    const product =
        products.find(
            item => item.id === id
        );

    if (!product) return;


    currentModalProduct =
        product;


    modalImage.src =
        product.image;

    modalImage.alt =
        product.name;

    modalImage.onerror =
        function () {

            imageError(this);

        };


    modalName.textContent =
        product.name;


    modalCategory.textContent =
        `دسته‌بندی: ${product.category}`;


    modalPrice.textContent =
        formatPrice(product.price);


    productModal.classList.add("show");

    document.body.style.overflow =
        "hidden";

}


/* =====================================================
   CLOSE MODAL
   ===================================================== */

function closeProductModal() {

    productModal.classList.remove("show");

    /*
       اگر سایدمنو باز نیست، اسکرول body آزاد باشد.
    */

    if (
        !sideMenu.classList.contains("show")
    ) {

        document.body.style.overflow = "";

    }

}


/* =====================================================
   OPEN MENU
   ===================================================== */

function openMenu() {

    hamburger.classList.add("open");

    sideMenu.classList.add("show");

    menuOverlay.classList.add("show");

    /*
       مهم:
       اسکرول body را قفل نمی‌کنیم.

       خود sideMenu باید اسکرول شود.
    */

}


/* =====================================================
   CLOSE MENU
   ===================================================== */

function closeSideMenu() {

    hamburger.classList.remove("open");

    sideMenu.classList.remove("show");

    menuOverlay.classList.remove("show");

    /*
       اگر مودال باز نیست، body را آزاد می‌کنیم.
    */

    if (
        !productModal.classList.contains("show")
    ) {

        document.body.style.overflow = "";

    }

}


/* =====================================================
   SIDE MENU TOUCH / SCROLL
   ===================================================== */

/*
   این قسمت مخصوص موبایل است.

   وقتی انگشت روی خود سایدمنو حرکت می‌کند،
   اجازه می‌دهیم اسکرول عمودی داخل منو انجام شود.
*/

if (sideMenu) {

    sideMenu.addEventListener(
        "touchstart",
        event => {

            event.stopPropagation();

        },
        {
            passive: true
        }
    );


    sideMenu.addEventListener(
        "touchmove",
        event => {

            event.stopPropagation();

        },
        {
            passive: true
        }
    );


    sideMenu.addEventListener(
        "wheel",
        event => {

            event.stopPropagation();

        },
        {
            passive: true
        }
    );

}


/* =====================================================
   MENU EVENTS
   ===================================================== */

hamburger.addEventListener(
    "click",
    () => {

        if (
            sideMenu.classList.contains("show")
        ) {

            closeSideMenu();

        } else {

            openMenu();

        }

    }
);


closeMenu.addEventListener(
    "click",
    closeSideMenu
);


menuOverlay.addEventListener(
    "click",
    closeSideMenu
);


/* =====================================================
   CATEGORY MENU
   ===================================================== */

document
    .querySelectorAll(
        ".menu-item[data-category]"
    )
    .forEach(button => {

        button.addEventListener(
            "click",
            () => {

                const category =
                    button.dataset.category;


                closeSideMenu();


                const section =
                    document.getElementById(
                        `category-${category}`
                    );


                if (section) {

                    section.scrollIntoView({

                        behavior: "smooth",

                        block: "start"

                    });

                }

            }
        );

    });


/* =====================================================
   CATEGORY CARDS
   ===================================================== */

document
    .querySelectorAll(
        ".category-card"
    )
    .forEach(button => {

        button.addEventListener(
            "click",
            () => {

                const category =
                    button.dataset.category;


                const section =
                    document.getElementById(
                        `category-${category}`
                    );


                if (section) {

                    section.scrollIntoView({

                        behavior: "smooth",

                        block: "start"

                    });

                }

            }
        );

    });


/* =====================================================
   PRODUCT EVENTS
   ===================================================== */

document.addEventListener(
    "click",
    event => {

        const addButton =
            event.target.closest(
                ".add-to-cart"
            );


        if (addButton) {

            const id =
                Number(
                    addButton.dataset.id
                );

            addToCart(id);

            return;

        }


        const pinButton =
            event.target.closest(
                ".pin-button"
            );


        if (pinButton) {

            const id =
                Number(
                    pinButton.dataset.id
                );

            togglePin(id);

            return;

        }


        const favoriteButton =
            event.target.closest(
                ".favorite-button"
            );


        if (favoriteButton) {

            const id =
                Number(
                    favoriteButton.dataset.id
                );

            toggleFavorite(id);

            return;

        }


        const quickView =
            event.target.closest(
                ".quick-view"
            );


        if (quickView) {

            const id =
                Number(
                    quickView.dataset.id
                );

            openProductModal(id);

        }

    }
);

