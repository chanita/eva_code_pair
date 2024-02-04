const sayWelcomeTo = require("./index.js");

test("Say greeting with customer name", () => {
    const greetingMsg = sayWelcomeTo("Eva");
    expect(greetingMsg).toBe("สวัสดีค่ะ คุณ Eva");
})

test("Say greeting when we don't know customer name", () => {
    const greetingMsg = sayWelcomeTo();
    expect(greetingMsg).toBe("สวัสดีค่ะ คุณ ลูกค้า");
})