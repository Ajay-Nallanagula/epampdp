//https://www.freecodecamp.org/news/javascript-let-and-const-hoisting/

var x = 1;
function demo() {
    console.log(x);  //ReferenceError: Cannot access 'x' before initialization
    const x = 3;
}
demo();