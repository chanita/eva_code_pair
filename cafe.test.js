const noticeOrderProcess = require("./cafe.js");

test("User should notice order is ready", () => {
    const noticeMessage = noticeOrderProcess("ready", "Eva");
    expect(noticeMessage).toBe("ออเด้อของคุณ Eva เสร็จเรียบร้อยแล้วค่ะ");
})

test("User should notice order is in progress", () => {
    const noticeMessage = noticeOrderProcess("in progress", "พี่แอร์");
    expect(noticeMessage).toBe("คุณ พี่แอร์ พนักงานกำลังชงเครื่องดื่มให้ รบกวนรอสักครู่นะคะ");
})

test("User should notice order is not found", () => {
    const noticeMessage = noticeOrderProcess(null, "น้ำผึ้ง");
    expect(noticeMessage).toBe("คุณ น้ำผึ้ง รบกวนรอสักครู่นะคะ เดี๋ยว เมย์ ไปดูให้สักครู่นะคะ");
})
