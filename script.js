"Use sctrict";
const teleType = document.getElementById("teleType");
const monitor = document.getElementById("monitor");

const typeText = () => {
  monitor.textContent = teleType.value;
};

let teleTypeTimeout = false;

teleType.addEventListener("input", () => {
  if (teleTypeTimeout) clearTimeout(teleTypeTimeout);
  teleTypeTimeout = setTimeout(typeText, 800);
});
