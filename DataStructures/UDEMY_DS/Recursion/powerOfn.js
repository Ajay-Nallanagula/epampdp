/*
Example 1:

Input: x = 2.00000, n = 10
Output: 1024.00000
Example 2:

Input: x = 2.10000, n = 3
Output: 9.26100
Example 3:

Input: x = 2.00000, n = -2
Output: 0.25000
Explanation: 2-2 = 1/22 = 1/4 = 0.25
 

Constraints:

-100.0 < x < 100.0
-231 <= n <= 231-1
n is an integer.
Either x is not zero or n > 0.
-104 <= xn <= 104
*/


var myPow = function (x, n) {
    let result = x;
    const absN = n > 0 ? n : -1 * n;

    if (x !== 0 && x < -100.0 && x > 100.0) {
        console.log(`x = ${x} doesn't satisfy the constraints`);
        return x
    }

    if (n < -231 && n > 230) {
        console.log(`n = ${n} doesn't satisfy the constraints`)
        return x
    }

    if (n === 0) {
        return 1;
    }


    result = result * myPow(x, absN - 1)
    return n > 0 ? result : 1 / result

};

console.log(myPow(2, 2))






// 2*myPow(2,0) // 2
// 2*myPow(2,1)//2*2
// 2*myPow(2,2)//2*2*2