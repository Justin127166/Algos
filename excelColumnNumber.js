// Given a string columnTitle that represents the column title as appears in an Excel sheet, return its corresponding column number.
// For example:
// A -> 1
// B -> 2
// C -> 3
// ...
// Z -> 26
// AA -> 27
// AB -> 28 
// ...

// Example 1:
// Input: columnTitle = "A"
// Output: 1

// Example 2:
// Input: columnTitle = "AB"
// Output: 28

// Example 3:
// Input: columnTitle = "ZY"
// Output: 701

const titleToNumber = (columnTitle) => {
    let result = 0;
    //create char array
    const charMap = new Map()
    const charArr = [...Array(26)].map((elem,i) => elem = String.fromCharCode(i + 65))
    //create char hashmap with values
    charArr.forEach((elem, i) => charMap.set(elem, (i+1)))
    //validate length fast return
    if(columnTitle.length < 2){
        //return the value of one char
        return charMap.get(columnTitle)
    }else{
        //else loop through char string
        for(let i = columnTitle.length -1, k = 0; i >= 0; i--, k++){
            const value = charMap.get(columnTitle[i])
            result += value * (26**k)
        }
    }
//return the result
// console.log(charMap)
return result;
}

console.log(titleToNumber("A"));
console.log(titleToNumber("AB"));
console.log(titleToNumber("ABA"));