/*
https://www.freecodecamp.org/news/how-to-write-quick-sort-algorithm-with-javascript/

 Quick sort is a widely used sorting algorithm that efficiently sorts an array of elements
    by dividing it into smaller subarrays based on a chosen pivot element.
*/

/*
Choose a pivot element from the array.

Partition the array into two subarrays, one containing elements smaller than the pivot,
 and the other containing elements larger than the pivot.

Recursively apply the quick sort algorithm to the two subarrays until the entire array is 
sorted.
*/

function quickSort_pusedo(arr) {
    const pivot = arr[0];
    let lessArr = [];
    let greatArr = [];
    let resultArr = []

    if (!arr.length) {
        return arr;
    }

    for (let index = 0; index < arr.length; index++) {
        const element = arr[index];
        if (pivot > element) {
            lessArr.push(element);
        } else if (pivot < element) {
            greatArr.push(element);
        }
    }
    const orgArray = [...quickSort_pusedo(lessArr), pivot, ...quickSort_pusedo(greatArr)];
    return orgArray
}

let arr = [7, 3, 1, 9, 0]
//console.log(quickSort_pusedo(arr))

function quickSort(arr, lb = 0, rb = arr.length - 1) {
    if (lb < rb) {
        const pivotIndex = partition(arr, lb, rb);
        quickSort(arr, lb, pivotIndex - 1);
        quickSort(arr, pivotIndex + 1, rb);
    }
    return arr;
}

const partition = (arr, start, end) => {
    const swap = (list, a, b) => {
        const temp = list[a];
        list[a] = list[b]
        list[b] = temp
    }

    let pivot = arr[start];
    let pivotIndex = start;
    let i = start + 1;

    for (i = start + 1; i <= end; i++) {
        const element = arr[i];
        if (pivot > element) {
            pivotIndex++;
            if (pivotIndex !== i) {
                swap(arr, pivotIndex, i);
            }
        }
    }
    swap(arr, start, pivotIndex);
    return pivotIndex;
}

let arr2 = [9, 3, 8, 2, 0]
console.log(quickSort(arr2, 0, arr2.length));