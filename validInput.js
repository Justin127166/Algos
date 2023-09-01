// assume you will take in a string

// '()' -> true, the number of opening and closing parens are balanced
// '(())' -> tue
// ')()' -> false - the opening and closing parens are not balanced.
// ')(' -> false

// should return a true or false depending on if the str is balanced.


// function validInput(str){
//     const container = [];
//     for(let i = 0; i < str.length; i++){
//         let first = str[0];
//         let current = str[i];
//         let end = str[str.length -1];
//         if(current.length % 2 === 0 || first === '(' && end === ')'){
//             return true;
//         }else{
//             return false;
//         }
//     }

// }

// console.log(validInput(str))

let str = '())';


function validInput(str){
const arr = [];
for(let char of str){
    if(char === '('){
        arr.push(char);
    }else if(arr.length === 0){
        return false;
    }else{
        arr.pop();
        console.log(arr)
    }
}
return arr.length === 0;
}

console.log(validInput(str))