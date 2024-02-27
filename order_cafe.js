

// ต้องทำ switch case
// เก็บแต่ละเมนูราคาเท่าไหร่
// ถ้าใส่เย็น เพิ่ม 5 บาท
// นำแก้วมาเอง ลด 5 บาท
// เก็บราคาเครื่องดื่ม เราจะมีเมนู 3 รายการ 1.americano 2.latte 3.cappuchino
// เก็บราคากาแฟ เป็น number

const coffeeMenu = ["americano", "latte", "capuchino"];

function totalPrice(coffeeMenu, priceCoffeeMenu, iceOrHot, bringTheirOwnCup) {
    switch (priceCoffeeMenu) {
        case "americano":
            price = 55;
            break;
        case "latte":
            price = 60;
            break;
        case "capuchino":
            price = 60;
    }

    switch (iceOrHot) {
        case "ice":
            extraOrDiscountMoney = +5;
            break;
        default:
            extraOrDiscountMoney = 0;
    }

    switch (bringTheirOwnCup) {
        case true:
            extraOrDiscountForOwnCup = -5;
            break;
        default:
            extraOrDiscountForOwnCup = 0;
    }

    return "ราคา " + coffeeMenu + " " + (price + extraOrDiscountMoney + extraOrDiscountForOwnCup) + " บาทค่ะ";
}
console.log(totalPrice(coffeeMenu[0], "americano", "ice", true))

module.exports = { totalPrice, coffeeMenu };