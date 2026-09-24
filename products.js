const products = [
  // =========================
  // مجلسی
  // =========================

  {
    id: 1,
    categoryId: "majlesi",
    name: "گل سر مجلسی نگین‌دار",
    price: 85000,
    image: "inges/mahsols/mojlesi/mojlesi1.jpg",
    alt: "گل سر مجلسی نگین‌دار فر فری"
  },
  {
    id: 2,
    categoryId: "majlesi",
    name: "گیره موی مجلسی طرح ظریف",
    price: 75000,
    image: "inges/mahsols/mojlesi/mojlesi2.jpg",
    alt: "گیره موی مجلسی فر فری"
  },
  {
    id: 3,
    categoryId: "majlesi",
    name: "کلیپس موی مجلسی دخترانه",
    price: 95000,
    image: "inges/mahsols/mojlesi/mojlesi3.jpg",
    alt: "کلیپس موی مجلسی دخترانه"
  },
  {
    id: 4,
    categoryId: "majlesi",
    name: "اکسسوری موی مناسب مهمانی",
    price: 90000,
    image: "inges/mahsols/mojlesi/mojlesi4.jpg",
    alt: "اکسسوری موی مناسب مهمانی"
  },
  {
    id: 5,
    categoryId: "majlesi",
    name: "گل سر دخترانه برای استایل رسمی",
    price: 80000,
    image: "inges/mahsols/mojlesi/mojlesi5.jpg",
    alt: "گل سر دخترانه برای استایل رسمی"
  },

  {
    id: 6,
    categoryId: "majlesi",
    name: "اکسسوری موی دخترانه با طراحی زیبا",
    price: 70000,
    image: "inges/mahsols/mokhtalef/mo1.jpg",
    alt: "اکسسوری موی دخترانه با طراحی زیبا"
  },
  {
    id: 7,
    categoryId: "majlesi",
    name: "گیره موی شیک برای استفاده روزانه",
    price: 65000,
    image: "inges/mahsols/mokhtalef/mo2.jpg",
    alt: "گیره موی شیک دخترانه"
  },
  {
    id: 8,
    categoryId: "majlesi",
    name: "کلیپس مو با ظاهر ساده و جذاب",
    price: 75000,
    image: "inges/mahsols/mokhtalef/mo3.jpg",
    alt: "کلیپس مو با طراحی ساده"
  },
  {
    id: 9,
    categoryId: "majlesi",
    name: "اکسسوری مو برای تکمیل استایل",
    price: 80000,
    image: "inges/mahsols/mokhtalef/mo4.jpg",
    alt: "اکسسوری مو برای تکمیل استایل"
  },
  {
    id: 10,
    categoryId: "majlesi",
    name: "گیره دخترانه مناسب مدل‌های مختلف مو",
    price: 70000,
    image: "inges/mahsols/mokhtalef/mo5.jpg",
    alt: "گیره دخترانه مناسب مو"
  },
  {
    id: 11,
    categoryId: "majlesi",
    name: "اکسسوری موی ظریف و کاربردی",
    price: 65000,
    image: "inges/mahsols/mokhtalef/mo7.jpg",
    alt: "اکسسوری موی ظریف و کاربردی"
  },
  {
    id: 12,
    categoryId: "majlesi",
    name: "کلیپس دخترانه مناسب استایل‌های مختلف",
    price: 75000,
    image: "inges/mahsols/mokhtalef/mo8.jpg",
    alt: "کلیپس دخترانه برای استایل‌های مختلف"
  },
  {
    id: 13,
    categoryId: "majlesi",
    name: "گیره مو با طراحی دخترانه",
    price: 60000,
    image: "inges/mahsols/mokhtalef/mo9.jpg",
    alt: "گیره مو با طراحی دخترانه"
  },
  {
    id: 14,
    categoryId: "majlesi",
    name: "اکسسوری مو برای استایل‌های خاص",
    price: 80000,
    image: "inges/mahsols/mokhtalef/mo10.jpg",
    alt: "اکسسوری مو برای استایل خاص"
  },
  {
    id: 15,
    categoryId: "majlesi",
    name: "گیره موی کوچک و کاربردی",
    price: 55000,
    image: "inges/mahsols/mokhtalef/mo11.jpg",
    alt: "گیره موی کوچک دخترانه"
  },
  {
    id: 16,
    categoryId: "majlesi",
    name: "کلیپس موی دخترانه با ظاهر متفاوت",
    price: 75000,
    image: "inges/mahsols/mokhtalef/mo12.jpg",
    alt: "کلیپس موی دخترانه با ظاهر متفاوت"
  },
  {
    id: 17,
    categoryId: "majlesi",
    name: "اکسسوری مو مناسب هدیه دادن",
    price: 85000,
    image: "inges/mahsols/mokhtalef/mo13.jpg",
    alt: "اکسسوری مو مناسب هدیه"
  },
  {
    id: 18,
    categoryId: "majlesi",
    name: "گل سر دخترانه با طراحی چشمگیر",
    price: 90000,
    image: "inges/mahsols/mokhtalef/mo14.jpg",
    alt: "گل سر دخترانه با طراحی زیبا"
  },
  {
    id: 19,
    categoryId: "majlesi",
    name: "گیره مو برای استفاده در مهمانی",
    price: 80000,
    image: "inges/mahsols/mokhtalef/mo15.jpg",
    alt: "گیره مو مناسب مهمانی"
  },
  {
    id: 20,
    categoryId: "majlesi",
    name: "اکسسوری موی دخترانه با ظاهر شیک",
    price: 75000,
    image: "inges/mahsols/mokhtalef/mo16.jpg",
    alt: "اکسسوری موی دخترانه شیک"
  },
  {
    id: 21,
    categoryId: "majlesi",
    name: "کلیپس مو مناسب آرایش‌های دخترانه",
    price: 70000,
    image: "inges/mahsols/mokhtalef/mo17.jpg",
    alt: "کلیپس مو مناسب استایل دخترانه"
  },
  {
    id: 22,
    categoryId: "majlesi",
    name: "گیره موی مناسب استایل روزمره",
    price: 60000,
    image: "inges/mahsols/mokhtalef/mo18.jpg",
    alt: "گیره موی مناسب استفاده روزانه"
  },
  {
    id: 23,
    categoryId: "majlesi",
    name: "اکسسوری مو با طراحی ساده و شیک",
    price: 70000,
    image: "inges/mahsols/mokhtalef/mo19.jpg",
    alt: "اکسسوری مو با طراحی ساده"
  },
  {
    id: 24,
    categoryId: "majlesi",
    name: "گل سر مناسب استایل دخترانه",
    price: 75000,
    image: "inges/mahsols/mokhtalef/mo20.jpg",
    alt: "گل سر مناسب استایل دخترانه"
  },
  {
    id: 25,
    categoryId: "majlesi",
    name: "کلیپس مو برای جمع کردن موها",
    price: 65000,
    image: "inges/mahsols/mokhtalef/mo21.jpg",
    alt: "کلیپس مو برای جمع کردن مو"
  },
  {
    id: 26,
    categoryId: "majlesi",
    name: "گیره مو با فرم متفاوت",
    price: 70000,
    image: "inges/mahsols/mokhtalef/mo22.jpg",
    alt: "گیره مو با طراحی متفاوت"
  },
  {
    id: 27,
    categoryId: "majlesi",
    name: "اکسسوری موی دخترانه برای استایل خاص",
    price: 80000,
    image: "inges/mahsols/mokhtalef/mo23.jpg",
    alt: "اکسسوری موی دخترانه برای استایل خاص"
  },
  {
    id: 28,
    categoryId: "majlesi",
    name: "کلیپس دخترانه با ظاهر جذاب",
    price: 75000,
    image: "inges/mahsols/mokhtalef/mo24.jpg",
    alt: "کلیپس دخترانه با ظاهر جذاب"
  },
  {
    id: 29,
    categoryId: "majlesi",
    name: "گیره موی دخترانه برای استفاده آسان",
    price: 60000,
    image: "inges/mahsols/mokhtalef/mo25.jpg",
    alt: "گیره موی دخترانه کاربردی"
  },
  {
    id: 30,
    categoryId: "majlesi",
    name: "اکسسوری مو برای ظاهر مرتب‌تر",
    price: 70000,
    image: "inges/mahsols/mokhtalef/mo26.jpg",
    alt: "اکسسوری مو برای ظاهر مرتب"
  },
  {
    id: 31,
    categoryId: "majlesi",
    name: "گل سر دخترانه با سبک متفاوت",
    price: 80000,
    image: "inges/mahsols/mokhtalef/mo27.jpg",
    alt: "گل سر دخترانه با سبک متفاوت"
  },
  {
    id: 32,
    categoryId: "majlesi",
    name: "اکسسوری موی فر فری برای استایل دخترانه",
    price: 75000,
    image: "inges/mahsols/mokhtalef/mo28.jpg",
    alt: "اکسسوری موی فر فری دخترانه"
  },


  // =========================
  // روزمره
  // =========================

  {
    id: 33,
    categoryId: "rozmarre",
    name: "کش موی کودکانه رنگی",
    price: 45000,
    image: "inges/mahsols/rozmarre/r_1.jpg",
    alt: "کش موی کودکانه رنگی"
  },
  {
    id: 34,
    categoryId: "rozmarre",
    name: "کلیپس بابونه دخترانه",
    price: 55000,
    image: "inges/mahsols/rozmarre/r_2.jpg",
    alt: "کلیپس بابونه دخترانه"
  },
  {
    id: 35,
    categoryId: "rozmarre",
    name: "کلیپس گل دخترانه",
    price: 55000,
    image: "inges/mahsols/rozmarre/r_3.jpg",
    alt: "کلیپس گل دخترانه"
  },
  {
    id: 36,
    categoryId: "rozmarre",
    name: "کلیپس پاپیون کوچک",
    price: 60000,
    image: "inges/mahsols/rozmarre/r_4.jpg",
    alt: "کلیپس پاپیون کوچک"
  },
  {
    id: 37,
    categoryId: "rozmarre",
    name: "کش موی مناسب استفاده روزانه",
    price: 45000,
    image: "inges/mahsols/rozmarre/r_5.jpg",
    alt: "کش موی مناسب استفاده روزانه"
  },
  {
    id: 38,
    categoryId: "rozmarre",
    name: "گیره موی ساده دخترانه",
    price: 50000,
    image: "inges/mahsols/rozmarre/r_6.jpg",
    alt: "گیره موی ساده دخترانه"
  },
  {
    id: 39,
    categoryId: "rozmarre",
    name: "اکسسوری مو برای استفاده روزمره",
    price: 55000,
    image: "inges/mahsols/rozmarre/r_7.jpg",
    alt: "اکسسوری مو برای استفاده روزمره"
  },
  {
    id: 40,
    categoryId: "rozmarre",
    name: "کلیپس موی کاربردی دخترانه",
    price: 60000,
    image: "inges/mahsols/rozmarre/r_8.jpg",
    alt: "کلیپس موی کاربردی دخترانه"
  },


  // =========================
  // کودک
  // =========================

  {
    id: 41,
    categoryId: "koodak",
    name: "گیره انبری آفتابگردان",
    price: 55000,
    image: "inges/mahsols/koodak/k_1.jpg",
    alt: "گیره انبری آفتابگردان کودکانه"
  },
  {
    id: 42,
    categoryId: "koodak",
    name: "گیره انبری پاپیون",
    price: 55000,
    image: "inges/mahsols/koodak/k_2.jpg",
    alt: "گیره انبری پاپیون کودکانه"
  },
  {
    id: 43,
    categoryId: "koodak",
    name: "کلیپس موی رنگی کودکانه",
    price: 50000,
    image: "inges/mahsols/koodak/k_3.jpg",
    alt: "کلیپس موی رنگی کودکانه"
  },
  {
    id: 44,
    categoryId: "koodak",
    name: "موی مصنوعی کرومی",
    price: 85000,
    image: "inges/mahsols/koodak/k_4.jpg",
    alt: "موی مصنوعی کرومی کودکانه"
  },


  // =========================
  // پاپیون
  // =========================

  {
    id: 45,
    categoryId: "papion",
    name: "اسکرانچی پاپیونی دخترانه",
    price: 65000,
    image: "inges/mahsols/papion/p_1.jpg",
    alt: "اسکرانچی پاپیونی دخترانه"
  },
  {
    id: 46,
    categoryId: "papion",
    name: "پاپیون فرانسوی کیسه‌ای",
    price: 75000,
    image: "inges/mahsols/papion/p_2.jpg",
    alt: "پاپیون فرانسوی کیسه‌ای"
  },
  {
    id: 47,
    categoryId: "papion",
    name: "پاپیون انبری دخترانه",
    price: 65000,
    image: "inges/mahsols/papion/p_3.jpg",
    alt: "پاپیون انبری دخترانه"
  },
  {
    id: 48,
    categoryId: "papion",
    name: "پاپیون مخمل مو",
    price: 75000,
    image: "inges/mahsols/papion/p_4.jpg",
    alt: "پاپیون مخمل مو"
  }
];


// =========================
// توابع محصولات
// =========================

function getProductsByCategory(categoryId) {
  return products.filter((product) => product.categoryId === categoryId);
}

function getProductById(id) {
  return products.find((product) => product.id === Number(id));
    }
