/*
Problem Statement: Rat is at a specific position where cell value =1
Rat can step side(left-right) or down , but only when cell value =1
By stepping only in cells where value =1 , the rat should come out of the maze i.e to maze[n-1][n-1] where cell value should be 1
*/

function ratInTheMaze(maze, posX, posY, sol, arraySize) {

    if (posX === arraySize - 1 && posY === arraySize - 1 && maze[posX][posY] === 1) {
        sol[posX][posY] = 1;
        return true
    }

    const isValid = isSafe(maze, posX, posY, arraySize)
    //checkIsSafeWorks(maze,arraySize)
    if (isValid) {
        sol[posX][posY] = 1
        //Choices, Recursively move either in x-axis or in y-axis
        if (ratInTheMaze(maze, posX + 1, posY,sol, arraySize)) {
            return true;
        }
        if (ratInTheMaze(maze, posX, posY + 1,sol, arraySize)) {
            return true;
        }

        //Backtracking, when you make a wrong choice, backtrack and make right choice
        sol[posX][posY] = 0;
        return false;

    }

}

function isSafe(maze, posX, posY, arraySize) {
    const isXValid = posX >= 0 && posX < arraySize;
    const isYValid = posY >= 0 && posY < arraySize;
    return isXValid && isYValid && maze[posX][posY] === 1;
}

/*
function checkIsSafeWorks(maze, arraySize) {
    for (let x = 0; x <= arraySize; x++) {
        for (let y = 0; y <= arraySize; y++) {
            let isValid = isSafe(maze, x, y, arraySize)
            if (isValid) {
                console.log(`isValid: ${isValid} , maze[${x}][${y}] is ${maze[x][y]} `)
            }
        }
    }
}
*/

const maze = [
    [1, 1, 0, 0],
    [1, 1, 0, 1],
    [0, 1, 0, 0],
    [0, 1, 1, 1],
] // x= 3, y=3 its 3x3 array

const sol = []
const size = maze.length;

for (let i = 0; i < size; i++) {
    sol.push(new Array(size).fill(0))
}
let str = ''
if(ratInTheMaze(maze, 0, 0, sol, size)){
    for (let i = 0; i < size; i++) {
        str = str+"\n";
        for (let j = 0; j < size; j++) {
            str += sol[i][j] + ' ';
        }
    }
    console.log(str)
}

