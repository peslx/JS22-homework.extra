"Use sctrict";
const arr = ["234", "111", "2051", "437", "4124", "358", "7560"];

arr.forEach((element) => {
  if (element[0] === "2" || element[0] === "4") console.log(element);
});

const isPrime = (num) => {
  for (let i = 2; i < num; i++) if (num % i === 0) return false;
  return num > 1;
};

for (let num = 1; num <= 100; num++) {
  if (isPrime(num)) console.log(`${num} Делители этого числа: 1 и ${num}`);
}
