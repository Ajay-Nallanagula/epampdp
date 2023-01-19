/** SINGLE RESPONSIBILITY PRINCIPLE
 * “There should never be more than one reason for a class to change.”
 */
class BookDetails {
    constructor(book) {
        this.book = book;
    }
    showBookTitle() {
        console.log(`Title:${this.book.title}`);
    }
}
class BookRepository {
    constructor(book) {
        this.book = book;
    }
    saveBookToFile() {
        console.log(`Title:${this.book.title} saved to File`);
    }
}
export { BookDetails, BookRepository };
