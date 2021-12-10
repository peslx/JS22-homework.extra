"Use sctrict";
const timeField = document.querySelector(".timeStamp1");
const timeStamp = () => {
  // const date = new Date(2019, 05, 05, 08, 30, 0);
  const date = new Date();
  const WD = date.getDay();
  const DD = date.getDate();
  const MM = date.getMonth();
  const YY = date.getFullYear();
  const hh = date.getHours();
  const mm = date.getMinutes();
  const ss = date.getSeconds();

  const options = {
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  };

  const dbl = (n) => (n < 10 ? (n = "0" + n) : n);
  const formatter = new Intl.DateTimeFormat("ru");

  let week, month, h, m, s;

  switch (WD) {
    case 0:
      week = "Воскресенье";
      break;
    case 1:
      week = "Понедельник";
      break;
    case 2:
      week = "Вторник";
      break;
    case 3:
      week = "Среда";
      break;
    case 4:
      week = "Четверг";
      break;
    case 5:
      week = "Пятница";
      break;
    case 6:
      week = "Суббота";
      break;
  }

  switch (MM) {
    case 0:
      month = "января";
      break;
    case 1:
      month = "февраля";
      break;
    case 2:
      month = "марта";
      break;
    case 3:
      month = "апреля";
      break;
    case 4:
      month = "мая";
      break;
    case 5:
      month = "июня";
      break;
    case 6:
      month = "июля";
      break;
    case 7:
      month = "августа";
      break;
    case 8:
      month = "сентября";
      break;
    case 9:
      month = "октября";
      break;
    case 10:
      month = "ноября";
      break;
    case 11:
      month = "декабря";
      break;
  }

  switch (true) {
    case hh === 1 || 11 || 21:
      h = "час";
      break;
    case hh === 2 || 3 || 4:
    case (hh > 20 && hh % 10 === 2) ||
      (hh > 20 && hh % 10 === 3) ||
      (hh > 20 && hh % 10 === 4):
      h = "часа";
      break;

    default:
      h = "часов";
      break;
  }

  switch (true) {
    case mm === 1:
    case mm > 10 && mm % 10 === 1:
      m = "минута";
      break;
    case mm === 2 || mm === 3 || mm === 4:
      m = "минуты";
      break;
    default:
      m = "минут";
      break;
  }

  switch (true) {
    case ss === 1:
    case ss > 10 && ss % 10 === 1:
      s = "секунда";
      break;
    case ss === 2 || ss === 3 || ss === 4:
    case (ss > 10 && ss % 10 === 2) ||
      (ss > 10 && ss % 10 === 3) ||
      (ss > 10 && ss % 10 === 4):
      s = "секунды";
      break;
    default:
      s = "секунд";
      break;
  }

  timeField.innerHTML = `
  a) Сегодня ${week}, ${DD} ${month} ${YY} года, ${hh} ${h} ${mm} ${m} ${ss} ${s}<br>
  б-1) ${dbl(DD)}.${dbl(MM + 1)}.${YY} - ${dbl(hh)}:${dbl(mm)}:${dbl(ss)}<br>
  б-2) ${formatter.format(date)} - ${date.toLocaleString("ru", options)}
  `;
};

setInterval(() => {
  timeStamp();
}, 500);
