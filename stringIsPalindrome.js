// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.
// Given a string s, return true if it is a palindrome, or false otherwise.

// Example 1:
// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.

// Example 2:
// Input: s = "race a car"
// Output: false
// Explanation: "raceacar" is not a palindrome.

// Example 3:
// Input: s = " "
// Output: true
// Explanation: s is an empty string "" after removing non-alphanumeric characters.
// Since an empty string reads the same forward and backward, it is a palindrome.

const isPalindrome = (s) => {
    // let newString = s.replaceAll(/[^a-zA-Z0-9 ]/g, '').replaceAll(' ', '').toLowerCase();
    let newString = s.replaceAll(/[^a-zA-Z0-9_]/g, '').toLowerCase()
    if(newString === ''){
        return true
    }
    for(let i = 0; i < newString.length/2; i++){
        let front = newString[i]
        let back = newString[newString.length -1 -i]
        // console.log(front, back)
        if(front !== back) return false
    }
    return true
};

console.log(isPalindrome('A man, a plan, a canal: Panama'))
console.log(isPalindrome('race a car'))
console.log(isPalindrome(' '))
console.log(isPalindrome('abb'))