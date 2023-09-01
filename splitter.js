// Write the splitter function that: 

// Takes in an array and a num
// returns an array of subarray of length num

// notes:

    // Subarrays cannot have a length of > num
    // sub array CAN have a length that is <= num

// function splitter(arr, num) {
//     // your code here
// //create empty array
// let result = [];

// //loop through array at 0 index; 
// for(var i = 0; i <= arr.length; i+= num){
//     result.push(arr.slice(i,num + i))
// }
// return result;
// }

// const arr = [1,2,3,4,5,6,7,8,9,10]
// const num = 2
// // should return [[1,2,3], [4,5,6], [7,8,9], [10]]
// console.log(splitter(arr, num))


function splitter(arr, num) {
    // your code here
//create empty array
let result = [];

//use for of loop to access elements of array
for(let elem of arr){
    //create var to reference las arr elem
    let lastArr = result[result.length-1];
    //if last result arr doesnt exist or length of arr elem is equal to num
    if(!lastArr || lastArr.length === num){
        //push element in an arr to result arr
        result.push([elem])
        // console.log(result)
    }else{
        //if there is one element then push the element on last arr
        lastArr.push(elem)
        // console.log(lastArr)
    }
}
//return result
return result;
}

const arr = [1,2,3,4,5,6,7,8,9,10]
const num = 3
// should return [[1,2,3], [4,5,6], [7,8,9], [10]]
console.log(splitter(arr, num))

