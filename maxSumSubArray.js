const arr = [2,3,1,4,6,22,33,7,9,11];
const window = 3;

const maxSumSubArray = (arr, window) => {
  //create declare variables
  let maxSum = 0;
  let sum;
  const sumContainer = [];
  //loop through array using a for loop
  for(let i = 0; i < arr.length; i++){
    //push the current index elem to container
     sumContainer.push(arr[i])
     //if container length is the window length
    if(sumContainer.length === window){
      const reduceSum = 0;
      //get the sum of the container for every iteration
      sum = sumContainer.reduce((accum, curr) => accum + curr, reduceSum);
      //if sum is greater than maxSum reassign maxSum to equal sum
      if(sum > maxSum){
        maxSum = sum;
        console.log(sumContainer)
      }
      //remove the first element through every iteration
      sumContainer.shift()
    }
  }
  //return the maxSum
  return maxSum
}

console.log(maxSumSubArray(arr, window));