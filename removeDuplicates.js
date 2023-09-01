
const removeDuplicates = (nums) => {
    let indexCounter = 0;
        for(let i = 0; i < nums.length; i++){
            if(nums[i] !== nums[i -1]){
                nums[indexCounter] = nums[i]
                indexCounter++
            }
        }
    return indexCounter
    };
    
    const nums = [1,1,2]
    const nums2 = [0,0,1,1,1,2,2,3,3,4]
    
    console.log(removeDuplicates(nums))
    console.log(removeDuplicates(nums2))