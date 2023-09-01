
//create a loop that reverses an input string
//reverse string using a for loop

function reverseString(str){
let resultStr = ""
for(var i = str.length -1; i >= 0; i--){
    resultStr += str[i];
}
return resultStr
}
console.log(reverseString("Reverse This String"))


//reverse string using for of loop
// function reverseStr(str){
// let resultStr = '';
// for(var char of str){
//     resultStr = char + resultStr;
// }
// return resultStr;
// }
// console.log(reverseStr('Reverse This String'))


// function reverseString(str){
//     let i = str.length -1
//     console.log(i)
//     let result = ""
//     while(i >= 0){
//         result += str[i]
//         i--;
//     }
//     return result;
// }
// console.log(reverseString(`Reverse String`))