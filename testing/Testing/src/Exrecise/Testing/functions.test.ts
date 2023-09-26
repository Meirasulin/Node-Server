import { expect, test, describe, it } from "vitest";
import {
  palindrome,
  stringLength,
  orderArrOfNumbers,
  sqrt,
  sumArray,
  fetchUserData,
  nextFibonacciNumber,
} from "../Question/Functions";

// Question 1
test("Question 1 - string Length test by str", () => {
  expect(stringLength("abc")).toBe(3);
});
test("Question 1 - string Length test by arr", () => {
  expect(stringLength([1, 2, 3])).not.toBe(3);
});
test("Question 1 - string Length test by number", () => {
  expect(stringLength(3)).not.toBe(3);
});
// Question 2
test("Question 2 - palindrome test", () => {
  expect(palindrome("aba")).toBeTruthy();
});
test("Question 2 - palindrome test - false", () => {
  expect(palindrome("abb")).toBeFalsy();
});
// Question 3
test("Question 3 - sort Arr Of Numbers", () => {
  expect(orderArrOfNumbers([3, 2, 1])).toStrictEqual([1, 2, 3]);
});
// Question 4
describe("sqrt", () => {
  it("sqrt for 16", () => {
    expect(sqrt(16)).toBe(4);
  });
  it("sqrt for -16", () => {
    expect(() => sqrt(-16)).toThrowError();
  });
});
// Question 5
describe("Question 5", () => {
  it("sum numbers in array", () => {
    expect(sumArray([1, 2, 3, 4, 5])).toBe(15);
  });
  it("sum numbers in array Greater Than 9", () => {
    expect(sumArray([1, 2, 3, 4, 5])).toBeGreaterThan(9);
  });
});
// Question 6
const userOneFromJosnPlaceOlder = {
  id: 1,
  name: "Leanne Graham",
  username: "Bret",
  email: "Sincere@april.biz",
  address: {
    street: "Kulas Light",
    suite: "Apt. 556",
    city: "Gwenborough",
    zipcode: "92998-3874",
    geo: {
      lat: "-37.3159",
      lng: "81.1496",
    },
  },
  phone: "1-770-736-8031 x56442",
  website: "hildegard.org",
  company: {
    name: "Romaguera-Crona",
    catchPhrase: "Multi-layered client-server neural-net",
    bs: "harness real-time e-markets",
  },
};
describe("Question 6 -  fetch users from dataBase", () => {
  test("test to get corect user", async () => {
    const result = await fetchUserData(1);
    expect(result).toEqual(userOneFromJosnPlaceOlder);
  });
  test("test if user not exsist", async () => {
    await expect(fetchUserData(100)).rejects.toThrowError();
  });
});
// Question 7

describe("get the next Fibonacci number", () => {
  it("test to get the next number in Fibonacci series", () => {
    expect(nextFibonacciNumber([1, 1, 2, 3, 5])).toEqual(8);
  });
  it("test if is Fibonacci series", () => {
    expect(() => nextFibonacciNumber([1, 1, 2, 4, 5])).toThrowError();
  });
});
