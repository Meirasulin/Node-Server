// Exercise 1
const biger: (x: number, y: number) => number = (x: number, y: number) => {
  if (x > y) return x;
  return y;
};
console.log("biger result - " + biger(3, 5));

// Exercise 2
const Printbiger = (x: number, y: number) => {
  if (x > y) return console.log("Printbiger result - " + x);
  return console.log("Printbiger result - " + y);
};
Printbiger(3, 5);
// Exercise 3
const ifOdd: (x: number) => string = (x: number) => {
  const isOdd: string = "is odd";
  const notOdd: string = "is not odd";
  if (x % 2) return isOdd;
  return notOdd;
};
console.log(ifOdd(4));
// Exercise 4
const lengthOfSting: (x: string) => number = (str: string) => {
  return str.length;
};
console.log("Hi my length is - " + lengthOfSting("Hi my length is - "));
// Exercise 5
const firstOnelestN: (n: number) => number[] = (n: number) => {
  const arr: number[] = [];
  for (let i: number = 1; i < n + 1; i++) {
    arr.push(i);
  }
  return arr;
};
console.log(firstOnelestN(10));
// Exercise 6
const bigerInArr: (arrOfNumbers: number[]) => number = (
  arrOfNumbers: number[]
) => {
  let result: number = arrOfNumbers[0];
  for (let i: number = 1; i < arrOfNumbers.length; i++) {
    if (arrOfNumbers[i] > result) result = arrOfNumbers[i];
  }
  return result;
};
console.log("bigerInArr result = " + bigerInArr([1, 3, 2, 1]));
// Exercise 7
type person = {
  name: string;
  age: number;
  isStudent: boolean;
};

// Exercise 8
const printPerson: (myPerson: person) => string = (myPerson: person) => {
  return `Details of my person: is name - ${myPerson.name} is age ${myPerson.age}. if he is student? ${myPerson.isStudent}`;
};
console.log(printPerson({ name: "meir", age: 20, isStudent: false }));

// Exercise 9
const isMinor: (myPerson: person) => boolean = (myPerson: person) => {
  if (myPerson.age > 18) return true;
  return false;
};
console.log(isMinor({ name: "meir", age: 20, isStudent: false }));
// Exercise 10
interface book {
  title: string;
  author: string;
  year: number;
}
// Exercise 11
type Reader = person & {
  favoriteBook: book;
};
// Exercise 12
const olderReader: (arr: Reader[]) => string = (arr: Reader[]) => {
  let olderAge: number = arr[0].age;
  let resultName: string = arr[0].name;
  for (let i: number = 1; i < arr.length; i++) {
    if (olderAge < arr[i].age) {
      olderAge = arr[i].age;
      resultName = arr[i].name;
    }
  }
  return resultName;
};

const peopleArray: Reader[] = [
  {
    name: "Alice",
    age: 45,
    isStudent: true,
    favoriteBook: {
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      year: 1925,
    },
  },
  {
    name: "Bob",
    age: 30,
    isStudent: false,
    favoriteBook: {
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      year: 1960,
    },
  },
  {
    name: "Charlie",
    age: 22,
    isStudent: true,
    favoriteBook: {
      title: "1984",
      author: "George Orwell",
      year: 1949,
    },
  },
  {
    name: "David",
    age: 28,
    isStudent: false,
    favoriteBook: {
      title: "Pride and Prejudice",
      author: "Jane Austen",
      year: 1813,
    },
  },
  {
    name: "Eva",
    age: 19,
    isStudent: true,
    favoriteBook: {
      title: "Harry Potter and the Sorcerer's Stone",
      author: "J.K. Rowling",
      year: 1997,
    },
  },
];
console.log(olderReader(peopleArray));
// Exercise 13
const olderBook: (arr: Reader[]) => string = (arr: Reader[]) => {
  let olderDate: number = arr[0].favoriteBook.year;
  let bookName: string = arr[0].favoriteBook.title;
  for (let i: number = 1; i < arr.length; i++) {
    if (olderDate < arr[i].favoriteBook.year) {
      olderDate = arr[i].favoriteBook.year;
      bookName = arr[i].favoriteBook.title;
    }
  }
  return bookName;
};
console.log(olderBook(peopleArray));
