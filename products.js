// ==========================================
// FER FERY
// اطلاعات محصولات
// ==========================================

const products = [

  // ================= مجلسی =================

  {
    id: 1,
    name: "pass",
    category: "مجلسی",
    categoryId: "majlesi",
    price: 0,
    image: "images/majlesi-1.jpg"
  },

  {
    id: 2,
    name: "pass",
    category: "مجلسی",
    categoryId: "majlesi",
    price: 0,
    image: "images/majlesi-2.jpg"
  },

  {
    id: 3,
    name: "pass",
    category: "مجلسی",
    categoryId: "majlesi",
    price: 0,
    image: "images/majlesi-3.jpg"
  },

  {
    id: 4,
    name: "pass",
    category: "مجلسی",
    categoryId: "majlesi",
    price: 0,
    image: "images/majlesi-4.jpg"
  },


  // ================= روزمره =================

  {
    id: 5,
    name: "pass",
    category: "روزمره",
    categoryId: "rozmarre",
    price: 0,
    image: "images/rozmarre-1.jpg"
  },

  {
    id: 6,
    name: "pass",
    category: "روزمره",
    categoryId: "rozmarre",
    price: 0,
    image: "images/rozmarre-2.jpg"
  },

  {
    id: 7,
    name: "pass",
    category: "روزمره",
    categoryId: "rozmarre",
    price: 0,
    image: "images/rozmarre-3.jpg"
  },

  {
    id: 8,
    name: "pass",
    category: "روزمره",
    categoryId: "rozmarre",
    price: 0,
    image: "images/rozmarre-4.jpg"
  },


  // ================= کودک =================

  {
    id: 9,
    name: "pass",
    category: "کودک",
    categoryId: "koodak",
    price: 0,
    image: "images/koodak-1.jpg"
  },

  {
    id: 10,
    name: "pass",
    category: "کودک",
    categoryId: "koodak",
    price: 0,
    image: "images/koodak-2.jpg"
  },

  {
    id: 11,
    name: "pass",
    category: "کودک",
    categoryId: "koodak",
    price: 0,
    image: "images/koodak-3.jpg"
  },

  {
    id: 12,
    name: "pass",
    category: "کودک",
    categoryId: "koodak",
    price: 0,
    image: "images/koodak-4.jpg"
  },


  // ================= پاپیون =================

  {
    id: 13,
    name: "pass",
    category: "پاپیون",
    categoryId: "papion",
    price: 0,
    image: "images/papion-1.jpg"
  },

  {
    id: 14,
    name: "pass",
    category: "پاپیون",
    categoryId: "papion",
    price: 0,
    image: "images/papion-2.jpg"
  },

  {
    id: 15,
    name: "pass",
    category: "پاپیون",
    categoryId: "papion",
    price: 0,
    image: "images/papion-3.jpg"
  },

  {
    id: 16,
    name: "pass",
    category: "پاپیون",
    categoryId: "papion",
    price: 0,
    image: "images/papion-4.jpg"
  }

];


// ==========================================
// تبدیل قیمت به فرمت فارسی
// ==========================================

function formatPrice(price){

  return Number(price).toLocaleString("fa-IR") + " تومان";

}


// ==========================================
// گرفتن محصولات یک دسته
// ==========================================

function getProductsByCategory(categoryId){

  return products.filter(
    product => product.categoryId === categoryId
  );

}


// ==========================================
// پیدا کردن محصول با ID
// ==========================================

function getProductById(id){

  return products.find(
    product => product.id === Number(id)
  );

     }
