/*
    Given a linked list, swap every two adjacent nodes and return its head. 
    You must solve the problem without modifying the values in the list's nodes 
    (i.e., only nodes themselves may be changed.)

    Example 1:
    Input: head = [1,2,3,4]
    Output: [2,1,4,3]

*/


var swapPairs = function (head) {
    const arrLength = head.length;

    if (arrLength === 1 || arrLength === 0) {
        return head;
    }

    if (arrLength === 2) {
        return head.reverse();
    }

    let solution = [];
    let i = 0;

    while (i < arrLength) {
        let result = []
        if (i + 1 >= arrLength) {
            result = swapPairs([head[i]])
        } else {
            result = swapPairs([head[i], head[i + 1]])
        }
        solution.push(...result)
        i = i + 2;
    }
    return solution;
};


const arr = [];
console.log(swapPairs(arr))