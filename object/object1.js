// object
const person1 = {
    firstName: "Chanita",
    lastName: "Anuwong",
    age: 38,
    fullName: function () {
        return this.firstName + " " + this.lastName;
    },
    ageText: function () {
        const displayText = this.age + " years old";
        return displayText;
    },
    setAge: function () {
        this.age = 3;
    }
}

const chanitaFullName = person1.fullName();
console.log(chanitaFullName);
console.log('---');
const chanitaAge = person1.ageText();
console.log("--19 --- " + chanitaAge);
console.log(chanitaAge);


