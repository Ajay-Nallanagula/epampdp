/** SINGLE RESPONSIBILITY PRINCIPLE
 * “There should never be more than one reason for a class to change.”
 *
 * you see how there are multiple responsibilities. First,
 * we model a book and save the book as a file. We ran into two purposes here:
 */
//DB operation and book actions performed inside same class
class BookDetails {
    constructor(book) {
        this.book = book;
    }
    showBookTitle() {
        console.log(`Title:${this.book.title}`);
    }
    saveBookToFile() {
        console.log(`Title:${this.book.title} saved to File`);
    }
}
export default BookDetails;
