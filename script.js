"Use sctrict";

// 1
let num = 266219;

// 2
num = String(num).split("");

let multiNum = 1;

num.forEach((element) => {
  multiNum *= element;
});

console.log(multiNum);

// 3
multiNum **= 3;

// 4
console.log(String(multiNum).slice(0, 2));
