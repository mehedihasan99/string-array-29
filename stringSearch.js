const phonesPrice =
[
    "i-phone price 100$",
    "j-phone price 200$",
    "k-phone Price 1000$",
    "phone sell rate 5",
    "phone quantity 3"

]
const nameOfPrice = "price";
const newArr = [];
for(const phone of phonesPrice){
    if(phone.toLowerCase().indexOf(nameOfPrice.toLowerCase()) != -1){
        // newArr.push(phone);
    }
}

for(const phone of phonesPrice){
    if(phone.toLowerCase().includes(nameOfPrice.toLowerCase()) == true){
        newArr.push(phone);
    }
}
console.log(newArr);