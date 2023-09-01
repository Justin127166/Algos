//create a function that takes in an string
//output must console how many times an element is present

// example 1
//arguemnt => str = 'prop1 prop1 prop1 prop2 prop2'
//return => output = 
// {
//   prop1: 3,
//   prop2: 2
// }

// example 2
//arguemnt => str = '12387624563'
//return => output = 
// { 
//     '1': 1, 
//     '2': 2, 
//     '3': 2,
//     '4': 1, 			
//     '5': 1, 
//     '6': 2, 
//     '7': 1, 
//     '8': 1
// }

const frequencyCounter = (str) => {
    let obj = {};

    for(let i = 0; i < str.length; i++){
		let currentProp = str[i];
        obj[currentProp] = (obj[currentProp] || 0) + 1
    }
    return obj;
}
const str = '12387624563';
console.log(frequencyCounter(str));