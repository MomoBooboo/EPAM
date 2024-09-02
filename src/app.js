"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

// Import the Library class from the library.js file
const library_1 = require("./library");

// Create a new instance of the Library class
const library = new library_1.Library();

// Define book objects with properties such as title, author, and year
const book1 = { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', year: 1925 };
const book2 = { title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960 };
const book3 = { title: '1984', author: 'George Orwell', year: 1949 };

// Add the defined book objects to the library instance
library.addBook(book1);
library.addBook(book2);
library.addBook(book3);

// Output all books in the library to the console
console.log('List of all books:');
console.log(library.listBooks());

// Search for books by the title "1984" and log the result to the console
console.log('Search books by title "1984":');
console.log(library.searchBooksByTitle('1984'));

// Search for books by the author "Harper Lee" and log the result to the console
console.log('Search books by author "Harper Lee":');
console.log(library.searchBooksByAuthor('Harper Lee'));
