const studentInfo = [
    {
        firstName: "มาริโอ้",
        lastName: "เมาเร่อ",
        score: 78
    },
    {
        firstName: "ณเดชน์",
        lastName: "คูกิมิยะ",
        score: 82
    },
    {
        firstName: "ฟ้า",
        lastName: "อิงฟ้า",
        score: 94
    },
    {
        firstName: "อีวา",
        lastName: "ตั้งเสรีสิทธิกุล",
        score: 51
    }

];

function gradeCriteria(score) {
    switch (true) {
        case score >= 95:
            return "A+";
        case score >= 90:
            return "A";
        case score >= 85:
            return "B+";
        case score >= 80:
            return "B";
        case score >= 75:
            return "C+";
        case score >= 70:
            return "C";
        case score >= 60:
            return "D";
        case score >= 50:
            return "E";
        case score <= 49:
            return "F";
    }
};

function clickVerify() {
    const fname = document.getElementById('fname').value;
    const lname = document.getElementById('lname').value;
    const student = studentInfo.find(item => item.firstName === fname && item.lastName === lname);
    if (student !== undefined) {
        alert(fname + ' ' + lname + ': ' + gradeCriteria(student.score));
    } else {
        alert('no data');
    }
};

function clickConfirmAddStudentInfo() {
    const addfname = document.getElementById('addfname').value;
    const addlname = document.getElementById('addlname').value;
    const addScore = document.getElementById('addscore').value;
    const addNewStudent = { firstName: addfname, lastName: addlname, score: Number(addScore) };
    const findStudentInfo = studentInfo.find(item => item.firstName === addfname && item.lastName === addlname);
    if (findStudentInfo === undefined && addfname && addlname && addScore !== "")
        studentInfo.push(addNewStudent);
    console.log(studentInfo);
}

module.exports = gradeCriteria;