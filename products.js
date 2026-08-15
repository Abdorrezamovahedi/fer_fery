// ==========================================
// FER FERY
// اطلاعات محصولات
// ==========================================

const products = [

  // ================= مجلسی =================

  {
    id: 1,
    name: "کلیپس پاپیون",
    category: "مجلسی",
    categoryId: "majlesi",
    price: 0,
    image: "inges/mahsols/majlesy/m_1.jpg"
  },

  {
    id: 2,
    name: "کلیپس مجلسی",
    category: "مجلسی",
    categoryId: "majlesi",
    price: 0,
    image: "inges/mahsols/majlesy/m_2.jpg"
  },

  {
    id: 3,
    name: "چفتی پروانه",
    category: "مجلسی",
    categoryId: "majlesi",
    price: 0,
    image: "inges/mahsols/majlesy/m_3.jpg"
  },

  {
    id: 4,
    name: "تاج کودک",
    category: "مجلسی",
    categoryId: "majlesi",
    price: 0,
    image: "inges/mahsols/majlesy/m_4.jpg"
  },

  {
    id: 5,
    name: "کلیپس زربان",
    category: "مجلسی",
    categoryId: "majlesi",
    price: 0,
    image: "inges/mahsols/majlesy/m_5.jpg"
  },


  // ================= روزمره =================

  {
    id: 6,
    name: "کش کودک",
    category: "روزمره",
    categoryId: "rozmarre",
    price: 0,
    image: "inges/mahsols/roozmare/r_1.jpg"
  },

  {
    id: 7,
    name: "کلیپس بابونه",
    category: "روزمره",
    categoryId: "rozmarre",
    price: 0,
    image: "inges/mahsols/roozmare/r_2.jpg"
  },

  {
    id: 8,
    name: "کلیپس گل",
    category: "روزمره",
    categoryId: "rozmarre",
    price: 0,
    image: "inges/mahsols/roozmare/r_3.jpg"
  },

  {
    id: 9,
    name: "کلیپس پاپیون",
    category: "روزمره",
    categoryId: "rozmarre",
    price: 0,
    image: "inges/mahsols/roozmare/r_4.jpg"
  },

  {
    id: 10,
    name: "کش کودک",
    category: "روزمره",
    categoryId: "rozmarre",
    price: 0,
    image: "inges/mahsols/roozmare/r_5.jpg"
  },

  {
    id: 11,
    name: "کلیپس با کییفیت",
    category: "روزمره",
    categoryId: "rozmarre",
    price: 0,
    image: "inges/mahsols/roozmare/r_6.jpg"
  },

  {
    id: 12,
    name: "کلیپس اکرولیک",
    category: "روزمره",
    categoryId: "rozmarre",
    price: 0,
    image: "inges/mahsols/roozmare/r_7.jpg"
  },

  {
    id: 13,
    name: "کلیپس ماه",
    category: "روزمره",
    categoryId: "rozmarre",
    price: 0,
    image: "inges/mahsols/roozmare/r_8.jpg"
  },


  // ================= کودک =================

  {
    id: 14,
    name: "انبری آفتاب گردان",
    category: "کودک",
    categoryId: "koodak",
    price: 0,
    image: "inges/mahsols/koodak/k_1.jpg"
  },

  {
    id: 15,
    name: "انبری پاپیون",
    category: "کودک",
    categoryId: "koodak",
    price: 0,
    image: "inges/mahsols/koodak/k_2.jpg"
  },

  {
    id: 16,
    name: "کلیپس موی رنگی",
    category: "کودک",
    categoryId: "koodak",
    price: 0,
    image: "inges/mahsols/koodak/k_3.jpg"
  },

  {
    id: 17,
    name: "موی مصنوعی کرومی",
    category: "کودک",
    categoryId: "koodak",
    price: 0,
    image: "inges/mahsols/koodak/k_4.jpg"
  },


  // ================= پاپیون =================

  {
    id: 18,
    name: "اسکرانچی پاپیون",
    category: "پاپیون",
    categoryId: "papion",
    price: 0,
    image: "inges/mahsols/papioon/p_1.jpg"
  },

  {
    id: 19,
    name: "فرانسوی کیسه ای",
    category: "پاپیون",
    categoryId: "papion",
    price: 0,
    image: "inges/mahsols/papioon/p_2.jpg"
  },

  {
    id: 20,
    name: "پاپیون انبری",
    category: "پاپیون",
    categoryId: "papion",
    price: 0,
    image: "inges/mahsols/papioon/p_3.jpg"
  },

  {
    id: 21,
    name: "پاپیون مخمل",
    category: "پاپیون",
    categoryId: "papion",
    price: 0,
    image: "inges/mahsols/papioon/p_4.jpg"
  }


];


// ==========================================
// تبدیل قیمت به فرمت فارسی
// ==========================================

function formatPrice(price) {

  return Number(price).toLocaleString("fa-IR") + " تومان";

}


// ==========================================
// گرفتن محصولات یک دسته
// ==========================================

function getProductsByCategory(categoryId) {

  return products.filter(
    product => product.categoryId === categoryId
  );

}


// ==========================================
// پیدا کردن محصول با ID
// ==========================================

function getProductById(id) {

  return products.find(
    product => product.id === Number(id)
  );

}