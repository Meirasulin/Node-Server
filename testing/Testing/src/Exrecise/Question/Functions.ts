import axios from "axios";
// Question 1
export const stringLength = (myStr: string): number | string => {
  if (typeof myStr !== "string") return "Error: Please enter a String";
  const result = myStr.length;
  return result;
};
// Question 2
export const palindrome = (text: string): boolean => {
  let reversedText = "";
  for (let i = text.length - 1; i >= 0; i--) {
    reversedText += text[i];
  }
  if (text === reversedText) return true;
  return false;
};
export const orderArrOfNumbers = (array: number[]): number[] => {
  const sortedArr = array.sort();
  return sortedArr;
};
// Question 4
export const sqrt = (num: number): number => {
  if (num < 0) throw new Error("Input must be a non-negative number.");
  return Math.sqrt(num);
};
// Question 5
export const sumArray = (arrOfNumbers: number[]): number => {
  let sum = 0;
  for (let i = 0; i < arrOfNumbers.length; i++) sum += arrOfNumbers[i];
  return sum;
};
// Question 6
export const fetchUserData = async (id: number) => {
  try {
    const { data: user } = await axios.get(
      "https://jsonplaceholder.typicode.com/users/" + id
    );
    if (!user) throw new Error("Error: in fetch data");
    if (!user.id) throw new Error("Error: user not found");
    return user;
  } catch (error) {
    return Promise.reject(error);
  }
};
//
export const nextFibonacciNumber = (arrFibonacci: number[]) => {
  let ifFibonacciSeries = true;
  for (let i = 0, j = 1; j < arrFibonacci.length - 1; i++, j++) {
    if (arrFibonacci[j + 1] !== arrFibonacci[i] + arrFibonacci[j]) {
      ifFibonacciSeries = false;
    }
  }
  if (ifFibonacciSeries === false)
    throw new Error("this array is not Fibonacci series!");
  return (
    arrFibonacci[arrFibonacci.length - 1] +
    arrFibonacci[arrFibonacci.length - 2]
  );
};
// functions.test.ts
// describe("get the next Fibonacci number", () => {
//   it("test to get the next number in Fibonacci series", () => {
//     expect(nextFibonacciNumber([1, 1, 2, 3, 5])).toEqual(8);
//   });
//   it("test if is Fibonacci series", () => {
//     expect(nextFibonacciNumber([1, 1, 2, 3, 4])).toThrowError();
//   });
// });
// terminal
