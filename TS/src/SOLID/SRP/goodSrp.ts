/** SINGLE RESPONSIBILITY PRINCIPLE
 * “There should never be more than one reason for a class to change.”
 */

import Book from "./Book";

class BookDetails {
  book: Book;
  constructor(book: Book) {
    this.book = book;
  }

  showBookTitle(): void {
    console.log(`Title:${this.book.title}`);
  }
}

class BookRepository {
  book: Book;
  constructor(book: Book) {
    this.book = book;
  }

  saveBookToFile(): void {
    console.log(`Title:${this.book.title} saved to File`);
  }
}

export { BookDetails, BookRepository };
