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
        firstName: "อิงฟ้า",
        lastName: "อิงฟ้า",
        score: 94
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
        case score <= 49:
            return "F";
    }
};

function clickConfirm() {
    const fname = document.getElementById('fname').value;
    const lname = document.getElementById('lname').value;
    const studentName = studentInfo.find(item => item.firstName === fname && item.lastName === lname);
    if (studentName !== undefined) {
        alert(fname + ' ' + lname + ': ' + gradeCriteria(studentName.score));
    } else {
        alert('no data');
    }
};