const groceryPriceList = [
    {
        tagName: "Milk",
        price: 44,
    },
    {
        tagName: "Paper",
        price: 10,
    },
    {
        tagName: "Coffee",
        price: 46,
    },
]


function calPriceTax(item) {
    return item.tagName + " " + ((item.price * 7 / 100) + item.price) + " baht";
}

const tax = groceryPriceList.map(calPriceTax);

module.exports = {calPriceTax, tax};