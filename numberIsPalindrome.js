// Given an integer x, return true if x is a palindrome, and false otherwise.
//palidrome - a word, phrase, or sequence that reads the same backward as forward, e.g., madam or nurses run
//  @param {number} x
//  @return {boolean}

const x = 121;
const y = -121;
const z = 10;
 
const isPalindrome = (x) => {
    //if num is less than 0 retuen false
    if(x < 0){
        return false
    }
    //create empty string var
    let reversedNum = '';
    //turn numbers to strings to iterate
    let str = x.toString();
    //reverse iterate through variable string
    for(let i = str.length -1; i >= 0; i--){
        //add each element to empty str var
        reversedNum += str[i]
    }
    //after iterating turn into number
    let newNum = Number(reversedNum)
    //compare original number and reverse number and return boolean
    return newNum === x ? true : false;
};

console.log(isPalindrome(x))
console.log(isPalindrome(y))
console.log(isPalindrome(z))