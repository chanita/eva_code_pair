
let score = 80;
let grade = "";

switch (true) {
    case score >= 90: // false
        grade = "A";
        break;
    case score >= 80: // true
        grade = "B";
        break;
}

console.log("Your grade is " + grade)