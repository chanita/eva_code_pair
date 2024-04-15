const { calTax, tax } = require("./array_assignment.js");

test("Calculate tax", () => {
    const tellTaxPrice = calTax(10);
    expect(tellTaxPrice).toBe(10.7);
});

test("Calculate all tax", () => {
    const tellTaxPrice = tax;
    expect(tellTaxPrice).toEqual([32.1, 55.64, 17.655]);
});