const colorMondayWallet = require("./mutelu.js");

test("Tell what is the health color for Monday person", () => {
    const tellColor = colorMondayWallet("สุขภาพ");
    expect(tellColor).toBe("สีกระเป๋า ที่เสริมเรื่อง สุขภาพ ของคนเกิดวันจันทร์ได้แก่ สีชมพู, สีโอรส");
})

test("Tell what is the power color for Monday person", () => {
    const tellColor = colorMondayWallet("พลัง");
    expect(tellColor).toBe("สีกระเป๋า ที่เสริมเรื่อง พลัง ของคนเกิดวันจันทร์ได้แก่ สีเหลือง, สีเหลืองอ่อน, สีขาว, สีเทา, สีเขียวแก่, สีเขียวแก่");
})

test("Tell what is the unlucky color for Monday person", () => {
    const tellColor = colorMondayWallet("กาลกิณี");
    expect(tellColor).toBe("สีกระเป๋า ที่ควรหลีกเลี่ยง ของคนเกิดวันจันทร์ได้แก่ สีแดง");
})