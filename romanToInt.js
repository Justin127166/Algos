//create a romanToInt function that takes in a string of roman numeral symbols
//function must convert symbol to value:
//symbol: I,V,X,L,C,D,M
//values: 1,5,10,50,100,500,1000

//function must return the value of roman numeral string input
//romanToInt("III") => 3
//romanToInt("IV") => 4

const romanToInt = (str) => {
    //create map
    const romanInt = new Map();
    //add key and value to map
    romanInt.set('I', 1);
    romanInt.set('V', 5);
    romanInt.set('X', 10);
    romanInt.set('L', 50);
    romanInt.set('C', 100);
    romanInt.set('D', 500);
    romanInt.set('M', 1000);
    //put string length in a var
    const strLength = str.length;
    //put num result in variable
    let num = romanInt.get(str[str.length - 1]);
        for (let i = strLength - 2; i >= 0; i--) {
        if (romanInt.get(str[i]) >= romanInt.get(str[i + 1])) {
            num += romanInt.get(str[i]);
        } else {
            num -= romanInt.get(str[i]);
        }
    }
    return num;
};

// console.log(romanToInt("III"));
console.log(romanToInt("IV"));
// console.log(romanToInt("IX"));
// console.log(romanToInt("LVIII"));
// console.log(romanToInt("MCMXCIV"));