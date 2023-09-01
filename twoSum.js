// const arr = [1,2,3,4,5,6,7,8,9]
// // O(n^2) brute-force solution
// function twoSum(sum) {
//     for(let i = 0; i < arr.length; i++) {
//         for(let j = 1; j < arr.length; j++) {
//             if(arr[i] + arr[j] === sum) {
//                 return true
//             }
//         }
//     }
//     return false
// }   
// console.log(twoSum(9))
// Find a solution that uses only ONE for loop. This will make this an O(n) / linear runtime.

const arr = [1,2,3,4,5,6,7,8,9]

// O(n) linear solution
function twoSum(sum) {
    //create arr to push nums
    let numarr = [];
    //create var for current num and needed num
    let current, neededNum
    //for loop thru arr
    for (let i = 0; i < arr.length; i++) {
        //current will start at i
        current = arr[i];
        //needednum is reassigned to sum - current num at i
        neededNum = sum - current;
        //condition if needed num is passed push to num arr
        if(!numarr.includes(neededNum)){
            numarr.push(current);
        }else{
            //return true
            return true;
        }
    }
    //if the num needed is not passed return false
    return false;
  } 
console.log(twoSum(3))



// const arr = [1,9,3,5,4,2,6,5]

// const sum = 15

// function twoSum(sum, arr) {
//     // if two numbers in the input array add up to the given sum, return true
//     // otherwise, return false
//     const checkContainer = []
//     const sumNumbers = []
//     let current, neededNum
//     for(let i = 0; i < arr.length; i++){
//         current = arr[i]
//         neededNum = sum - current
//         if(!checkContainer.includes(neededNum)){
//             checkContainer.push(current)
//         }else{
//             sumNumbers.push(current, neededNum)
//             return `true [${sumNumbers}]`
//         }
//     }
// return false
// }

//     // return the two number that add up to a given sum.
//     // example: [9,6] [6,9]
// function twoSum2(sum, arr) {
//     const pastNums = {}
//     const pairsContainer = {}
//     let current, neededNum
//     for(let i = 0; i < arr.length; i++){
//         current = arr[i]
//         neededNum = sum - current
//         if(pastNums[neededNum]){
//             pairsContainer[i] = [current, neededNum]
//             return `true [${pairsContainer[i]}]`
//         }else{
//             pastNums[current] = current
//         }
//     }
//     return false
// }
// console.log(twoSum(sum, arr))
// console.log(twoSum(0, arr))
// console.log(twoSum(5, arr))
// console.log(twoSum(4, arr))
// console.log(twoSum(16, arr))