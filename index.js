function sayWelcomeTo(customerNickName) {
    if (customerNickName) 
        return "สวัสดีค่ะ คุณ " + customerNickName;
    else
        return "สวัสดีค่ะ คุณ ลูกค้า";
}

// let greeting = sayWelcomeTo("Air");
// console.log(greeting)

module.exports = sayWelcomeTo;