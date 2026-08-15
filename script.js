/* =====================================================
   FER FERY
   SCRIPT.JS
   ===================================================== */


/* ================= ELEMENTS ================= */

const hamburger =
    document.getElementById("hamburger");

const sideMenu =
    document.getElementById("sideMenu");

const menuOverlay =
    document.getElementById("menuOverlay");

const closeMenu =
    document.getElementById("closeMenu");

const searchButton =
    document.getElementById("searchButton");

const searchArea =
    document.getElementById("searchArea");

const searchInput =
    document.getElementById("searchInput");

const searchResults =
    document.getElementById("searchResults");

const clearSearch =
    document.getElementById("clearSearch");

const cartButton =
    document.getElementById("cartButton");

const menuCartButton =
    document.getElementById("menuCartButton");

const cartCount =
    document.getElementById("cartCount");

const cartList =
    document.getElementById("cartList");

const cartTotal =
    document.getElementById("cartTotal");

const favoritesButton =
    document.getElementById("favoritesButton");

const pinnedButton =
    document.getElementById("pinnedButton");

const pinnedProducts =
    document.getElementById("pinnedProducts");

const favoriteProducts =
    document.getElementById("favoriteProducts");

const productModal =
    document.getElementById("productModal");

const modalClose =
    document.getElementById("modalClose");

const modalImage =
    document.getElementById("modalImage");

const modalName =
    document.getElementById("modalName");

const modalCategory =
    document.getElementById("modalCategory");

const modalPrice =
    document.getElementById("modalPrice");

const modalAddCart =
    document.getElementById("modalAddCart");

const toast =
    document.getElementById("toast");


/* ================= DATA ================= */

let cart =
    JSON.parse(
        localStorage.getItem("ferFeryCart")
    ) || [];

let favorites =
    JSON.parse(
        localStorage.getItem("ferFeryFavorites")
    ) || [];

let pinned =
    JSON.parse(
        localStorage.getItem("ferFeryPinned")
    ) || [];

let currentModalProduct = null;


/* ================= SAVE ================= */

function saveData() {

    localStorage.setItem(
        "ferFeryCart",
        JSON.stringify(cart)
    );

    localStorage.setItem(
        "ferFeryFavorites",
        JSON.stringify(favorites)
    );

    localStorage.setItem(
        "ferFeryPinned",
        JSON.stringify(pinned)
    );

}


/* ================= PRICE ================= */

function formatPrice(price) {

    return (
        new Intl.NumberFormat("fa-IR")
            .format(price)
        + " تومان"
    );

}


/* ================= TOAST ================= */

let toastTimer;

function showToast(message) {

    if (!toast) return;

    toast.textContent = message;

    toast.classList.add("show");

    clearTimeout(toastTimer);

    toastTimer =
        setTimeout(() => {

            toast.classList.remove("show");

        }, 2200);

}


/* ================= IMAGE FALLBACK ================= */

function imageError(img) {

    if (!img) return;

    img.onerror = null;

    img.src =
        "data:image/svg+xml;charset=UTF-8," +
        encodeURIComponent(`

        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="600"
            height="750"
        >

            <rect
                width="100%"
                height="100%"
                fill="#f5ddd7"
            />

            <text
                x="50%"
                y="47%"
                text-anchor="middle"
                font-family="Georgia"
                font-size="42"
                fill="#a96070"
            >
                Fer Fery
            </text>

            <text
                x="50%"
                y="54%"
                text-anchor="middle"
                font-family="Arial"
                font-size="20"
                fill="#806466"
            >
                تصویر محصول
            </text>

        </svg>

        `);

}


/* ================= PRODUCT CARD ================= */

function createProductCard(product) {

    const isFavorite =
        favorites.includes(product.id);

    const isPinned =
        pinned.includes(product.id);

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

                ${
                    product.sale
                    ? `
                        <div class="sale-badge">
                            ویژه
                        </div>
                    `
                    : ""
                }

                <div class="product-actions">

                    <button
                        class="product-action pin-button ${
                            isPinned ? "active" : ""
                        }"
                        data-id="${product.id}"
                    >
                        📌
                    </button>

                    <button
                        class="product-action favorite-button ${
                            isFavorite ? "active" : ""
                        }"
                        data-id="${product.id}"
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


/* ================= RENDER PRODUCTS ================= */

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


/* ================= SAVED PRODUCTS ================= */

function renderSavedProducts() {

    if (!pinnedProducts ||
        !favoriteProducts) return;


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


    pinnedProducts.innerHTML =
        pinnedItems.length
        ? pinnedItems
            .map(createProductCard)
            .join("")
        : `
            <div class="empty-message">
                هنوز محصولی پین نشده است.
            </div>
        `;


    favoriteProducts.innerHTML =
        favoriteItems.length
        ? favoriteItems
            .map(createProductCard)
            .join("")
        : `
            <div class="empty-message">
                هنوز محصولی به علاقه‌مندی‌ها اضافه نشده است.
            </div>
        `;

}


/* ================= PIN ================= */

