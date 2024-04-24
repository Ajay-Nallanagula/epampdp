/*
Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.
*/


//reverse2 is efficent way 
const reverse2 = (num) => {
    let result = 0
    while (num > 0) {
        const digit = num % 10
        if (result > (Math.pow(2, 31) - 1) / 10 | result < (Math.pow(-2, 31) - 1) / 10) {
            return 0;
        }
        result = result * 10 + digit

        num = Math.floor(num / 10)
    }
    return result
}

console.log(reverse(123456789))

const reverse = (num) => {
    const highLimit = Math.pow(2, 31)
    const lowLimit = -highLimit
    if (lowLimit < num && num < highLimit - 1) {
        const reverseNum = num.toString().split('').reverse().toString().replaceAll(',', '')
        if (reverseNum[0] === '0') {
            return reverseNum.slice(1, reverseNum.length)
        }
        return reverseNum
    }
    return 0
}

console.log(reverse(13330))




var isPalindrome = function (num) {
    let result = 0
    let temp = num
    while (num > 0) {
        let digit = num % 10
        result = result * 10 + digit
        num = Math.floor(num / 10)
    }

    return result === temp

};

console.log(isPalindrome(1241))