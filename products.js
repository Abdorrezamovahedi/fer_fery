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
    image: "inges/mahsols/majlesy/m_1.jpg",
    alt: "کلیپس پاپیون مجلسی فر فری"
  },

  {
    id: 2,
    name: "کلیپس مجلسی",
    category: "مجلسی",
    categoryId: "majlesi",
    image: "inges/mahsols/majlesy/m_2.jpg",
    alt: "کلیپس موی مجلسی فر فری"
  },

  {
    id: 3,
    name: "چفتی پروانه",
    category: "مجلسی",
    categoryId: "majlesi",
    image: "inges/mahsols/majlesy/m_3.jpg",
    alt: "چفتی موی طرح پروانه مجلسی فر فری"
  },

  {
    id: 4,
    name: "تاج کودک",
    category: "مجلسی",
    categoryId: "majlesi",
    image: "inges/mahsols/majlesy/m_4.jpg",
    alt: "تاج موی کودک مجلسی فر فری"
  },

  {
    id: 5,
    name: "کلیپس زربان",
    category: "مجلسی",
    categoryId: "majlesi",
    image: "inges/mahsols/majlesy/m_5.jpg",
    alt: "کلیپس زربان مجلسی فر فری"
  },


  // ================= روزمره =================

  {
    id: 6,
    name: "کش کودک",
    category: "روزمره",
    categoryId: "rozmarre",
    image: "inges/mahsols/roozmare/r_1.jpg",
    alt: "کش موی کودک روزمره فر فری"
  },

  {
    id: 7,
    name: "کلیپس بابونه",
    category: "روزمره",
    categoryId: "rozmarre",
    image: "inges/mahsols/roozmare/r_2.jpg",
    alt: "کلیپس موی طرح بابونه روزمره فر فری"
  },

  {
    id: 8,
    name: "کلیپس گل",
    category: "روزمره",
    categoryId: "rozmarre",
    image: "inges/mahsols/roozmare/r_3.jpg",
    alt: "کلیپس موی طرح گل روزمره فر فری"
  },

  {
    id: 9,
    name: "کلیپس پاپیون",
    category: "روزمره",
    categoryId: "rozmarre",
    image: "inges/mahsols/roozmare/r_4.jpg",
    alt: "کلیپس موی پاپیونی روزمره فر فری"
  },

  {
    id: 10,
    name: "کش کودک",
    category: "روزمره",
    categoryId: "rozmarre",
    image: "inges/mahsols/roozmare/r_5.jpg",
    alt: "کش موی کودک روزمره فر فری"
  },

  {
    id: 11,
    name: "کلیپس با کیفیت",
    category: "روزمره",
    categoryId: "rozmarre",
    image: "inges/mahsols/roozmare/r_6.jpg",
    alt: "کلیپس موی با کیفیت روزمره فر فری"
  },

  {
    id: 12,
    name: "کلیپس اکرولیک",
    category: "روزمره",
    categoryId: "rozmarre",
    image: "inges/mahsols/roozmare/r_7.jpg",
    alt: "کلیپس موی اکرولیک روزمره فر فری"
  },

  {
    id: 13,
    name: "کلیپس ماه",
    category: "روزمره",
    categoryId: "rozmarre",
    image: "inges/mahsols/roozmare/r_8.jpg",
    alt: "کلیپس موی طرح ماه روزمره فر فری"
  },


  // ================= کودک =================

  {
    id: 14,
    name: "انبری آفتاب گردان",
    category: "کودک",
    categoryId: "koodak",
    image: "inges/mahsols/koodak/k_1.jpg",
    alt: "گیره موی انبری طرح آفتابگردان کودک فر فری"
  },

  {
    id: 15,
    name: "انبری پاپیون",
    category: "کودک",
    categoryId: "koodak",
    image: "inges/mahsols/koodak/k_2.jpg",
    alt: "گیره موی انبری پاپیونی کودک فر فری"
  },

  {
    id: 16,
    name: "کلیپس موی رنگی",
    category: "کودک",
    categoryId: "koodak",
    image: "inges/mahsols/koodak/k_3.jpg",
    alt: "کلیپس موی رنگی کودک فر فری"
  },

  {
    id: 17,
    name: "موی مصنوعی کرومی",
    category: "کودک",
    categoryId: "koodak",
    image: "inges/mahsols/koodak/k_4.jpg",
    alt: "موی مصنوعی کرومی کودک فر فری"
  },


  // ================= پاپیون =================

  {
  id: 18,
  name: "اسکرانچی پاپیون",
  category: "پاپیون",
  categoryId: "papion",
  image: "inges/mahsols/papioon/p_1.jpg",
  alt: "اسکرانچی پاپیونی مو فر فری"
},

{
  id: 19,
  name: "فرانسوی کیسه ای",
  category: "پاپیون",
  categoryId: "papion",
  image: "inges/mahsols/papioon/p_2.jpg",
  alt: "اکسسوری موی فرانسوی کیسه ای فر فری"
},

{
  id: 20,
  name: "پاپیون انبری",
  category: "پاپیون",
  categoryId: "papion",
  image: "inges/mahsols/papioon/p_3.jpg",
  alt: "پاپیون انبری مو فر فری"
},

{
  id: 21,
  name: "پاپیون مخمل",
  category: "پاپیون",
  categoryId: "papion",
  image: "inges/mahsols/papioon/p_4.jpg",
  alt: "پاپیون مخمل مو فر فری"
}

];


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