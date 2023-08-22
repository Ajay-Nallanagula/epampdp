//Decorator pattern can shown using functional Composition or object composition

//Example 1
const obj = {
    name: "John",
    age: 25
};

const logDecorator = (obj) => {
    obj.log = () => console.log(obj.name + " is " + obj.age + " years old.");
    return obj;
};

const decoratedObj = logDecorator(obj);
decoratedObj.log(); // Output: "John is 25 years old."

//Example 2
class Book {
    constructor(title, author) {
        this.title = title;
        this.author = author;
    }
}

// you can add validation to an object's properties to ensure that they meet certain criteria.
const validateDecorator = (obj) => {
    obj.validate = () => {
        if (!obj.title || !obj.author) {
            console.log("Invalid book!");
        }
    };
    return obj;
};

const book = new Book("The Catcher in the Rye", "J.D. Salinger");
const validatedBook = validateDecorator(book);
validatedBook.validate(); // Output: nothing, as the book is valid

const invalidBook = new Book("", "J.D. Salinger");
const validatedInvalidBook = validateDecorator(invalidBook);
validatedInvalidBook.validate(); // Output: "Invalid book!"
