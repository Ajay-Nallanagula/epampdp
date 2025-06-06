//See binary tree example in recursion.md

/*consider below binary tree [7,2,6]
           7-Root
   Left-2          6-Right
*/

/*
TraversalType	      Order
------------         -----------
Inorder	              Left → Root → Right [2,7,6]
Preorder	          Root → Left → Right [7,2,6]
Postorder	          Left → Right → Root [2,6,7]
Level-order (BFS)	  Top-to-Bottom, Left-to-Right [7,2,6]
Reverse Inorder	      Right → Root → Left [6,7,2]
Zig-Zag	              Alternate left-right / right-left
*/

//Problem statement: Two subtrees are given check if one tree is subset of other 
// subtree

//Construct Binary Tree as given below
/*
          1
    2          3
  4   5      6   7

In-Order:  [4,2,5,1,6,3,7]
PreOrde: [2,4,5,1,3,6,7]

findout 
Inorder: [4,2,5] [6,3,7]
Preorder[2,4,5] [3,6,7]
*/

class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }

    display() {
        console.log('Binary tree constructed!');
    }
}

const root1 = new Node(1);
root1.left = new Node(2);
root1.right = new Node(3);
root1.left.left = new Node(4);
root1.left.right = new Node(5);
root1.right.left = new Node(6);
root1.right.right = new Node(7);


//subtree
/*
    4
  5   6  
*/
const root2 = new Node(4);
root2.left = new Node(5);
root2.right = new Node(6);

/*
    2
  4   5  
*/
const root3 = new Node(2);
root2.left = new Node(4);
root2.right = new Node(5);

/*
If the serialized representation of ( T2 ) is a substring of ( T1 ) (in both in-order and pre-order), then ( T2 ) is a subtree of ( T1 ).
NOTE: Rule For a Binary tree , Given a Subtree is a binary tree , The inorder + preorder of the tree will be valid  for a root Binary tree.

Inorder	              Left → Root → Right
Preorder	          Root → Left → Right

          1
    2          3
  4   5      6   7

In-Order :  [4,2,5,1,6,3,7]
PreOrder :  [1,2,4,5,3,6,7]

Subtree
Inorder: [4,2,5] Preorder [2,4,5] //Example 1: Both will satisfy
Inorder [6,3,7] Preorder  [3,6,7] //Example 2:  Both will satisfy
*/

function inOrder(node, list, comment) {

    if (!node) {
        return;
    }

    inOrder(node.left, list, comment)
    list.push(node.data);
    inOrder(node.right, list, comment);

    // console.log(comment, list.toString());
}

function preOrder(node, list, comment) {
    if (!node) {
        return;
    }

    list.push(node.data)
    preOrder(node.left, list, comment);
    preOrder(node.right, list, comment);

    // console.log(comment, list.toString());
}

function checkSubtreeExists(tree, subtree) {
    if (!tree) {
        return false
    }

    if (!subtree) {
        return true
    }

    //Step 1: first check for inorder tree
    let first = []
    let second = []

    inOrder(tree, first, 'source-tree-inorder')
    inOrder(subtree, second, 'subtree-inorder')
    let firstStrList = listOfString(first)
    let secondStrList = listOfString(second)
    console.log('inorder', { firstStrList }, { secondStrList })
    if (!firstStrList.includes(secondStrList)) {
        return false
    }



    //Step 2: Check for Preorder here
    //Root-Left-right
    first = []
    second = []
    preOrder(tree, first, 'source-tree-preorder')
    preOrder(subtree, second, 'subtree-preorder')
    firstStrList = listOfString(first)
    secondStrList = listOfString(second)
    console.log('preorder', { firstStrList }, { secondStrList })
    if (!firstStrList.includes(secondStrList)) {
        return false
    }

    return true
}

function listOfString(arr) {
    return arr.toString();
}

console.log(checkSubtreeExists(root1, root3));