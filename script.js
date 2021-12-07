"Use sctrict";
const bodyWrap = document.querySelector(".body-wrap");
const createElem = (tag) => {
  return document.createElement(tag);
};
const today = new Date();
const week = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

week.forEach((d, i) => {
  const weekDay = createElem("span");
  weekDay.innerHTML = `${d}<br>`;
  if (d === "Sunday" || d === "Saturday") {
    weekDay.style.fontStyle = "italic";
  }
  if (today.getDay() === i) weekDay.style.fontWeight = "bold";
  bodyWrap.append(weekDay);
});
