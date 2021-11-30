"Use sctrict";
const str1 =
  "     Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum dolores eaque ab modi asperiores animi obcaecati perspiciatis impedit possimus quisquam sunt est vel quia a delectus repudiandae odit laudantium iure, perferendis, at praesentium labore assumenda natus! Dolorum, voluptatibus? A, ullam doloremque quis impedit quam fugiat id ipsa corrupti tenetur adipisci, corporis perferendis. Earum illum, voluptatem fuga ut ea animi tenetur quia! Rerum, velit pariatur sequi, iusto aliquid vitae, facilis doloribus natus et similique maiores mollitia? Quidem excepturi assumenda accusantium beatae quis, facere tempore. Enim eum asperiores corporis obcaecati dignissimos, odit eveniet, dolores ab, eligendi quia necessitatibus impedit molestiae. Atque, libero!";

const str2 = "   Lorem ipsum  ";
// const checkString = (str = prompt("Ввод данных:")) => {
const checkString = (str) => {
  if (typeof str !== "string") {
    alert("Предполагается строковый тип данных. Повторите ввод");
  } else {
    str = str.trim();
    if (str.length > 30) {
      str = str.slice(0, 30) + "...";
    }
  }
  console.log(str);
};

checkString(str1);
checkString(str2);
