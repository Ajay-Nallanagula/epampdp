/*
   [8,1,3,4,9,6,2]

   //Divide the array first
   [8,1,3,4]   [9,6,2]

   [8,1] [3,4] [9,6] 2

   8,1  3,4  9,6  // 2 is already single

   //Now sort and combine the array step by step
   1,8  3,4   6,9  2 //i is part1 pointer, j is part2 pointer, k is result array pointer

   //in the solution array
   1,3 4,8  2,6,9

   1,2,3,4,6,8,9

*/

function merge(arr, lowerBound, upperBound, midbound, tempArr) {

    //console.log({ lowerBound, upperBound, midbound, tempArr })

    let leftArr = [];
    let rightArr = [];
    const leftArrSize = midbound - lowerBound + 1;
    const rightArrSize = upperBound - midbound

    for (let i = 0; i < leftArrSize; i++) {
        leftArr[i] = arr[lowerBound + i];
        //console.log({ leftArr })
    }

    for (let i = 0; i < rightArrSize; i++) {
        rightArr[i] = arr[midbound + 1 + i];
        //console.log({ rightArr })
    }

    let m = 0, n = 0, k = lowerBound;
    console.log({ rightArr }, { leftArr });

    while (m < leftArrSize && n < rightArrSize) {
        if (leftArr[m] < rightArr[n]) {
            arr[k] = leftArr[m]
            m++
        } else {
            arr[k] = rightArr[n];
            n++
        }
        k++;
    }

    //For extra elements 
    while (m < leftArrSize) {
        arr[k] = leftArr[m];
        k++;
        m++;
    }

    while (n < rightArrSize) {
        arr[k] = leftArr[n];
        k++;
        n++;
    }
}

function mergeSort(arr, lowerBound, upperBound) {

    if (lowerBound < upperBound) {
        const midBound = Math.floor((lowerBound + upperBound) / 2);
        mergeSort(arr, lowerBound, midBound);
        mergeSort(arr, midBound + 1, upperBound);
        merge(arr, lowerBound, upperBound, midBound)
    }

    return arr;
}

const arr = [8, 7, 6, 5, 4, 3, 2, 1]
console.log(mergeSort(arr, 0, arr.length - 1))