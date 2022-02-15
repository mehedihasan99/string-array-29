function addNum (num1, num2){
    // console.log(arguments);
    let sum = 0;
   for(let num of arguments){
       sum = sum + num;
   }
   return sum;
}
let addNum1 = addNum(10, 30, 40, 50, 60);
// console.log(addNum1);

function addStr(str1, str2){
    let strName = "";
    for(let str of arguments){
        strName = strName + str + " " ;
    }
    return strName;
}
console.log(addStr("mehedi", "hasan", "sakib", "musfiq"));

