//create function to reverese arr
//you want to swap the front to end of each iteration
//for loop thru passed in arr to half the length
//reassign arr at i to the last element decremented by i
//reassign last element decremented by i to the arr at i

const arr = [1,2,3,4,5,6];
console.log(arr)
function reverseArr(arr){
    for(let i = 0; i < arr.length / 2; i++){
        [arr[i], arr[arr.length -1 -i]] = [arr[arr.length -1 -i], arr[i]];
    }
    return arr;
}
console.log(reverseArr(arr))


// const arr = [1,2,3,4,5,6]
// console.log(arr)
// const reverseArr = (arr) => {
//     for(let i = 0; i < arr.length / 2; i++){
//         let temp = arr[i]
//         arr[i] = arr[arr.length -1 -i]
//         arr[arr.length -1 -i] = temp
//     }
//     return arr;
// }

// console.log(reverseArr(arr))