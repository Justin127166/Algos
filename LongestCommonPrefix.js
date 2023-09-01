// Write a function to find the longest common prefix string amongst an array of strings.
// If there is no common prefix, return an empty string "".

// Example 1:
// Input: strs = ["flower","flow","flight"]
// Output: "fl"

// Example 2:
// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.

//  @param {string[]} strs
//  @return {string}

let strs = ["flower","flow","flight"]
let strs1 = ["dog","racecar","car"]


const longestCommonPrefix = (strs) => {
    if(strs.length === 0){
        return '';
    }
    let prefix = strs[0]
    //loop through every word starting at index 1
    for(let i = 1; i < strs.length; i++){
        let currentWord = strs[i]
        //while current word doesnt have the prefix
        while(currentWord.indexOf(prefix) !== 0){
            //remove the last letter of the prefix until current word matches
            prefix = prefix.substring(0, prefix.length -1);
        }
    }
    return prefix
};
longestCommonPrefix(strs)
longestCommonPrefix(strs1)