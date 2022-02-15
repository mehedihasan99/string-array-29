// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// const fruitsSort = fruits.sort();
// const fruitsSortReverse = fruitsSort.reverse();
// console.log(fruitsSortReverse);
const num = [10, 44, 55, 22, 33, 22 ]
const numSort = num.sort(function(a, b){
    return a - b;
})
let result = numSort.reverse();
result = result[0];
console.log(result);