// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.
// You must implement a solution with a linear runtime complexity and use only constant extra space.

// Example 1:
// Input: nums = [2,2,1]
// Output: 1

// Example 2:
// Input: nums = [4,1,2,1,2]
// Output: 4

// Example 3:
// Input: nums = [1]
// Output: 1

const singleNumber = (nums) => {
    let hash = {}
    let result;
    for(let i = 0; i < nums.length; i++){
        hash[nums[i]] = (hash[nums[i]] || 0)+1
    }
    for(let key in hash){
        if(hash[key] === 1){
            result = key
        }
    }

    console.log(Number(result))
};

singleNumber([2,2,1])
singleNumber([4,1,2,1,2])
singleNumber([1])