const gradeCriteria = require("./score.js");

test("score <=49, grade should be F", () => {
    const grade = gradeCriteria(49);
    expect(grade).toBe("F");
})

test("score >=50, grade should be E", () => {
    const grade = gradeCriteria(59);
    expect(grade).toBe("E");
})

test("score >=60, grade should be D", () => {
    const grade = gradeCriteria(69);
    expect(grade).toBe("D");
})

test("score >=70, grade should be C", () => {
    const grade = gradeCriteria(71);
    expect(grade).toBe("C");
})

test("score >=75, grade should be C+", () => {
    const grade = gradeCriteria(79);
    expect(grade).toBe("C+");
})

test("score >=80, grade should be B", () => {
    const grade = gradeCriteria(81);
    expect(grade).toBe("B");
})

test("score >=85, grade should be B+", () => {
    const grade = gradeCriteria(89);
    expect(grade).toBe("B+");
})

test("score >=90, grade should be A", () => {
    const grade = gradeCriteria(90);
    expect(grade).toBe("A");
})

test("score >=95, grade should be A+", () => {
    const grade = gradeCriteria(100);
    expect(grade).toBe("A+");
})