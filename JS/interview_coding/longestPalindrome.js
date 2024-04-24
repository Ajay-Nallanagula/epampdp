const isPalindrome = (str) => {
    const reverseStr = str.split('').reverse().toString().replaceAll(',', '')
    return str === reverseStr
}

function longest_palindrome(str) {
    let longPalindrome = ''
    let longPalindromeMaxLen = 0

    if (str.length === 1) {
        return str
    }

    for (let i = 0; i < str.length; i++) { //babd
        let subStr = str.substring(i, str.length)
        for (let j = subStr.length; j >= 0; j--) {
            const subSubStr = subStr.substring(0, j)//babd
            if (subSubStr.length > 1 && isPalindrome(subSubStr) && subSubStr.length > longPalindromeMaxLen) {
                longPalindromeMaxLen = subSubStr.length
                longPalindrome = subSubStr
            }

        }
    }
    return longPalindrome
}

console.log(longest_palindrome('forgeeksskeegfor'))

