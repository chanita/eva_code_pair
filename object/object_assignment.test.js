const { calPriceTax, tax } = require("./object_assignment.js");

test("Calculate milk plus tax", () => {
    const item = { tagName: "Milk", price: 44 } // mock
    const tellTaxPrice = calPriceTax(item);
    expect(tellTaxPrice).toBe("Milk 47.08 baht");
})

test("Calculate paper plus tax", () => {
    const item = { tagName: "Paper", price: 10 } // mock
    const tellTaxPrice = calPriceTax(item);
    expect(tellTaxPrice).toBe("Paper 10.7 baht");
})

test("Calculate coffee plus tax", () => {
    const item = { tagName: "Coffee", price: 46 } // mock
    const tellTaxPrice = calPriceTax(item);
    expect(tellTaxPrice).toBe("Coffee 49.22 baht");
})

test("Calculate all tax prices", () => {
    const tellTaxPrice = tax;
    expect(tellTaxPrice).toEqual(["Milk 47.08 baht", "Paper 10.7 baht", "Coffee 49.22 baht"]);
})

