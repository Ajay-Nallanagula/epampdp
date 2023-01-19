/** SINGLE RESPONSIBILITY PRINCIPLE
 * “There should never be more than one reason for a class to change.”
 *
 * you see how there are multiple responsibilities. First,
 * we model a book and save the book as a file. We ran into two purposes here:
 */

import Book from "./Book";

//DB operation and book actions performed inside same class
class BookDetails {
  book: Book;
  constructor(book: Book) {
    this.book = book;
  }

  showBookTitle(): void {
    console.log(`Title:${this.book.title}`);
  }

  saveBookToFile(): void {
    console.log(`Title:${this.book.title} saved to File`);
  }
}

export default BookDetails;
