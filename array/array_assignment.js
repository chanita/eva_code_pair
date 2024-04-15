//เราเป็น พนักงานร้าน ที่ ผจก ให้ราคาสินค้า มา แต่ยังไม่รวม ภาษี (100 บาท)
//เราต้องเรียงสินค้า และปิดป้ายราคาที่มันรวม tax แล้ว
//เรา จะต้องติดป้ายที่ชั้นวางสินค้า 107 บาท
//• Array เก็บราคาสินค้าก่อน tax 3 ชิ้น
//• คำนวณราคาสินค้า เมื่อรวม tax แล้ว ของ 3 ชิ้น

// เก็บราคาสินค้า เป็น array 3ชิ้น เก็บเป็น number
const groceryPriceList = [30, 52, 16.5];

//สร้าง function ชื่อ calTax รับ parameter priceBeforeTax
//function การหา tax ของสินค้า
function calTax(priceBeforeTax) {
    return (priceBeforeTax * 7 / 100) + priceBeforeTax;
}

//เก็บตัวแปร ชื่อ tax และใช้ method ของ array .map เรียก calTax function เพื่อหา tax ของแต่ละสินค้า ทั้งหมดใน array
const tax = groceryPriceList.map(calTax);

module.exports = { calTax, tax };