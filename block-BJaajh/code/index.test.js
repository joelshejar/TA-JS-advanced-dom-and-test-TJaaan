const { TestScheduler } = require('@jest/core')
let {checkFive} = require('./index')

test("",()=>{
    expect(checkFive(5)).toBe(`${5} is equal to 5.`)
})
test("",()=>{
    expect(checkFive(4)).toBe(`${4} is less than 5.`)
})
test("",()=>{
    expect(checkFive(6)).toBe(`${6} is greater than 5.`)
})







