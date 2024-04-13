const calTax = require("./array_assignment.js");

test("Calculate tax", () => {
    const tellTaxPrice = calTax(10);
    expect(tellTaxPrice).toBe(0.7);
})
