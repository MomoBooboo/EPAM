"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Library = void 0;

class Library {
    constructor() {
        // Array to store the collection of books
        this.books = [];
    }

    /**
     * Adds a new book to the library.
     * @param {Object} book - The book to be added, with properties like title, author, and year.
     */
    addBook(book) {
        this.books.push(book);
    }

    /**
     * Lists all books currently in the library.
     * @returns {Object[]} An array of all books in the library.
     */
    listBooks() {
        return this.books;
    }

    /**
     * Searches for books by their title.
     * @param {string} title - The title or part of the title to search for.
     * @returns {Object[]} An array of books that match the search criteria.
     */
    searchBooksByTitle(title) {
        return this.books.filter((book) => 
            book.title.toLowerCase().includes(title.toLowerCase())
        );
    }

    /**
     * Searches for books by their author.
     * @param {string} author - The author or part of the author's name to search for.
     * @returns {Object[]} An array of books that match the search criteria.
     */
    searchBooksByAuthor(author) {
        return this.books.filter((book) => 
            book.author.toLowerCase().includes(author.toLowerCase())
        );
    }
}

exports.Library = Library;
