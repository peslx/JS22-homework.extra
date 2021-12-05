"Use sctrict";
const bodyWrap = document.querySelector(".body-wrap");
const createElem = (tag) => {
  return document.createElement(tag);
};
const today = new Date();
const week = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

week.forEach((d, i) => {
  const weekDay = createElem("span");
  weekDay.innerHTML = `${d}<br>`;
  if (i === 0 || i === 6) {
    weekDay.style.fontStyle = "italic";
  }
  if (today.getDay() === i) weekDay.style.fontWeight = "bold";
  bodyWrap.append(weekDay);
});
