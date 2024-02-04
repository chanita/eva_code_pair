function sayWelcomeTo(shopName){
    return "Welcome to " + shopName;
}

let greeting = sayWelcomeTo("Air");
console.log(greeting)

module.exports = sayWelcomeTo;


// function takeOrderAndRecommendMenu(coffeeRecommend1, coffeeRecommend2){
//     console.log("What would you like to drink today?");
//     console.log("Today we have special menu " + coffeeRecommend1 + " and " + coffeeRecommend2);
// }


// function confirmOrderIsReadyToCustomer(coffeeMenu, titleName,customerNickName){
//     console.log(coffeeMenu + " " + titleName + " " + customerNickName + " is ready!!");
// }

// sayWelcomeTo("My Coffee");
// takeOrderAndRecommendMenu("Latte","Orange Americano");
// confirmOrderIsReadyToCustomer("Orange Americano", "Miss", "May");