"use strict";
// Exercise 1
const biger = (x, y) => {
    if (x > y)
        return x;
    return y;
};
console.log("biger result - " + biger(3, 5));
// Exercise 2
const Printbiger = (x, y) => {
    if (x > y)
        return console.log("Printbiger result - " + x);
    return console.log("Printbiger result - " + y);
};
Printbiger(3, 5);
// Exercise 3
const ifOdd = (x) => {
    const isOdd = "is odd";
    const notOdd = "is not odd";
    if (x % 2)
        return isOdd;
    return notOdd;
};
console.log(ifOdd(4));
// Exercise 4
const lengthOfSting = (str) => {
    return str.length;
};
console.log("Hi my length is - " + lengthOfSting("Hi my length is - "));
// Exercise 5
const firstOnelestN = (n) => {
    const arr = [];
    for (let i = 1; i < n + 1; i++) {
        arr.push(i);
    }
    return arr;
};
console.log(firstOnelestN(10));
// Exercise 6
const bigerInArr = (arrOfNumbers) => {
    let result = arrOfNumbers[0];
    for (let i = 1; i < arrOfNumbers.length; i++) {
        if (arrOfNumbers[i] > result)
            result = arrOfNumbers[i];
    }
    return result;
};
console.log("bigerInArr result = " + bigerInArr([1, 3, 2, 1]));
// Exercise 8
const printPerson = (myPerson) => {
    return `Details of my person: is name - ${myPerson.name} is age ${myPerson.age}. if he is student? ${myPerson.isStudent}`;
};
console.log(printPerson({ name: "meir", age: 20, isStudent: false }));
// Exercise 9
const isMinor = (myPerson) => {
    if (myPerson.age > 18)
        return true;
    return false;
};
console.log(isMinor({ name: "meir", age: 20, isStudent: false }));
// Exercise 12
const olderReader = (arr) => {
    let olderAge = arr[0].age;
    let resultName = arr[0].name;
    for (let i = 1; i < arr.length; i++) {
        if (olderAge < arr[i].age) {
            olderAge = arr[i].age;
            resultName = arr[i].name;
        }
    }
    return resultName;
};
const peopleArray = [
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
const olderBook = (arr) => {
    let olderDate = arr[0].favoriteBook.year;
    let bookName = arr[0].favoriteBook.title;
    for (let i = 1; i < arr.length; i++) {
        if (olderDate < arr[i].favoriteBook.year) {
            olderDate = arr[i].favoriteBook.year;
            bookName = arr[i].favoriteBook.title;
        }
    }
    return bookName;
};
console.log(olderBook(peopleArray));
