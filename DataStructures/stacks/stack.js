class Stack {

    constructor(size) {
        this.size = size
        this.arr = []//new Array(this.size)
    }

    push(item) {
        if (this.isFull()) {
            return this.display('The stack is full')
        }
        this.arr.push(item)
        this.display()
    }

    pop() {
        if (this.isEmpty()) {
            return this.display('The stack is empty')
        }
        const item = this.arr.pop()
        this.display()
        return item
    }

    isEmpty() {
        return this.arr.length === 0
    }

    isFull() {
        return this.arr.length === this.size
    }

    top() {
        return this.arr[this.arr.length - 1]
    }

    display(msg) {
        console.log(`STACK: ${msg ? msg : this.arr}`)
    }
}

const stack = new Stack(4)
stack.push(7)
stack.push(9)
stack.push(3)
stack.push(11)
stack.push(12)
/*console.log('isFull: ' + stack.isFull())
console.log('Top Item: ' + stack.top())
console.log('popped Item: ' + stack.pop())
console.log('popped Item: ' + stack.pop())
console.log('popped Item: ' + stack.pop())
console.log('popped Item: ' + stack.pop())
console.log('isEmpty: ' + stack.isEmpty())*/

