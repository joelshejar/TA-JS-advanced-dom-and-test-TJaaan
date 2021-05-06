const { TestScheduler } = require("@jest/core")
const {getFullName, isPalindrome, getCircumfrence, getArea,} = require("./index")

test("adds Joel and Rajesh to give Joel Rajesh", () => {
    expect(getFullName("Joel","Rajesh")).toBe("Joel Rajesh")
})
test("adds Joel and Rajesh to give Joel Rajesh", () => {
    expect(getFullName("Farhan","Abdul")).toBe("Farhan Abdul")
})
test("adds Joel and Rajesh to give Joel Rajesh", () => {
    expect(getFullName("David","Joseph")).toBe("David Joseph")
})
test("adds Joel and Rajesh to give Joel Rajesh", () => {
    expect(getFullName("David","Joseph")).not.toBe("Joel Rajesh")
})
test("adds Joel and Rajesh to give Joel Rajesh", () => {
    expect(getFullName("Joel","Rajesh")).not.toBe("David Joseph")
})


test("adds Joel and Rajesh to give Joel Rajesh", () => {
    expect(isPalindrome("mom")).toBe(true)
})
test("adds Joel and Rajesh to give Joel Rajesh", () => {
    expect(isPalindrome("malayalam")).not.toBe(false)
})
test("adds Joel and Rajesh to give Joel Rajesh", () => {
    expect(isPalindrome("malayalam")).toBe(true)
})
test("adds Joel and Rajesh to give Joel Rajesh", () => {
    expect(isPalindrome("momm")).not.toBe(true)
})
test("adds Joel and Rajesh to give Joel Rajesh", () => {
    expect(getCircumfrence("7")).toBe(`The circumference is 44`)
})
test("adds Joel and Rajesh to give Joel Rajesh", () => {
    expect(getCircumfrence("14")).toBe(`The circumference is 88`)
})
test("adds Joel and Rajesh to give Joel Rajesh", () => {
    expect(getCircumfrence("14")).not.toBe(`The circumference is 8`)
})
test("adds Joel and Rajesh to give Joel Rajesh", () => {
    expect(getArea("7")).toBe(`The area is 484`)
})
test("adds Joel and Rajesh to give Joel Rajesh", () => {
    expect(getArea("7")).not.toBe(`The area is 48`)
})















