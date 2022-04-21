/*
/u/love\i\
Here Katrina breaks the inner most shelf and reverse the order. So the library will be  /uevoli\ . 
Now she breaks the outermost wall and reverses the order. So the library will be iloveu.
*/
// const reverseString = (str) => {
//     return str.reverse().toString().replaceAll(',', '')
// }

function alicBookShelf(input) {
    const str = []
    for (let index = 0; index < input.length; index++) {
        const element = input[index];
        if (element !== '\\') {
            str.push(element)
        } else if (element === '\\') {
            const current = []
            while (str.at(-1) !== '/') {
                const top = str.pop()
                current.push(top)
            }
            str.pop()
            for (let indexj = 0; indexj < current.length; indexj++) {
                const element = current[indexj];
                str.push(element)
            }
        }

    }
    return str.join('')
}

console.log(alicBookShelf("/u/love\\i\\"))

/*
const isStartMarked = input.at(-1) === "\\" && input.at(0) === '/'
    if (isStartMarked) {
        input = input.substring(1, input.length).slice(0, -1)
    }
    for (let index = 0; index < input.length; index++) {
        const element = input[index];
        if (element === "/" && index !== 0) {
            const current = str.
        } else {
            str.push(element)
        }
    }
*/