function noticeOrderProcess(statusOrder, customerNickName) {
    if (statusOrder == "ready") {
        return "ออเด้อของคุณ " + customerNickName + " เสร็จเรียบร้อยแล้วค่ะ";
    }
    if (statusOrder == "in progress") {
        return "คุณ " + customerNickName + " พนักงานกำลังชงเครื่องดื่มให้ รบกวนรอสักครู่นะคะ";
    }
    return "คุณ " + customerNickName + " รบกวนรอสักครู่นะคะ เดี๋ยว เมย์ ไปดูให้สักครู่นะคะ";
}

module.exports = noticeOrderProcess;