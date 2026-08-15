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
    image: "inges/no_mahsols/bedone_mahsol.jpg"
  },


  {
    id: 2,
    name: "pass",
    category: "مجلسی",
    categoryId: "majlesi",
    price: 0,
    image: "inges/no_mahsols/bedone_mahsol.jpg"
  },

  {
    id: 3,
    name: "pass",
    category: "مجلسی",
    categoryId: "majlesi",
    price: 0,
    image: "inges/no_mahsols/bedone_mahsol.jpg"
  },

  {
    id: 4,
    name: "pass",
    category: "مجلسی",
    categoryId: "majlesi",
    price: 0,
    image: "inges/no_mahsols/bedone_mahsol.jpg"
  },


  // ================= روزمره =================

  {
    id: 5,
    name: "pass",
    category: "روزمره",
    categoryId: "rozmarre",
    price: 0,
    image: "inges/no_mahsols/bedone_mahsol.jpg"
  },

  {
    id: 6,
    name: "pass",
    category: "روزمره",
    categoryId: "rozmarre",
    price: 0,
    image: "inges/no_mahsols/bedone_mahsol.jpg"
  },

  {
    id: 7,
    name: "pass",
    category: "روزمره",
    categoryId: "rozmarre",
    price: 0,
    image: "inges/no_mahsols/bedone_mahsol.jpg"
  },

  {
    id: 8,
    name: "pass",
    category: "روزمره",
    categoryId: "rozmarre",
    price: 0,
    image: "inges/no_mahsols/bedone_mahsol.jpg"
  },


  // ================= کودک =================

  {
    id: 9,
    name: "pass",
    category: "کودک",
    categoryId: "koodak",
    price: 0,
    image: "inges/no_mahsols/bedone_mahsol.jpg"
  },

  {
    id: 10,
    name: "pass",
    category: "کودک",
    categoryId: "koodak",
    price: 0,
    image: "inges/no_mahsols/bedone_mahsol.jpg"
  },

  {
    id: 11,
    name: "pass",
    category: "کودک",
    categoryId: "koodak",
    price: 0,
    image: "inges/no_mahsols/bedone_mahsol.jpg"
  },

  {
    id: 12,
    name: "pass",
    category: "کودک",
    categoryId: "koodak",
    price: 0,
    image: "inges/no_mahsols/bedone_mahsol.jpg"
  },


  // ================= پاپیون =================

  {
    id: 13,
    name: "pass",
    category: "پاپیون",
    categoryId: "papion",
    price: 0,
    image: "inges/no_mahsols/bedone_mahsol.jpg"
  },

  {
    id: 14,
    name: "pass",
    category: "پاپیون",
    categoryId: "papion",
    price: 0,
    image: "inges/no_mahsols/bedone_mahsol.jpg"
  },

  {
    id: 15,
    name: "pass",
    category: "پاپیون",
    categoryId: "papion",
    price: 0,
    image: "inges/no_mahsols/bedone_mahsol.jpg"
  },

  {
    id: 16,
    name: "pass",
    category: "پاپیون",
    categoryId: "papion",
    price: 0,
    image: "inges/no_mahsols/bedone_mahsol.jpg"
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
