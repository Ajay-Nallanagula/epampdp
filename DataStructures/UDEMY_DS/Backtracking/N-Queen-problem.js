/*
  N-Queen Problem, you will be given n x n matrix,
  You will be given n queens(in-chess-ministers) .
  These n queens should be placed in such a manner that they 
  don't attack each other.

  Queens can move straight, up,down,diaognally
  So the Queens must be placed 
  safely in the grid where they don't attack each other

  In this example n = 4, hence the size =4
  [ 
      [ 0, 0, 0, 0 ], 
      [ 0, 0, 0, 0 ], 
      [ 0, 0, 0, 0 ], 
      [ 0, 0, 0, 0 ] 
    ]

    Output: 1 represents Queen here, they cannot be attacked here.
    [ 
      [ 0, 0, 1, 0 ], //check column horizontally keeping row constant
      [ 1, 0, 0, 0 ], //check row vertically keeping column constant
      [ 0, 0, 0, 1 ], 
      [ 0, 1, 0, 0 ] 
    ]

    Choices
    Constraint
    Recursion, Backtracking
    Goal
*/
//saveTheQueen(arr,0,4)
function saveTheQueen(board, col, arrayLength) {
  let row;

  if (col >= arrayLength) {
    return true;
  }
  //Choice : Go from Row
  for (row = 0; row < arrayLength; row++) {
    const isSafe = isQueenSafe(board, col, row, arrayLength);
    // constraint
    if (isSafe) {
      board[row][col] = 1;

      //Recursion
      if (saveTheQueen(board, col + 1, arrayLength)) {
        return true;
      }

      //Backtracking, just in case if you are blocked 
      //You made a bad choice, comeback and correct it
      board[row][col] = 0;
    }
  }
  return false;

}
//col=0,row=0,len=4
function isQueenSafe(board, col, row, arrayLength) {
  //col=0, row=0

  //horizontally leftToRight start-----stop. col=0, 
  for (let iRow = 0; iRow < col; iRow++) {
    if (board[iRow][col] === 1) {
      return false;
    }


  }
  //diagonally upper half
  for (iRow = row; iRow >= 0; iRow--) {
    for (let iCol = col; iCol > arrayLength; iCol--) {
      if (board[iRow][col] === 1) {
        return false;
      }
    }
  }

  //diagonally lower half
  for (iRow = row; iRow < arrayLength; iRow++) {
    for (iCol = col; iCol > arrayLength; iCol--) {
      if (board[iRow][col] === 1) {
        return false;
      }
    }
  }

  return true;
}


function createNxNboard(n) {
  const arr = []
  for (let i = 0; i < n; i++) {
    arr.push(new Array(n).fill(0));
  }
  return arr;
}



const chessBoard = createNxNboard(5);
//console.log(chessBoard);

console.log(saveTheQueen(chessBoard, 0, chessBoard.length));

let str1=[];
for(let i=0;i<chessBoard.length;i++){
  let str2 =[];
  for(let j=0;j<chessBoard.length;j++){
    str2.push(chessBoard[i][j])
  }
  str1.push(str2)
}

console.log(str1)


































/*
Output:
[
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 0, 1, 2],
  [3, 4, 5, 6],
]

Diaognal [1,6,1,6]

From the first row: (1) (element at ((0,0))).
From the second row: (6) (element at ((1,1))).
From the third row: (1) (element at ((2,2))).
From the fourth row: (6) (element at ((3,3))).

*/

/*  

// NOT PART OF THE CODE, YOUR TEST

function findDiagonal(matrix) {
  const arrayLength = matrix.length
  const rows = arrayLength;
  const cols = matrix[0].length;
  let diagonal =[]
  //[(0,0),(1,1),(2,2),(3,3)]

  // for (let row = 0; row < rows; row++) {
  //   for (let col = 0; col < cols; col++) {
  //       if(row === col){
  //         diagonal.push(matrix[row][col])
  //       }
  //   }
  // }
  
  for (let row = 0; row < Math.min(rows,cols); row++) {
    diagonal.push(matrix[row][row])
  }

  return diagonal;

}

const xDiagonal = [
 // [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 0, 1, 2],
  [3, 4, 5, 6],
  [5, 4, 3, 2],
]
console.log(findDiagonal(xDiagonal));
*/