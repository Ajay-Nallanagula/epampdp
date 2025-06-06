

function flatArray(array, depth) {
    let result = []
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        if (Array.isArray(element) && depth > 0 ) {
           // result.push(...flatMap(element, depth-1))
           result = [...result, ...flatArray(element, depth-1)]
        } else {
            result.push(element);
        }
    }
    return result
}

const arr2 = [1, [2, 3, [4, 5, [6, 7]]], 8, [9, 10]]
const levels = 2;
var depth = levels;
console.log(flatArray(arr2, levels));

/*array.flatMap(callback), depth is always 1 */