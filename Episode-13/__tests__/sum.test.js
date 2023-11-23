import { sum } from "../components/sum"

test("Sum function should calculate sum of two numbers", () => {

    const result = sum(1,4)

    // // Assertion
    expect(result).toBe(5)
})
