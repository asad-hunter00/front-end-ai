import { confirmedLocation } from "./location";
import type { SiteContent, MenuItem } from "../types";
export const initialContent: SiteContent = {
  settings: {
    name: "O‘ktam bobo choyxonasi",
    ...confirmedLocation,
    addressLocalized: {
      uz: confirmedLocation.address,
      ru: "Узбекистан, Джизакская область, Джизак, улица Сарвара Азимова, 47, 131100",
      en: "47 Sarvar Azimov Street, 131100, Jizzakh, Jizzakh Region, Uzbekistan",
    },
    scheduleLocalized: {
      uz: "Yakshanba ishlaydi. Ayrim chorshanba kunlari dam beriladi. Kelishdan oldin telefon orqali aniqlashtiring.",
      ru: "Работаем по воскресеньям. В отдельные среды бывают выходные. Перед визитом уточните по телефону.",
      en: "Open on Sundays. Some Wednesdays are days off. Call before your visit to confirm.",
    },
    hours: "09:00–23:50",
    phones: ["+998 91 567 28 15", "+998 90 486 96 11"],
  },
  rooms: [],
  gallery: [
    {
      id: "xona-photo",
      aiEnhanced: true,
      src: "/images/gallery/xona.webp",
      alt: {
        uz: "Shinam mebellar va konditsionerli xona",
        ru: "Комната с удобной мебелью и кондиционером",
        en: "Room with comfortable furniture and air conditioning",
      },
    },
    {
      id: "zal-photo-1",
      aiEnhanced: true,
      src: "/images/gallery/zal-1.webp",
      alt: {
        uz: "Choyxonaning stol-stulli zali",
        ru: "Зал чайханы со столами и стульями",
        en: "Teahouse hall with tables and chairs",
      },
    },
    {
      id: "zal-photo-2",
      aiEnhanced: true,
      src: "/images/gallery/zal-2.webp",
      alt: {
        uz: "Choyxona zalining ichki ko‘rinishi",
        ru: "Интерьер зала чайханы",
        en: "Interior of the teahouse hall",
      },
    },
    {
      id: "mangal",
      aiEnhanced: true,
      src: "/images/gallery/mangal.webp",
      alt: {
        uz: "Cho‘g‘ ustida pishayotgan shashliklar",
        ru: "Шашлыки на углях",
        en: "Shashlik over glowing coals",
      },
    },
    {
      id: "dasturxon",
      aiEnhanced: true,
      src: "/images/gallery/dasturxon.webp",
      alt: {
        uz: "Mehmonlar uchun yozilgan dasturxon",
        ru: "Накрытый стол для гостей",
        en: "A table set for guests",
      },
    },
    {
      id: "kirish",
      aiEnhanced: true,
      src: "/images/gallery/kirish.webp",
      alt: {
        uz: "Choyxonaning kirish qismi",
        ru: "Вход в чайхану",
        en: "Teahouse entrance",
      },
    },
    {
      id: "hovli",
      aiEnhanced: true,
      src: "/images/gallery/hovli.webp",
      alt: {
        uz: "Choyxona hovlisi va yo‘lagi",
        ru: "Двор и проход чайханы",
        en: "Teahouse courtyard and walkway",
      },
    },
  ],
  announcements: [],
};
// Tasdiqlangan menyu va suratlarni shu yerga qo‘shing. Rasmlar public/images/ ichida saqlanadi.
export const menuItems: MenuItem[] = [
  {
    id: "qoy-koska",
    name: {
      uz: "Qo‘y koska",
      ru: "Коска из баранины",
      en: "Lamb koska",
    },
    image: "/images/menu/qoy-koska.webp",
    category: {
      uz: "Donalik shashliklar",
      ru: "Поштучные шашлыки",
      en: "Shashlik by the skewer",
    },
    reviews: [],
    meat: {
      uz: "Qo‘y go‘shti",
      ru: "Баранина",
      en: "Lamb",
    },
    description: {"uz": "Qo‘y go‘shtidan donalik shashlik. Qo‘y go‘shtini yoqtiradiganlar uchun.", "ru": "Поштучный шашлык из баранины — для любителей этого мяса.", "en": "Lamb shashlik, priced by the skewer."},
    price: 40000,
    portion: {
      uz: "1 dona",
      ru: "1 шт.",
      en: "1 skewer",
    },
  },
  {
    id: "mol-koska",
    name: {
      uz: "Mol koska",
      ru: "Коска из говядины",
      en: "Beef koska",
    },
    image: "/images/menu/mol-koska.webp",
    category: {
      uz: "Donalik shashliklar",
      ru: "Поштучные шашлыки",
      en: "Shashlik by the skewer",
    },
    reviews: [],
    meat: {
      uz: "Mol go‘shti",
      ru: "Говядина",
      en: "Beef",
    },
    description: {"uz": "Mol go‘shtidan donalik shashlik. Dasturxon uchun go‘shtli tanlov.", "ru": "Поштучный шашлык из говядины для вашего стола.", "en": "Beef shashlik, priced by the skewer."},
    price: 40000,
    portion: {
      uz: "1 dona",
      ru: "1 шт.",
      en: "1 skewer",
    },
  },
  {
    id: "keskis-shashlik",
    name: {
      uz: "Keskis shashlik",
      ru: "Шашлык «Кескис»",
      en: "Keskis shashlik",
    },
    image: "/images/menu/keskis-shashlik.webp",
    category: {
      uz: "Donalik shashliklar",
      ru: "Поштучные шашлыки",
      en: "Shashlik by the skewer",
    },
    reviews: [],
    description: {"uz": "Keskis — donalik shashliklarimizdan biri. Boshqa turlar bilan birga tanlab ko‘ring.", "ru": "«Кескис» — один из наших поштучных шашлыков. Можно выбрать вместе с другими видами.", "en": "Keskis is one of our individual shashlik options. Try it alongside another selection."},
    price: 40000,
    portion: {
      uz: "1 dona",
      ru: "1 шт.",
      en: "1 skewer",
    },
  },
  {
    id: "koska-rulet",
    name: {
      uz: "Koska rulet",
      ru: "Коска-рулет",
      en: "Koska roll",
    },
    image: "/images/menu/koska-rulet.webp",
    category: {
      uz: "Donalik shashliklar",
      ru: "Поштучные шашлыки",
      en: "Shashlik by the skewer",
    },
    reviews: [],
    description: {"uz": "Koska rulet — shashlik menyusidagi rulet varianti. Narx 1 dona uchun.", "ru": "«Коска-рулет» — вариант рулета в нашем меню шашлыков. Цена за штуку.", "en": "Koska roll is a roll-style option from our shashlik menu. Priced per piece."},
    price: 40000,
    portion: {
      uz: "1 dona",
      ru: "1 шт.",
      en: "1 skewer",
    },
  },
  {
    id: "qoy-biqin",
    name: {
      uz: "Qo‘y biqin shashlik",
      ru: "Шашлык «Куй бикин»",
      en: "Lamb biqin shashlik",
    },
    image: "/images/menu/qoy-biqin.webp",
    category: {
      uz: "Donalik shashliklar",
      ru: "Поштучные шашлыки",
      en: "Shashlik by the skewer",
    },
    reviews: [],
    meat: {
      uz: "Qo‘y go‘shti",
      ru: "Баранина",
      en: "Lamb",
    },
    description: {"uz": "Qo‘y biqinidan tayyorlanadigan shashlik. Narx 1 dona uchun.", "ru": "Шашлык из бараньего бока. Цена за штуку.", "en": "Shashlik made from lamb flank. Priced per piece."},
    price: 55000,
    portion: {
      uz: "1 dona",
      ru: "1 шт.",
      en: "1 skewer",
    },
  },
  {
    id: "bomba",
    name: {
      uz: "Bomba shashlik",
      ru: "Шашлык «Бомба»",
      en: "Bomba shashlik",
    },
    image: "/images/menu/bomba.webp",
    category: {
      uz: "Donalik shashliklar",
      ru: "Поштучные шашлыки",
      en: "Shashlik by the skewer",
    },
    reviews: [],
    description: {"uz": "Bomba — donalik shashliklar menyusidagi alohida tanlov. Narx 1 dona uchun.", "ru": "«Бомба» — отдельный вариант в меню поштучных шашлыков. Цена за штуку.", "en": "Bomba is a distinct option in our individual shashlik selection. Priced per piece."},
    price: 40000,
    portion: {
      uz: "1 dona",
      ru: "1 шт.",
      en: "1 skewer",
    },
  },
  {
    id: "rulet",
    name: {
      uz: "Rulet shashlik",
      ru: "Шашлык-рулет",
      en: "Roll shashlik",
    },
    image: "/images/menu/rulet.webp",
    category: {
      uz: "Donalik shashliklar",
      ru: "Поштучные шашлыки",
      en: "Shashlik by the skewer",
    },
    reviews: [],
    description: {"uz": "Rulet shashlik — rulet ko‘rinishidagi donalik tanlov.", "ru": "Шашлык-рулет — поштучный вариант в форме рулета.", "en": "Roll shashlik, served as an individual piece."},
    price: 40000,
    portion: {
      uz: "1 dona",
      ru: "1 шт.",
      en: "1 skewer",
    },
  },
  {
    id: "qoy-jigar",
    name: {
      uz: "Qo‘y jigar shashlik",
      ru: "Шашлык из бараньей печени",
      en: "Lamb liver shashlik",
    },
    image: "/images/menu/qoy-jigar.webp",
    category: {
      uz: "Donalik shashliklar",
      ru: "Поштучные шашлыки",
      en: "Shashlik by the skewer",
    },
    reviews: [],
    meat: {
      uz: "Qo‘y jigari",
      ru: "Баранья печень",
      en: "Lamb liver",
    },
    description: {"uz": "Qo‘y jigaridan tayyorlangan shashlik. Jigar taomlarini yoqtiradiganlar uchun.", "ru": "Шашлык из бараньей печени — для любителей блюд из печени.", "en": "Lamb liver shashlik for those who enjoy liver dishes."},
    price: 28000,
    portion: {
      uz: "1 dona",
      ru: "1 шт.",
      en: "1 skewer",
    },
  },
  {
    id: "tovuq",
    name: {
      uz: "Tovuq shashlik",
      ru: "Куриный шашлык",
      en: "Chicken shashlik",
    },
    image: "/images/menu/tovuq.webp",
    category: {
      uz: "Donalik shashliklar",
      ru: "Поштучные шашлыки",
      en: "Shashlik by the skewer",
    },
    reviews: [],
    meat: {
      uz: "Tovuq go‘shti",
      ru: "Курица",
      en: "Chicken",
    },
    description: {"uz": "Tovuq go‘shtidan tayyorlangan donalik shashlik.", "ru": "Поштучный шашлык из куриного мяса.", "en": "Chicken shashlik, priced by the skewer."},
    price: 18000,
    portion: {
      uz: "1 dona",
      ru: "1 шт.",
      en: "1 skewer",
    },
  },

  {
  "id": "tovuq-qanotchalari",
  "name": {
    "uz": "Tovuq qanotchalari shashlik",
    "ru": "Шашлык из куриных крылышек",
    "en": "Chicken wing shashlik"
  },
  "category": {
    "uz": "Donalik shashliklar",
    "ru": "Поштучные шашлыки",
    "en": "Shashlik by the skewer"
  },
  "description": {
    "uz": "Tovuq qanotchalaridan tayyorlangan shashlik. Narx 1 dona uchun.",
    "ru": "Шашлык из куриных крылышек. Цена за 1 штуку.",
    "en": "Shashlik made with chicken wings. Price per piece."
  },
  "meat": {
    "uz": "Tovuq qanotchalari",
    "ru": "Куриные крылышки",
    "en": "Chicken wings"
  },
  "price": 18000,
  "portion": {
    "uz": "1 dona",
    "ru": "1 шт.",
    "en": "1 piece"
  },
  "image": "/images/menu/tovuq-qanotchalari.png",
  "imageFit": "contain",
  "reviews": []
},

  {
    id: "qiyma",
    name: {
      uz: "Qiyma shashlik",
      ru: "Шашлык из фарша",
      en: "Minced meat shashlik",
    },
    category: {
      uz: "Donalik shashliklar",
      ru: "Поштучные шашлыки",
      en: "Shashlik by the skewer",
    },
    price: 32000,
    portion: {
      uz: "1 dona",
      ru: "1 шт.",
      en: "1 skewer",
    },
    description: {"uz": "Qiymadan tayyorlangan shashlik. Donalik va kiloli variantlari menyuda alohida ko‘rsatilgan.", "ru": "Шашлык из фарша. Поштучный вариант и вариант на килограмм указаны отдельно.", "en": "Minced meat shashlik. Individual and kilogram options are listed separately."},
    image: "/images/menu/qiyma.webp",
    reviews: [],
  },

  {
    id: "achchiq-chuchuk",
    name: {
      uz: "Achchiq-chuchuk",
      ru: "Ачичук",
      en: "Achichuk salad",
    },
    category: {
      uz: "Salatlar",
      ru: "Салаты",
      en: "Salads",
    },
    description: {
      uz: "Dasturxonga yengil qo‘shimcha — an’anaviy sabzavotli salat.",
      ru: "Лёгкое дополнение к столу — традиционный овощной салат.",
      en: "A light addition to the table: a traditional vegetable salad.",
    },
    ingredients: {
      uz: "An’anaviy variantida pomidor, piyoz va qalampir bo‘ladi. Aynan shu choyxonadagi retsept hamda qo‘shimchalarni xodimdan aniqlashtiring.",
      ru: "Традиционный вариант включает помидоры, лук и перец. Рецепт и добавки в этой чайхане уточните у сотрудника.",
      en: "Traditionally made with tomatoes, onion and pepper. Confirm this teahouse’s recipe and additions with the staff.",
    },
    image: "/images/menu/achchiq-chuchuk.webp",
    reviews: [],
    price: 20000,
    portion: {
      uz: "1 porsiya",
      ru: "1 порция",
      en: "1 serving",
    },
    imageFit: "cover",
    imageCaption: {
      uz: "Taomning bezak tasviri",
      ru: "Иллюстрация блюда",
      en: "Illustrative dish image",
    },
  },
  {
    id: "qiyma-kg",
    name: {
      uz: "Kiloli qiyma",
      ru: "Фарш на килограмм",
      en: "Minced meat by the kilogram",
    },
    price: 170000,
    portion: {
      uz: "1 kg",
      ru: "1 кг",
      en: "1 kg",
    },
    category: {
      uz: "Kiloli shashliklar",
      ru: "Шашлыки на килограмм",
      en: "Shashlik by the kilogram",
    },
    image: "/images/menu/qiyma-kg.webp",
    imageFit: "cover",
    imageCaption: {
      uz: "Kiloli mahsulotning tayyorlashdan oldingi ko‘rinishi.",
      ru: "Продукт на килограмм до приготовления.",
      en: "The kilogram selection before cooking.",
    },
    description: {
      uz: "Kilogramm hisobida taklif qilinadi. Narx 1 kg uchun. Tayyorlash va tortish tartibini xodimdan aniqlashtiring.",
      ru: "Цена указана за 1 кг. Порядок взвешивания и приготовления уточните у сотрудника.",
      en: "Priced per kilogram. Ask our staff about weighing and preparation.",
    },
    reviews: [],
  },
  {
    id: "qoy-koska-kg",
    name: {
      uz: "Kiloli qo‘y koska",
      ru: "Баранина «Коска» на килограмм",
      en: "Lamb koska by the kilogram",
    },
    price: 190000,
    portion: {
      uz: "1 kg",
      ru: "1 кг",
      en: "1 kg",
    },
    category: {
      uz: "Kiloli shashliklar",
      ru: "Шашлыки на килограмм",
      en: "Shashlik by the kilogram",
    },
    image: "/images/menu/qoy-koska-kg.webp",
    imageFit: "cover",
    imageCaption: {
      uz: "Kiloli mahsulotning tayyorlashdan oldingi ko‘rinishi.",
      ru: "Продукт на килограмм до приготовления.",
      en: "The kilogram selection before cooking.",
    },
    description: {
      uz: "Kilogramm hisobida taklif qilinadi. Narx 1 kg uchun. Tayyorlash va tortish tartibini xodimdan aniqlashtiring.",
      ru: "Цена указана за 1 кг. Порядок взвешивания и приготовления уточните у сотрудника.",
      en: "Priced per kilogram. Ask our staff about weighing and preparation.",
    },
    reviews: [],
    meat: {
      uz: "Qo‘y go‘shti",
      ru: "Баранина",
      en: "Lamb",
    },
  },
  {
    id: "tovuq-kg",
    name: {
      uz: "Kiloli tovuq",
      ru: "Курица на килограмм",
      en: "Chicken by the kilogram",
    },
    price: 70000,
    portion: {
      uz: "1 kg",
      ru: "1 кг",
      en: "1 kg",
    },
    category: {
      uz: "Kiloli shashliklar",
      ru: "Шашлыки на килограмм",
      en: "Shashlik by the kilogram",
    },
    image: "/images/menu/tovuq-kg.webp",
    imageFit: "cover",
    imageCaption: {
      uz: "Kiloli mahsulotning tayyorlashdan oldingi ko‘rinishi.",
      ru: "Продукт на килограмм до приготовления.",
      en: "The kilogram selection before cooking.",
    },
    description: {
      uz: "Kilogramm hisobida taklif qilinadi. Narx 1 kg uchun. Tayyorlash va tortish tartibini xodimdan aniqlashtiring.",
      ru: "Цена указана за 1 кг. Порядок взвешивания и приготовления уточните у сотрудника.",
      en: "Priced per kilogram. Ask our staff about weighing and preparation.",
    },
    reviews: [],
    meat: {
      uz: "Tovuq go‘shti",
      ru: "Курица",
      en: "Chicken",
    },
  },
  {
    id: "shorva",
    name: {
      uz: "Sho‘rva",
      ru: "Шурпа",
      en: "Shurpa soup",
    },
    category: {
      uz: "Sho‘rvalar",
      ru: "Супы",
      en: "Soups",
    },
    image: "/images/menu/shorva.webp",
    imageFit: "cover",
    description: {"uz": "Issiq sho‘rva — bir kosa uchun 40 000 so‘m.", "ru": "Горячая шурпа — 40 000 сум за одну косу (пиалу).", "en": "Hot shurpa soup — 40,000 UZS per bowl."},
    price: 40000,
    portion: {uz:"1 kosa",ru:"1 коса",en:"1 bowl"},
    reviews: [],
  },
  {
    id: "qattiq",
    name: {
      uz: "Qattiq (okroshka)",
      ru: "Окрошка",
      en: "Okroshka",
    },
    category: {
      uz: "Sovuq taomlar",
      ru: "Холодные блюда",
      en: "Cold dishes",
    },
    image: "/images/menu/qattiq.webp",
    imageFit: "cover",
    price: 20000,
    portion: {
      uz: "1 porsiya",
      ru: "1 порция",
      en: "1 serving",
    },
    description: {
      uz: "Sovuq holda tortiladigan qattiq — okroshka. Sut mahsulotlari va boshqa tarkibiy qismlarini xodimdan aniqlashtiring.",
      ru: "Холодное блюдо — окрошка. Молочные продукты и другие ингредиенты уточните у сотрудника.",
      en: "A cold dish known as okroshka. Ask staff about dairy and other ingredients.",
    },
    reviews: [],
  },
];
