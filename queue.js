
function callingCustomer(customerQueue, counterNo) {
    return "เชิญลูกค้า คิวที่ " + customerQueue + " ที่ช่องบริการ " + counterNo + " ค่ะ";
}

let queueRunMessage = callingCustomer(230, 3);
console.log(queueRunMessage)
// callingCustomer(230, 3);

// ลูกค้่า 1-4 คน ให้พนักงานกดปุ่ม A
// ลูกค้่า 5 คนขึ้นไป ให้พนักงานกดปุ่ม B

function pressAmountOfCustomerButton(amountOfCustomer) {
    if (amountOfCustomer < 4) {
        return "ลูกค้า A " + amountOfCustomer + " ท่าน";
    }
    else {
        return "ลูกค้า B " + amountOfCustomer + " ท่าน";
    }
}

let confirmAmountOfCustomer = pressAmountOfCustomerButton(5);
console.log(confirmAmountOfCustomer)

// pressAmountOfCustomerButton(5);
// pressAmountOfCustomerButton(2);
// pressAmountOfCustomerButton(8);
// pressAmountOfCustomerButton(1);