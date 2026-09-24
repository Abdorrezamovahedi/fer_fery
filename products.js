
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
    alt: "کلیپس زربان مجلسی فر فری",
  },

  {
    id: 6,
    name: "اکسسوری موی دخترانه",
    category: "مجلسی",
    categoryId: "majlesi",
    image: "inges/mahsols/mokhtalef/mo1.jpg",
    alt: "اکسسوری موی دخترانه فر فری",
  },

  {
    id: 7,
    name: "گیره موی شیک",
    category: "مجلسی",
    categoryId: "majlesi",
    image: "inges/mahsols/mokhtalef/mo2.jpg",
    alt: "گیره موی شیک دخترانه",
  },

  {
    id: 8,
    name: "کلیپس موی دخترانه",
    category: "مجلسی",
    categoryId: "majlesi",
    image: "inges/mahsols/mokhtalef/mo3.jpg",
    alt: "کلیپس موی دخترانه فر فری",
  },

  {
    id: 9,
    name: "اکسسوری مو برای مهمانی",
    category: "مجلسی",
    categoryId: "majlesi",
    image: "inges/mahsols/mokhtalef/mo4.jpg",
    alt: "اکسسوری مو مناسب مهمانی",
  },

  {
    id: 10,
    name: "گیره موی ظریف",
    category: "مجلسی",
    categoryId: "majlesi",
    image: "inges/mahsols/mokhtalef/mo5.jpg",
    alt: "گیره موی ظریف دخترانه",
  },

  {
    id: 11,
    name: "کلیپس موی مجلسی دخترانه",
    category: "مجلسی",
    categoryId: "majlesi",
    image: "inges/mahsols/mokhtalef/mo7.jpg",
    alt: "کلیپس موی مجلسی دخترانه",
  },

  {
    id: 12,
    name: "گیره مو با طراحی خاص",
    category: "مجلسی",
    categoryId: "majlesi",
    image: "inges/mahsols/mokhtalef/mo8.jpg",
    alt: "گیره مو با طراحی خاص",
  },

  {
    id: 13,
    name: "اکسسوری موی زیبا",
    category: "مجلسی",
    categoryId: "majlesi",
    image: "inges/mahsols/mokhtalef/mo9.jpg",
    alt: "اکسسوری موی زیبا دخترانه",
  },

  {
    id: 14,
    name: "کلیپس مو برای استایل دخترانه",
    category: "مجلسی",
    categoryId: "majlesi",
    image: "inges/mahsols/mokhtalef/mo10.jpg",
    alt: "کلیپس مو برای استایل دخترانه",
  },

  {
    id: 15,
    name: "گیره موی کوچک و کاربردی",
    category: "مجلسی",
    categoryId: "majlesi",
    image: "inges/mahsols/mokhtalef/mo11.jpg",
    alt: "گیره موی کوچک و کاربردی",
  },

  {
    id: 16,
    name: "اکسسوری مو برای استایل خاص",
    category: "مجلسی",
    categoryId: "majlesi",
    image: "inges/mahsols/mokhtalef/mo12.jpg",
    alt: "اکسسوری مو برای استایل خاص",
  },

  {
    id: 17,
    name: "کلیپس موی شیک دخترانه",
    category: "مجلسی",
    categoryId: "majlesi",
    image: "inges/mahsols/mokhtalef/mo13.jpg",
    alt: "کلیپس موی شیک دخترانه",
  },

  {
    id: 18,
    name: "گیره موی مناسب مهمانی",
    category: "مجلسی",
    categoryId: "majlesi",
    image: "inges/mahsols/mokhtalef/mo14.jpg",
    alt: "گیره موی مناسب مهمانی",
  },

  {
    id: 19,
    name: "اکسسوری موی ظریف دخترانه",
    category: "مجلسی",
    categoryId: "majlesi",
    image: "inges/mahsols/mokhtalef/mo15.jpg",
    alt: "اکسسوری موی ظریف دخترانه",
  },

  {
    id: 20,
    name: "کلیپس مو با ظاهر متفاوت",
    category: "مجلسی",
    categoryId: "majlesi",
    image: "inges/mahsols/mokhtalef/mo16.jpg",
    alt: "کلیپس مو با ظاهر متفاوت",
  },

  {
    id: 21,
    name: "گیره دخترانه برای استایل رسمی",
    category: "مجلسی",
    categoryId: "majlesi",
    image: "inges/mahsols/mokhtalef/mo17.jpg",
    alt: "گیره دخترانه برای استایل رسمی",
  },

  {
    id: 22,
    name: "اکسسوری مو برای استفاده روزانه",
    category: "مجلسی",
    categoryId: "majlesi",
    image: "inges/mahsols/mokhtalef/mo18.jpg",
    alt: "اکسسوری مو برای استفاده روزانه",
  },

  {
    id: 23,
    name: "کلیپس دخترانه با طراحی زیبا",
    category: "مجلسی",
    categoryId: "majlesi",
    image: "inges/mahsols/mokhtalef/mo19.jpg",
    alt: "کلیپس دخترانه با طراحی زیبا",
  },

  {
    id: 24,
    name: "گیره مو مناسب استایل مجلسی",
    category: "مجلسی",
    categoryId: "majlesi",
    image: "inges/mahsols/mokhtalef/mo20.jpg",
    alt: "گیره مو مناسب استایل مجلسی",
  },

  {
    id: 25,
    name: "اکسسوری مو با ظاهر ساده",
    category: "مجلسی",
    categoryId: "majlesi",
    image: "inges/mahsols/mokhtalef/mo21.jpg",
    alt: "اکسسوری مو با ظاهر ساده",
  },

  {
    id: 26,
    name: "کلیپس موی مناسب استایل‌های مختلف",
    category: "مجلسی",
    categoryId: "majlesi",
    image: "inges/mahsols/mokhtalef/mo22.jpg",
    alt: "کلیپس موی مناسب استایل‌های مختلف",
  },

  {
    id: 27,
    name: "گیره موی دخترانه با طراحی متفاوت",
    category: "مجلسی",
    categoryId: "majlesi",
    image: "inges/mahsols/mokhtalef/mo23.jpg",
    alt: "گیره موی دخترانه با طراحی متفاوت",
  },

  {
    id: 28,
    name: "اکسسوری موی مناسب استایل رسمی",
    category: "مجلسی",
    categoryId: "majlesi",
    image: "inges/mahsols/mokhtalef/mo24.jpg",
    alt: "اکسسوری موی مناسب استایل رسمی",
  },

  {
    id: 29,
    name: "کلیپس موی ظریف دخترانه",
    category: "مجلسی",
    categoryId: "majlesi",
    image: "inges/mahsols/mokhtalef/mo25.jpg",
    alt: "کلیپس موی ظریف دخترانه",
  },

  {
    id: 30,
    name: "گیره مو برای تکمیل استایل",
    category: "مجلسی",
    categoryId: "majlesi",
    image: "inges/mahsols/mokhtalef/mo26.jpg",
    alt: "گیره مو برای تکمیل استایل",
  },

  {
    id: 31,
    name: "اکسسوری موی دخترانه برای مهمانی",
    category: "مجلسی",
    categoryId: "majlesi",
    image: "inges/mahsols/mokhtalef/mo27.jpg",
    alt: "اکسسوری موی دخترانه برای مهمانی",
  },

  {
    id: 32,
    name: "کلیپس مو با طراحی جذاب",
    category: "مجلسی",
    categoryId: "majlesi",
    image: "inges/mahsols/mokhtalef/mo28.jpg",
    alt: "کلیپس مو با طراحی جذاب",
  },

  // ================= روزمره =================

  {
    id: 6,
    name: "کش کودک",
    category: "روزمره",
    categoryId: "rozmarre",
    image: "inges/mahsols/roozmare/r_1.jpg",
    alt: "کش موی کودک روزمره فر فری",
  },

  {
    id: 7,
    name: "کلیپس بابونه",
    category: "روزمره",
    categoryId: "rozmarre",
    image: "inges/mahsols/roozmare/r_2.jpg",
    alt: "کلیپس موی طرح بابونه روزمره فر فری",
  },

  {
    id: 8,
    name: "کلیپس گل",
    category: "روزمره",
    categoryId: "rozmarre",
    image: "inges/mahsols/roozmare/r_3.jpg",
    alt: "کلیپس موی طرح گل روزمره فر فری",
  },

  {
    id: 9,
    name: "کلیپس پاپیون",
    category: "روزمره",
    categoryId: "rozmarre",
    image: "inges/mahsols/roozmare/r_4.jpg",
    alt: "کلیپس موی پاپیونی روزمره فر فری",
  },

  {
    id: 10,
    name: "کش کودک",
    category: "روزمره",
    categoryId: "rozmarre",
    image: "inges/mahsols/roozmare/r_5.jpg",
    alt: "کش موی کودک روزمره فر فری",
  },

  {
    id: 11,
    name: "کلیپس با کیفیت",
    category: "روزمره",
    categoryId: "rozmarre",
    image: "inges/mahsols/roozmare/r_6.jpg",
    alt: "کلیپس موی با کیفیت روزمره فر فری",
  },

  {
    id: 12,
    name: "کلیپس اکریلیک",
    category: "روزمره",
    categoryId: "rozmarre",
    image: "inges/mahsols/roozmare/r_7.jpg",
    alt: "کلیپس موی اکریلیک روزمره فر فری",
  },

  {
    id: 13,
    name: "کلیپس ماه",
    category: "روزمره",
    categoryId: "rozmarre",
    image: "inges/mahsols/roozmare/r_8.jpg",
    alt: "کلیپس موی طرح ماه روزمره فر فری",
  },

  // ================= کودک =================

  {
    id: 14,
    name: "گیره انبری آفتابگردان",
    category: "کودک",
    categoryId: "koodak",
    image: "inges/mahsols/koodak/k_1.jpg",
    alt: "گیره موی انبری طرح آفتابگردان کودک فر فری",
  },

  {
    id: 15,
    name: "گیره انبری پاپیون",
    category: "کودک",
    categoryId: "koodak",
    image: "inges/mahsols/koodak/k_2.jpg",
    alt: "گیره موی انبری پاپیونی کودک فر فری",
  },

  {
    id: 16,
    name: "کلیپس موی رنگی",
    category: "کودک",
    categoryId: "koodak",
    image: "inges/mahsols/koodak/k_3.jpg",
    alt: "کلیپس موی رنگی کودک فر فری",
  },

  {
    id: 17,
    name: "موی مصنوعی کرومی",
    category: "کودک",
    categoryId: "koodak",
    image: "inges/mahsols/koodak/k_4.jpg",
    alt: "موی مصنوعی کرومی کودک فر فری",
  },

  // ================= پاپیون =================

  {
    id: 18,
    name: "اسکرانچی پاپیون",
    category: "پاپیون",
    categoryId: "papion",
    image: "inges/mahsols/papioon/p_1.jpg",
    alt: "اسکرانچی پاپیونی مو فر فری",
  },

  {
    id: 19,
    name: "فرانسوی کیسه‌ای",
    category: "پاپیون",
    categoryId: "papion",
    image: "inges/mahsols/papioon/p_2.jpg",
    alt: "اکسسوری موی فرانسوی کیسه‌ای فر فری",
  },

  {
    id: 20,
    name: "پاپیون انبری",
    category: "پاپیون",
    categoryId: "papion",
    image: "inges/mahsols/papioon/p_3.jpg",
    alt: "پاپیون انبری مو فر فری",
  },

  {
    id: 21,
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


