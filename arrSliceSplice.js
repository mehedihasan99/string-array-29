const arr = [10, 33, 44, 55, 66];
// console.log(arr);
const partOfArr = arr.slice(1, 4);
// console.log(partOfArr);

const myArr = [10, 30, 40, 55, 66, 22];
const mySplice = myArr.splice(1, 0, 100, 200, 300);
console.log(mySplice);
console.log(myArr);