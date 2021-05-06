const {add, subtract, sum, multiply, power} = require("./calculator")

test("adds 10 + 20 to equal 30",() => {
    expect(add(10,20)).toBe(30)
})
test("adds 10 + 20 to equal 30",() => {
    expect(sum(10,20)).toBe(30)
})
test("adds 10 + 20 to equal 30",() => {
    expect(subtract(20,10)).toBe(10)
})
test("adds 10 + 20 to equal 30",() => {
    expect(multiply(20,10)).toBe(200)
})
test("adds 10 + 20 to equal 30",() => {
    expect(power(10,2)).toBe(100)
})


