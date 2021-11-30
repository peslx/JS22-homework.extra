"Use sctrict";
// let lang = "ru";
// let lang = "en";

let lang = confirm('Язык по умолчанию - "en", установить "ru"?');

switch (lang) {
  case true:
    lang = "ru";
    break;
  default:
    lang = "en";
    break;
}

// a) через if,
if (lang === "ru") {
  console.log("a) через if: " + ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"]);
} else {
  console.log("a) через if: " + ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"]);
}

// b) через switch-case
switch (lang) {
  case "ru":
    console.log(
      "b) через switch-case: " + ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"]
    );
    break;
  default:
    console.log(
      "b) через switch-case: " + ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"]
    );
    break;
}

// c) через многомерный массив (без If и switch).
// 1
const lang_2 = [
  ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"],
  ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"],
];
console.log(
  "c) через многомерный массив (1): " + (lang === "ru" ? lang_2[0] : lang_2[1])
);

// 2
const lang_3 = {
  ru: ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"],
  en: ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"],
};
console.log(
  "c) через многомерный массив (2): " + (lang === "ru" ? lang_3.ru : lang_3.en)
);
