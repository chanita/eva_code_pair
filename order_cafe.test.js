const { totalPrice, coffeeMenu } = require("./order_cafe.js");

test("summary price coffee with ice and bring their own cup", () => {
    const sumCoffeePrice = totalPrice(coffeeMenu[0], "americano", "ice", true);
    expect(sumCoffeePrice).toBe("ราคา americano 55 บาทค่ะ");
})

test("summary price coffee with ice and no own cup", () => {
    const sumCoffeePrice = totalPrice(coffeeMenu[2], "capuchino", "ice", false);
    expect(sumCoffeePrice).toBe("ราคา capuchino 65 บาทค่ะ");
})

test("summary price hot coffee and no own cup", () => {
    const sumCoffeePrice = totalPrice(coffeeMenu[1], "latte", "hot", false);
    expect(sumCoffeePrice).toBe("ราคา latte 60 บาทค่ะ");
})

test("summary price hot coffee and bring their own cup", () => {
    const sumCoffeePrice = totalPrice(coffeeMenu[1], "latte", "hot", true);
    expect(sumCoffeePrice).toBe("ราคา latte 55 บาทค่ะ");
})