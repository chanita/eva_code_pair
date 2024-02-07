// สีกระเป๋าตังค์คนเกิดวันจันทร์
// เราอยากรู้ว่าคนเกิดวันจันทร์ต้องการเสริมดวง เรื่องอะไร
// พลัง = สีเหลือง, สีเหลืองอ่อน, สีขาว, สีเทา, สีเขียวแก่, สีเขียวแก่ > เก็บเป็น Srting
// สุขภาพ = สีชมพู, สีโอรส > เก็บเป็น Srting
// โชคดี = สีดำ, สีม่วง, สีน้ำตาลเข้ม > เก็บเป็น Srting
// การเงิน = สีเหลืองเข้ม, สีทอง, สีส้ม
// กาลกิณี = สีแดง
// อยากส่งค่า ที่คนวันจันทร์ต้องการเสริมดวง แบบรับส่ง Parameter
// เขียน switch

let color;
let unluckyColor = "สีแดง";
let noInfo = "";
let mondayWallet;
function mondayWalletBenefit(typeOfBenefit) {
    return "สีกระเป๋า เพื่อเสริม " + typeOfBenefit;
}

switch (mondayWallet) {
    case "พลัง":
        color = "สีเหลือง, สีเหลืองอ่อน, สีขาว, สีเทา, สีเขียวแก่, สีเขียวแก่";
        break;
    case "สุขภาพ":
        color = "สีชมพู, สีโอรส";
        break;
    case "โชคดี":
        color = "สีดำ, สีม่วง, สีน้ำตาลเข้ม";
        break;
    case "การเงิน":
        color = "สีเหลืองเข้ม, สีทอง, สีส้ม";
        break;
    default:
        noInfo = "ขออภัยไม่มีข้อมูลดังกล่าว";
}

console.log(mondayWalletBenefit("พลัง"));
console.log("คือ " + color );
console.log("สีกระเป๋า ที่ควรหลีกเลี่ยงของคนเกิด วันจันทร์ได้แก่ " + unluckyColor );
console.log(noInfo);