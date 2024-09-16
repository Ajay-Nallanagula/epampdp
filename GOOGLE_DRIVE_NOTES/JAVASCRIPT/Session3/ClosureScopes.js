//Way 1: http://www.codewars.com/kata/closures-and-scopes/train/javascript
function createFunctions(n) {
    var callbacks, i, elem;
    callbacks = [];
    for (i = 0; i < n; i++) {
        elem = (function innFunc(i) {
            return function innerMostFunc() {
                return i;
            };
        })(i);
        callbacks.push(elem);
    }
    return callbacks;
}



/*
//Way 2 : 
function createFunctions(n) {
    var callbacks = [];
    for (let i = 0; i < n; i++) {
        var f = function innFunc() {
            return i;
        };
        callbacks.push(f);
    }
    return callbacks;
}
*/

Explaination : https://medium.com/front-end-developers/es6-variable-scopes-in-loops-with-closure-9cde7a198744