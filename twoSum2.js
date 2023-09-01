// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.

let arr = [2,7,14,15]
let target = 17

const twoSum = (arr, target) => {
let container = {};
for(let i = 0; i <= arr.length; i++){
    const current = arr[i];
    const needNum = target - current;
    const index = container[needNum];
    if(index != null){
        return [index, i]
    }else{
        container[current] = i
    }
}
};

console.log(twoSum(arr,target))