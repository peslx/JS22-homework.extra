"Use sctrict";

// 1
let num = 266219;

// 2
num = String(num).split("");

let multiNum = 1;

// num.forEach((element) => {
//   multiNum *= element;
// });

// console.log(multiNum);

num = num.reduce((a, b) => {
  return a * b;
});

// 3
// multiNum **= 3;
num **= 3;

// 4
// console.log(String(multiNum).slice(0, 2));
console.log(String(num).slice(0, 2));
