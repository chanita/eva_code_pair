
function callingCustomer(customerQueue, counterNo) {
    console.log("เชิญลูกค้า คิวที่ " + customerQueue + " ที่ช่องบริการ " + counterNo + " ค่ะ");
}

callingCustomer(230, 3);

// ลูกค้่า 1-4 คน ให้พนักงานกดปุ่ม A
// ลูกค้่า 5 คนขึ้นไป ให้พนักงานกดปุ่ม B

function pressQueueButton(numberOfCustomer) {
    if (numberOfCustomer < 4) {
        console.log("ลูกค้า A " + numberOfCustomer + " ท่าน")
    }
    else {
        console.log("ลูกค้า B " + numberOfCustomer + " ท่าน")
    }
}

pressQueueButton(5);
pressQueueButton(2);