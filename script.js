// Spread operator modern javascript
const array1 = [1,2,3,4];
const array2 = [...array1,5,6,7,8];
console.log(array2);

const number2 = [6,7,8,9,10];
const number = [...number2,1,2,3,4,5];
//const number2 = [6,7,8,9,10];
console.log(number);
console.log(typeof number);

const no1 = [6,7,8,9,10];
const no2 = [1,2,3,4,5,...no1];
console.log(no2);
console.log(typeof no2);