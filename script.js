"Use sctrict";

const play = document.querySelector(".play");
const reset = document.querySelector(".reset");
const shakes = document.querySelectorAll(".shaker");
let isPlayed = false;
let start;

const toDeafault = () => {
  isPlayed = false;
  cancelAnimationFrame(start);
  shakes.forEach((item) => {
    item.style.transform = "";
  });
};

const letItShake = () => {
  start = requestAnimationFrame(letItShake);

  shakes.forEach((item) => {
    item.style.transform = `rotateZ(${
      Math.floor(Math.random() * -3) + Math.floor(Math.random() * 6)
    }deg)`;
  });
};

const onOff = () => {
  isPlayed = !isPlayed;
  isPlayed ? letItShake() : cancelAnimationFrame(start);
};

play.addEventListener("click", onOff);
reset.addEventListener("click", toDeafault);
