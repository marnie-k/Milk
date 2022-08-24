function getMilk(money, pricePerBottle) {   // produces the message for the user

console.log("Buy " + calcBottles(money, pricePerBottle) + " bottles of milk.");
  return calcChange(money, pricePerBottle); // messgae to runner
} 
   

function calcBottles(money, pricePerBottle){ //how many bottles we can buy withmoney we have
    var numberOfBottles = Math.floor(money / pricePerBottle);
    return numberOfBottles;
    
}

function calcChange(money, pricePerBottle){ // how much change we get back 
    var change = money % pricePerBottle;
    return change;
}

console.log("Here is your " + getMilk(10, 3) + " change.") // value of variables provied here
// message from runner