function togglePin(id) {

    if (pinned.includes(id)) {

        pinned =
            pinned.filter(
                item => item !== id
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


/* ================= FAVORITE ================= */

function toggleFavorite(id) {

    if (favorites.includes(id)) {

        favorites =
            favorites.filter(
                item => item !== id
            );

        showToast(
            "محصول از علاقه‌مندی‌ها حذف شد"
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


/* ================= CART ================= */

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

            id: id,

            quantity: 1

        });

    }


    saveData();

    renderCart();

    updateCartCount();

    showToast(
        "محصول به سبد خرید اضافه شد 🛍️"
    );

}


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


/* ================= RENDER CART ================= */

function renderCart() {

    if (!cartList ||
        !cartTotal) return;


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
                            ${new Intl.NumberFormat("fa-IR")
                                .format(item.quantity)}
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


/* ================= CART COUNT ================= */

function updateCartCount() {

    if (!cartCount) return;


    const count =
        cart.reduce(
            (sum, item) =>
                sum + item.quantity,
            0
        );


    cartCount.textContent =
        new Intl.NumberFormat("fa-IR")
            .format(count);

}


/* ================= MODAL ================= */

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


function closeProductModal() {

    productModal.classList.remove("show");

    document.body.style.overflow = "";

}


/* ================= MENU ================= */

function openMenu() {

    hamburger.classList.add("open");

    sideMenu.classList.add("show");

    menuOverlay.classList.add("show");

}


function closeSideMenu() {

    hamburger.classList.remove("open");

    sideMenu.classList.remove("show");

    menuOverlay.classList.remove("show");

}


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


/* ================= CATEGORY SCROLL ================= */

function goToCategory(category) {

    const section =
        document.getElementById(
            `category-${category}`
        );

    if (!section) return;


    closeSideMenu();


    section.scrollIntoView({

        behavior: "smooth",

        block: "start"

    });

}


document
    .querySelectorAll(
        "[data-category]"
    )
    .forEach(button => {

        button.addEventListener(
            "click",
            () => {

                goToCategory(
                    button.dataset.category
                );

            }
        );

    });


/* ================= SCROLL BUTTONS ================= */

document
    .querySelectorAll(
        "[data-scroll]"
    )
    .forEach(button => {

        button.addEventListener(
            "click",
            () => {

                const target =
                    document.getElementById(
                        button.dataset.scroll
                    );

                if (target) {

                    target.scrollIntoView({

                        behavior: "smooth",

                        block: "start"

                    });

                }

            }
        );

    });


/* ================= SEARCH ================= */

searchButton.addEventListener(
    "click",
    () => {

        searchArea.classList.toggle("show");

        if (searchArea.classList.contains("show")) {

            searchInput.focus();

        } else {

            searchResults.classList.remove("show");

        }

    }
);


searchInput.addEventListener(
    "input",
    () => {

        const query =
            searchInput.value
                .trim()
                .toLowerCase();


        if (!query) {

            searchResults.classList.remove("show");

            searchResults.innerHTML = "";

            return;

        }


        const results =
            products.filter(
                product =>
                    product.name
                        .toLowerCase()
                        .includes(query)
            );


        if (!results.length) {

            searchResults.innerHTML = `
                <div class="empty-message">
                    محصولی پیدا نشد.
                </div>
            `;

        } else {

            searchResults.innerHTML =
                results.map(product => `

                    <button
                        class="search-result"
                        data-id="${product.id}"
                    >

                        <img
                            src="${product.image}"
                            alt=""
                            onerror="imageError(this)"
                        >

                        <div>

                            <strong>
                                ${product.name}
                            </strong>

                            <div>
                                ${formatPrice(product.price)}
                            </div>

                        </div>

                    </button>

                `).join("");

        }


        searchResults.classList.add("show");

    }
);


clearSearch.addEventListener(
    "click",
    () => {

        searchInput.value = "";

        searchResults.innerHTML = "";

        searchResults.classList.remove("show");

        searchInput.focus();

    }
);


/* ================= CLICK EVENTS ================= */

document.addEventListener(
    "click",
    event => {

        const addButton =
            event.target.closest(
                ".add-to-cart"
            );

        if (addButton) {

            addToCart(
                Number(addButton.dataset.id)
            );

            return;

        }


        const pinButton =
            event.target.closest(
                ".pin-button"
            );

        if (pinButton) {

            togglePin(
                Number(pinButton.dataset.id)
            );

            return;

        }


        const favoriteButton =
            event.target.closest(
                ".favorite-button"
            );

        if (favoriteButton) {

            toggleFavorite(
                Number(favoriteButton.dataset.id)
            );

            return;

        }


        const quickView =
            event.target.closest(
                ".quick-view"
            );

        if (quickView) {

            openProductModal(
                Number(quickView.dataset.id)
            );

            return;

        }


        const searchResult =
            event.target.closest(
                ".search-result"
            );

        if (searchResult) {

            openProductModal(
                Number(searchResult.dataset.id)
            );

            searchResults.classList.remove("show");

            return;

        }


        const cartAction =
            event.target.closest(
                "[data-action]"
            );

        if (cartAction) {

            const id =
                Number(cartAction.dataset.id);

            const action =
                cartAction.dataset.action;


            if (action === "increase") {

                changeQuantity(id, 1);

            }

            if (action === "decrease") {

                changeQuantity(id, -1);

            }

            if (action === "remove") {

                removeFromCart(id);

            }

        }

    }
);


/* ================= CART BUTTONS ================= */

cartButton.addEventListener(
    "click",
    () => {

        document
            .getElementById("cartSection")
            .scrollIntoView({
                behavior: "smooth"
            });

    }
);


menuCartButton.addEventListener(
    "click",
    () => {

        closeSideMenu();

        document
            .getElementById("
