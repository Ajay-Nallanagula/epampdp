import BookDetails from "./badSrp.js";
import * as GoodBook from "./goodSrp.js";
const book = {
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
