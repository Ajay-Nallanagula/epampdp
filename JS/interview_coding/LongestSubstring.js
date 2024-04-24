// Function to find the length of the longest substring without repeating characters using the sliding window technique
var lengthOfLongestSubstring = function(s) {
    // Initialize a variable to store the maximum length of the substring without repeating characters
    let max = 0;

    // Initialize a variable to keep track of the starting index of the sliding window
    let winStart = 0;

    // Create an empty object to keep track of the count of characters in the current window
    const soFar = {};

    // Start a loop to iterate through the characters of the string, represented by 'winEnd'
    for (let winEnd = 0; winEnd < s.length; winEnd++) {
        // Get the current character at the 'winEnd' position
        let rightChar = s[winEnd];

        // Update the count of the current character in the 'soFar' object
        // If the character is not in the 'soFar' object, initialize its count to 1, otherwise, increment its count
        soFar[rightChar] = soFar[rightChar] + 1 || 1;

        // Start a nested loop to adjust the sliding window when a repeating character is encountered
        while (soFar[rightChar] > 1) {
            // Get the character at the 'winStart' position
            let leftChar = s[winStart];

            // Shrink the window from the left by moving 'winStart'
            // If the character at 'winStart' has a count greater than 1, decrement its count
            // Otherwise, delete the character from the 'soFar' object as it is no longer in the window
            winStart++;
        }

        // Update the 'max' variable with the maximum length found so far
        // The length of the current window is calculated as '(winEnd - winStart) + 1'
        max = Math.max(max, (winEnd - winStart) + 1);
    }

    // Return the final maximum length of the substring without repeating characters
    return max;
};