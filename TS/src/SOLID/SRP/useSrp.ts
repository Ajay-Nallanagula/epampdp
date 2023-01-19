import BookDetails from "./badSrp.js";
import Book from "./Book";
import * as GoodBook from "./goodSrp.js";

const book: Book = {
  title: "Demo Book",
  author: "Ajay N",
  pages: 100,
};

const badBook = new BookDetails(book);
console.log("WITHOUT SRP");
badBook.showBookTitle();
badBook.saveBookToFile();

console.log("WITH SRP");
const goodBook = new GoodBook.BookDetails(book);
goodBook.showBookTitle();

const saveGoodBook = new GoodBook.BookRepository(book);
saveGoodBook.saveBookToFile();
