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
    name: "انواع محصولات فروشگاه اکسسوری مو فرفری   شناخته شده با اسم فرفری",
    category: "مجلسی",
    categoryId: "majlesi",
    image: "inges/mahsols/mokhtalef/mo1.jpg",
    alt: "انواع محصولات فروشگاه اکسسوری مو فرفری   شناخته شده با اسم فرفری اکسسوری فرفری فروشگاه گل سر فرفری با فعالیت در اینستاگرام و ایتا",
  },

  {
    id: 7,
    name: "انواع محصولات فروشگاه اکسسوری مو فرفری   شناخته شده با اسم فرفری",
    category: "مجلسی",
    categoryId: "majlesi",
    image: "inges/mahsols/mokhtalef/mo2.jpg",
    alt: "انواع محصولات فروشگاه اکسسوری مو فرفری   شناخته شده با اسم فرفری اکسسوری فرفری فروشگاه گل سر فرفری با فعالیت در اینستاگرام و ایتا",
  },

  {
    id: 8,
    name: "انواع محصولات فروشگاه اکسسوری مو فرفری   شناخته شده با اسم فرفری",
    category: "مجلسی",
    categoryId: "majlesi",
    image: "inges/mahsols/mokhtalef/mo3.jpg",
    alt: "انواع محصولات فروشگاه اکسسوری مو فرفری   شناخته شده با اسم فرفری اکسسوری فرفری فروشگاه گل سر فرفری با فعالیت در اینستاگرام و ایتا",
  },

  {
    id: 9,
    name: "انواع محصولات فروشگاه اکسسوری مو فرفری   شناخته شده با اسم فرفری",
    category: "مجلسی",
    categoryId: "majlesi",
    image: "inges/mahsols/mokhtalef/mo4.jpg",
    alt: "انواع محصولات فروشگاه اکسسوری مو فرفری   شناخته شده با اسم فرفری اکسسوری فرفری فروشگاه گل سر فرفری با فعالیت در اینستاگرام و ایتا",
  },

  {
    id: 10,
    name: "انواع محصولات فروشگاه اکسسوری مو فرفری   شناخته شده با اسم فرفری",
    category: "مجلسی",
    categoryId: "majlesi",
    image: "inges/mahsols/mokhtalef/mo5.jpg",
    alt: "انواع محصولات فروشگاه اکسسوری مو فرفری   شناخته شده با اسم فرفری اکسسوری فرفری فروشگاه گل سر فرفری با فعالیت در اینستاگرام و ایتا",
  },

  {
    id: 11,
    name: "انواع محصولات فروشگاه اکسسوری مو فرفری   شناخته شده با اسم فرفری",
    category: "مجلسی",
    categoryId: "majlesi",
    image: "inges/mahsols/mokhtalef/mo7.jpg",
    alt: "انواع محصولات فروشگاه اکسسوری مو فرفری   شناخته شده با اسم فرفری اکسسوری فرفری فروشگاه گل سر فرفری با فعالیت در اینستاگرام و ایتا",
  },

  {
    id: 12,
    name: "انواع محصولات فروشگاه اکسسوری مو فرفری   شناخته شده با اسم فرفری",
    category: "مجلسی",
    categoryId: "majlesi",
    image: "inges/mahsols/mokhtalef/mo8.jpg",
    alt: "انواع محصولات فروشگاه اکسسوری مو فرفری   شناخته شده با اسم فرفری اکسسوری فرفری فروشگاه گل سر فرفری با فعالیت در اینستاگرام و ایتا",
  },

  {
    id: 13,
    name: "انواع محصولات فروشگاه اکسسوری مو فرفری   شناخته شده با اسم فرفری",
    category: "مجلسی",
    categoryId: "majlesi",
    image: "inges/mahsols/mokhtalef/mo9.jpg",
    alt: "انواع محصولات فروشگاه اکسسوری مو فرفری   شناخته شده با اسم فرفری اکسسوری فرفری فروشگاه گل سر فرفری با فعالیت در اینستاگرام و ایتا",
  },

  {
    id: 14,
    name: "انواع محصولات فروشگاه اکسسوری مو فرفری   شناخته شده با اسم فرفری",
    category: "مجلسی",
    categoryId: "majlesi",
    image: "inges/mahsols/mokhtalef/mo10.jpg",
    alt: "انواع محصولات فروشگاه اکسسوری مو فرفری   شناخته شده با اسم فرفری اکسسوری فرفری فروشگاه گل سر فرفری با فعالیت در اینستاگرام و ایتا",
  },

  {
    id: 15,
    name: "انواع محصولات فروشگاه اکسسوری مو فرفری   شناخته شده با اسم فرفری",
    category: "مجلسی",
    categoryId: "majlesi",
    image: "inges/mahsols/mokhtalef/mo11.jpg",
    alt: "انواع محصولات فروشگاه اکسسوری مو فرفری   شناخته شده با اسم فرفری اکسسوری فرفری فروشگاه گل سر فرفری با فعالیت در اینستاگرام و ایتا",
  },

  {
    id: 16,
    name: "انواع محصولات فروشگاه اکسسوری مو فرفری   شناخته شده با اسم فرفری",
    category: "مجلسی",
    categoryId: "majlesi",
    image: "inges/mahsols/mokhtalef/mo12.jpg",
    alt: "انواع محصولات فروشگاه اکسسوری مو فرفری   شناخته شده با اسم فرفری اکسسوری فرفری فروشگاه گل سر فرفری با فعالیت در اینستاگرام و ایتا",
  },

  {
    id: 17,
    name: "انواع محصولات فروشگاه اکسسوری مو فرفری   شناخته شده با اسم فرفری",
    category: "مجلسی",
    categoryId: "majlesi",
    image: "inges/mahsols/mokhtalef/mo13.jpg",
    alt: "انواع محصولات فروشگاه اکسسوری مو فرفری   شناخته شده با اسم فرفری اکسسوری فرفری فروشگاه گل سر فرفری با فعالیت در اینستاگرام و ایتا",
  },

  {
    id: 18,
    name: "انواع محصولات فروشگاه اکسسوری مو فرفری   شناخته شده با اسم فرفری",
    category: "مجلسی",
    categoryId: "majlesi",
    image: "inges/mahsols/mokhtalef/mo14.jpg",
    alt: "انواع محصولات فروشگاه اکسسوری مو فرفری   شناخته شده با اسم فرفری اکسسوری فرفری فروشگاه گل سر فرفری با فعالیت در اینستاگرام و ایتا",
  },

  {
    id: 19,
    name: "انواع محصولات فروشگاه اکسسوری مو فرفری   شناخته شده با اسم فرفری",
    category: "مجلسی",
    categoryId: "majlesi",
    image: "inges/mahsols/mokhtalef/mo15.jpg",
    alt: "انواع محصولات فروشگاه اکسسوری مو فرفری   شناخته شده با اسم فرفری اکسسوری فرفری فروشگاه گل سر فرفری با فعالیت در اینستاگرام و ایتا",
  },

  {
    id: 20,
    name: "انواع محصولات فروشگاه اکسسوری مو فرفری   شناخته شده با اسم فرفری",
    category: "مجلسی",
    categoryId: "majlesi",
    image: "inges/mahsols/mokhtalef/mo16.jpg",
    alt: "انواع محصولات فروشگاه اکسسوری مو فرفری   شناخته شده با اسم فرفری اکسسوری فرفری فروشگاه گل سر فرفری با فعالیت در اینستاگرام و ایتا",
  },

  {
    id: 21,
    name: "انواع محصولات فروشگاه اکسسوری مو فرفری   شناخته شده با اسم فرفری",
    category: "مجلسی",
    categoryId: "majlesi",
    image: "inges/mahsols/mokhtalef/mo17.jpg",
    alt: "انواع محصولات فروشگاه اکسسوری مو فرفری   شناخته شده با اسم فرفری اکسسوری فرفری فروشگاه گل سر فرفری با فعالیت در اینستاگرام و ایتا",
  },

  {
    id: 22,
    name: "انواع محصولات فروشگاه اکسسوری مو فرفری   شناخته شده با اسم فرفری",
    category: "مجلسی",
    categoryId: "majlesi",
    image: "inges/mahsols/mokhtalef/mo18.jpg",
    alt: "انواع محصولات فروشگاه اکسسوری مو فرفری   شناخته شده با اسم فرفری اکسسوری فرفری فروشگاه گل سر فرفری با فعالیت در اینستاگرام و ایتا",
  },

  {
    id: 23,
    name: "انواع محصولات فروشگاه اکسسوری مو فرفری   شناخته شده با اسم فرفری",
    category: "مجلسی",
    categoryId: "majlesi",
    image: "inges/mahsols/mokhtalef/mo19.jpg",
    alt: "انواع محصولات فروشگاه اکسسوری مو فرفری   شناخته شده با اسم فرفری اکسسوری فرفری فروشگاه گل سر فرفری با فعالیت در اینستاگرام و ایتا",
  },

  {
    id: 24,
    name: "انواع محصولات فروشگاه اکسسوری مو فرفری   شناخته شده با اسم فرفری",
    category: "مجلسی",
    categoryId: "majlesi",
    image: "inges/mahsols/mokhtalef/mo20.jpg",
    alt: "انواع محصولات فروشگاه اکسسوری مو فرفری   شناخته شده با اسم فرفری اکسسوری فرفری فروشگاه گل سر فرفری با فعالیت در اینستاگرام و ایتا",
  },

  {
    id: 25,
    name: "انواع محصولات فروشگاه اکسسوری مو فرفری   شناخته شده با اسم فرفری",
    category: "مجلسی",
    categoryId: "majlesi",
    image: "inges/mahsols/mokhtalef/mo21.jpg",
    alt: "انواع محصولات فروشگاه اکسسوری مو فرفری   شناخته شده با اسم فرفری اکسسوری فرفری فروشگاه گل سر فرفری با فعالیت در اینستاگرام و ایتا",
  },

  {
    id: 26,
    name: "انواع محصولات فروشگاه اکسسوری مو فرفری   شناخته شده با اسم فرفری",
    category: "مجلسی",
    categoryId: "majlesi",
    image: "inges/mahsols/mokhtalef/mo22.jpg",
    alt: "انواع محصولات فروشگاه اکسسوری مو فرفری   شناخته شده با اسم فرفری اکسسوری فرفری فروشگاه گل سر فرفری با فعالیت در اینستاگرام و ایتا",
  },

  {
    id: 27,
    name: "انواع محصولات فروشگاه اکسسوری مو فرفری   شناخته شده با اسم فرفری",
    category: "مجلسی",
    categoryId: "majlesi",
    image: "inges/mahsols/mokhtalef/mo23.jpg",
    alt: "انواع محصولات فروشگاه اکسسوری مو فرفری   شناخته شده با اسم فرفری اکسسوری فرفری فروشگاه گل سر فرفری با فعالیت در اینستاگرام و ایتا",
  },

  {
    id: 28,
    name: "انواع محصولات فروشگاه اکسسوری مو فرفری   شناخته شده با اسم فرفری",
    category: "مجلسی",
    categoryId: "majlesi",
    image: "inges/mahsols/mokhtalef/mo24.jpg",
    alt: "انواع محصولات فروشگاه اکسسوری مو فرفری   شناخته شده با اسم فرفری اکسسوری فرفری فروشگاه گل سر فرفری با فعالیت در اینستاگرام و ایتا",
  },

  {
    id: 29,
    name: "انواع محصولات فروشگاه اکسسوری مو فرفری   شناخته شده با اسم فرفری",
    category: "مجلسی",
    categoryId: "majlesi",
    image: "inges/mahsols/mokhtalef/mo25.jpg",
    alt: "انواع محصولات فروشگاه اکسسوری مو فرفری   شناخته شده با اسم فرفری اکسسوری فرفری فروشگاه گل سر فرفری با فعالیت در اینستاگرام و ایتا",
  },

  {
    id: 30,
    name: "انواع محصولات فروشگاه اکسسوری مو فرفری   شناخته شده با اسم فرفری",
    category: "مجلسی",
    categoryId: "majlesi",
    image: "inges/mahsols/mokhtalef/mo26.jpg",
    alt: "انواع محصولات فروشگاه اکسسوری مو فرفری   شناخته شده با اسم فرفری اکسسوری فرفری فروشگاه گل سر فرفری با فعالیت در اینستاگرام و ایتا",
  },

  {
    id: 31,
    name: "انواع محصولات فروشگاه اکسسوری مو فرفری   شناخته شده با اسم فرفری",
    category: "مجلسی",
    categoryId: "majlesi",
    image: "inges/mahsols/mokhtalef/mo27.jpg",
    alt: "انواع محصولات فروشگاه اکسسوری مو فرفری   شناخته شده با اسم فرفری اکسسوری فرفری فروشگاه گل سر فرفری با فعالیت در اینستاگرام و ایتا",
  },

  {
    id: 32,
    name: "انواع محصولات فروشگاه اکسسوری مو فرفری   شناخته شده با اسم فرفری",
    category: "مجلسی",
    categoryId: "majlesi",
    image: "inges/mahsols/mokhtalef/mo28.jpg",
    alt: "انواع محصولات فروشگاه اکسسوری مو فرفری   شناخته شده با اسم فرفری اکسسوری فرفری فروشگاه گل سر فرفری با فعالیت در اینستاگرام و ایتا",
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
