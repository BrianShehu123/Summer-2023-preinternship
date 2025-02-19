const factorial = require('./factorial');

describe ("factorial(n) returns the factorial of n", () => {
    test("factorial(0) should return 1", () => {
        expect(factorial(0)).toEqual(1);
    })
})

test("factorial(1) should return 1", () => {
        expect(factorial(1)).toEqual(1);
})

 test("factorial(2) should return 2", () => {
        expect(factorial(2)).toEqual(2);
})