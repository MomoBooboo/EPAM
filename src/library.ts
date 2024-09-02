import { Book } from './book';

export class Library {
  // Array to store the collection of books
  private books: Book[] = [];

  /**
   * Adds a new book to the library.
   * @param book - The book to be added.
   */
  addBook(book: Book): void {
    this.books.push(book);
  }

  /**
   * Lists all books currently in the library.
   * @returns An array of all books in the library.
   */
  listBooks(): Book[] {
    return this.books;
  }

  /**
   * Searches for books by their title.
   * @param title - The title or part of the title to search for.
   * @returns An array of books that match the search criteria.
   */
  searchBooksByTitle(title: string): Book[] {
    return this.books.filter((book) =>
      book.title.toLowerCase().includes(title.toLowerCase())
    );
  }

  /**
   * Searches for books by their author.
   * @param author - The author or part of the author's name to search for.
   * @returns An array of books that match the search criteria.
   */
  searchBooksByAuthor(author: string): Book[] {
    return this.books.filter((book) =>
      book.author.toLowerCase().includes(author.toLowerCase())
    );
  }
}
