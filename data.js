const user = {
  name: "Никита",
  surname: "Гончаров",
  userPhoto: "me.jpg",
  qrQode: "qr-code.svg",
  dreams: [
    { src: "bsmart.png", alt: "Перегнати Амазон по продажам" },
    { src: "home.jpg", alt: "Будинок на Кіпрі" },
    { src: "moto.jpg", alt: "Мотоцикл мрії" },
  ],
};

// arr це середня місячна платня по рокам
const arr = [
  20000,
  50000,
  100000,
  300000,
  500000,
  1111500,
  2111800,
  5112100,
  11112400,
  15022700,
  22153000,
  30013300,
];

const necessaryExpenses = 800;

const todo = [
  { month: "Червень", skill: "JavaScript" },
  { month: "Липень", skill: "Html" },
  { month: "Серпень", skill: "Python" },
  { month: "Вересень", skill: "Css" },
  { month: "Жовтень", skill: "Практика" },
  { month: "Листопад", skill: "Духовний розвиток" },
  { month: "Грудень", skill: "C++" },
  { month: "Січень", skill: "Саморозвиток" },
  { month: "Лютий", skill: "Лобіювання" },
  { month: "Березень", skill: "Java" },
  { month: "Квітень", skill: "English" },
  { month: "Травень", skill: "Робота(Практика)" },
];

export { user, arr, necessaryExpenses, todo };
