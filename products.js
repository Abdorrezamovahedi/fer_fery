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
    alt: "کلیپس پاپیون مجلسی فر فری",
  },

  {
    id: 2,
    name: "کلیپس مجلسی",
    category: "مجلسی",
    categoryId: "majlesi",
    image: "inges/mahsols/majlesy/m_2.jpg",
    alt: "کلیپس موی مجلسی فر فری",
  },

  {
    id: 3,
    name: "چفتی پروانه",
    category: "مجلسی",
    categoryId: "majlesi",
    image: "inges/mahsols/majlesy/m_3.jpg",
    alt: "چفتی موی طرح پروانه مجلسی فر فری",
  },

  {
    id: 4,
    name: "تاج کودک",
    category: "مجلسی",
    categoryId: "majlesi",
    image: "inges/mahsols/majlesy/m_4.jpg",
    alt: "تاج موی کودک مجلسی فر فری",
  },

  {
    id: 5,
    name: "کلیپس زربان",
    category: "مجلسی",
    categoryId: "majlesi",
    image: "inges/mahsols/majlesy/m_5.jpg",
    alt: "کلیپس"
  

  // ================= روزمره =================

  {
    id: 33,
    name: "کش کودک",
    category: "روزمره",
    categoryId: "rozmarre",
    image: "inges/mahsols/roozmare/r_1.jpg",
    alt: "کش موی کودک روزمره فر فری",
  },

  {
    id: 34,
    name: "کلیپس بابونه",
    category: "روزمره",
    categoryId: "rozmarre",
    image: "inges/mahsols/roozmare/r_2.jpg",
    alt: "کلیپس موی طرح بابونه روزمره فر فری",
  },

  {
    id: 35,
    name: "کلیپس گل",
    category: "روزمره",
    categoryId: "rozmarre",
    image: "inges/mahsols/roozmare/r_3.jpg",
    alt: "کلیپس موی طرح گل روزمره فر فری",
  },

  {
    id: 36,
    name: "کلیپس پاپیون",
    category: "روزمره",
    categoryId: "rozmarre",
    image: "inges/mahsols/roozmare/r_4.jpg",
    alt: "کلیپس موی پاپیونی روزمره فر فری",
  },

  {
    id: 37,
    name: "کش کودک",
    category: "روزمره",
    categoryId: "rozmarre",
    image: "inges/mahsols/roozmare/r_5.jpg",
    alt: "کش موی کودک روزمره فر فری",
  },

  {
    id: 38,
    name: "کلیپس با کیفیت",
    category: "روزمره",
    categoryId: "rozmarre",
    image: "inges/mahsols/roozmare/r_6.jpg",
    alt: "کلیپس موی با کیفیت روزمره فر فری",
  },

  {
    id: 39,
    name: "کلیپس اکریلیک",
    category: "روزمره",
    categoryId: "rozmarre",
    image: "inges/mahsols/roozmare/r_7.jpg",
    alt: "کلیپس موی اکریلیک روزمره فر فری",
  },

  {
    id: 40,
    name: "کلیپس ماه",
    category: "روزمره",
    categoryId: "rozmarre",
    image: "inges/mahsols/roozmare/r_8.jpg",
    alt: "کلیپس موی طرح ماه روزمره فر فری",
  },

  // ================= کودک =================

  {
    id: 41,
    name: "گیره انبری آفتابگردان",
    category: "کودک",
    categoryId: "koodak",
    image: "inges/mahsols/koodak/k_1.jpg",
    alt: "گیره موی انبری طرح آفتابگردان کودک فر فری",
  },

  {
    id: 42,
    name: "گیره انبری پاپیون",
    category: "کودک",
    categoryId: "koodak",
    image: "inges/mahsols/koodak/k_2.jpg",
    alt: "گیره موی انبری پاپیونی کودک فر فری",
  },

  {
    id: 43,
    name: "کلیپس موی رنگی",
    category: "کودک",
    categoryId: "koodak",
    image: "inges/mahsols/koodak/k_3.jpg",
    alt: "کلیپس موی رنگی کودک فر فری",
  },

  {
    id: 44,
    name: "موی مصنوعی کرومی",
    category: "کودک",
    categoryId: "koodak",
    image: "inges/mahsols/koodak/k_4.jpg",
    alt: "موی مصنوعی کرومی کودک فر فری",
  },

  // ================= پاپیون =================

  {
    id: 45,
    name: "اسکرانچی پاپیون",
    category: "پاپیون",
    categoryId: "papion",
    image: "inges/mahsols/papioon/p_1.jpg",
    alt: "اسکرانچی پاپیونی مو فر فری",
  },

  {
    id: 46,
    name: "فرانسوی کیسهای",
    category: "پاپیون",
    categoryId: "papion",
    image: "inges/mahsols/papioon/p_2.jpg",
    alt: "اکسسوری موی فرانسوی کیسهای فر فری",
  },

  {
    id: 47,
    name: "پاپیون انبری",
    category: "پاپیون",
    categoryId: "papion",
    image: "inges/mahsols/papioon/p_3.jpg",
    alt: "پاپیون انبری مو فر فری",
  },

  {
    id: 48,
    name: "پاپیون مخمل",
    category: "پاپیون",
    categoryId: "papion",
    image: "inges/mahsols/papioon/p_4.jpg",
    alt: "پاپیون مخمل مو فر فری",
  },
];

// ==========================================
// گرفتن محصولات یک دسته
// ==========================================

function getProductsByCategory(categoryId) {
  return products.filter((product) => product.categoryId === categoryId);
}

// ==========================================
// پیدا کردن محصول با ID
// ==========================================

function getProductById(id) {
  return products.find((product) => product.id === Number(id));
    }
