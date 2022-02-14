function getBig(friends){
    if(Array.isArray(friends) != true){
        return "positive array";
    }
    for(let friend of friends){
        if(typeof friend == "number"){
            return "salalalal";
        }
    }
    let bigFrd = friends[0];
    for(let i = 0; i < friends.length; i++){
        const increaseFrd = friends[i];
        if (increaseFrd.length > bigFrd.length ){
            bigFrd = increaseFrd;
        }
    }
    return bigFrd;
    
}

const bigFriend = ["mehedi", "sakib", "al maktum"];
// const bigFriend = [10, 33, 44];
const bigF = getBig(bigFriend);
console.log(bigF);