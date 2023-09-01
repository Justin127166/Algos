// Given an input string s, reverse the order of the words.
// A word is defined as a sequence of non-space characters. The words in s will be separated by at least one space.
// Return a string of the words in reverse order concatenated by a single space.
// Note that s may contain leading or trailing spaces or multiple spaces between two words. The returned string should only have a single space separating the words. Do not include any extra spaces.

let str = "the sky is blue"
let str2 = "  hello world  "
let str3 = "a good   example"

function reverseWords (str) {
    //type code here
}
console.log(reverseWords(str))






//My Solution
// const reverseWords = (s) => {
//     const arr = s.split(' ');
//     let trash = []
//     let result = "";
//     for(let i = arr.length -1; i >= 0; i--){
//         if(arr[i] === ''){
//         trash.push(arr[i])
//         }else{
//             result += arr[i] + ' ';
//         }
//     }
//     return result.slice(0, -1);
// };