// Import the Library class and the Book interface from their respective files.
import { Library } from './library';
import { Book } from './book';

// Create a new instance of the Library class to manage a collection of books.
const library = new Library();

// Define a few books to add to the library. Each book object conforms to the Book interface.
const book1: Book = { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', year: 1925 };
const book2: Book = { title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960 };
const book3: Book = { title: '1984', author: 'George Orwell', year: 1949 };

// Add the defined books to the library using the addBook method.
library.addBook(book1);
library.addBook(book2);
library.addBook(book3);

// Log all books currently in the library to the console.
console.log('List of all books:');
console.log(library.listBooks());

// Search for books in the library by title and log the results to the console.
console.log('Search books by title "1984":');
console.log(library.searchBooksByTitle('1984'));

// Search for books in the library by author and log the results to the console.
console.log('Search books by author "Harper Lee":');
console.log(library.searchBooksByAuthor('Harper Lee'));
