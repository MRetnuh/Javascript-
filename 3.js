function isLeap(year) {
let result = false;
result = year % 4 === 0;
  result = year % 100 !== 0;
  result = year % 400 === 0;
  return result;
}


console.log(isLeap(120));
console.log(isLeap(155));
console.log(isLeap(800));
