/*
create a function that, given any string containing any arbitrary set of parentheses,
 brackets, or braces, can tell us if our parentheses are balanced
(that is, there is a proper closing parenthesis for every opened parenthesis).
parensAreBalanced('([])') // true
parensAreBalanced('([)') // false
Careful though: not only do we need to make sure we have a balanced number of parentheses, 
but that they are also in the correct order. 
If we have ({, we want to make sure we see a closing } before a closing ).
*/


function balancedParanthesis(str) {
    let obj = {
        '(': ')',
        '{': '}',
        '[': ']'
    }
    let arr = []
    let balanced = true

    for (let i = 0; i < str.length; i++) {
        if ([...Object.keys(obj)].includes(str[i])) {
            arr.push(str[i]) //}}
        } else {
            const last = arr.pop()
            if (obj[last] !== str[i]) {
                balanced = false
            }
        }
    }
    if (arr.length !== 0) { balanced = false }
    return balanced
}



console.log(balancedParanthesis('[{()()}({[]})]({}[({})])((((((()[])){}))[]{{{({({({{{{{{}}}}}})})})}}}))[][][]'))