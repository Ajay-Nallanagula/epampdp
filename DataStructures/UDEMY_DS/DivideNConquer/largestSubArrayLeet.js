/*
Given an integer array nums, find the subarray with the largest sum, and return its sum.

Example 1:

Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
Output: 6
Explanation: The subarray [4,-1,2,1] has the largest sum 6.
Example 2:

Input: nums = [1]
Output: 1
Explanation: The subarray [1] has the largest sum 1.

*/

//[1,2,3]
const maxArray = (arr) => {
    let sum = 0;
    let tempSum = 0;
    let obj = {}
    let i = 0, j = 0;
    let str = ''

    for (i = 0; i < arr.length; i++) {
        str = str + `${arr[i]},`
        for (j = i + 1; j < arr.length; j++) {
            sum = arr[i] + arr[j]
            str = str + `${arr[j]},`
            obj[sum + `_${str}`] = str
        }
        str = ''
    }
    return obj

}

const arr = [1, 2, 3, 4];
console.log(maxArray(arr))

/*
 if(sum >= tempSum){
                sum = arr[i] +arr[j]
                tempSum = sum
            }else{
                sum =0
            }
*/