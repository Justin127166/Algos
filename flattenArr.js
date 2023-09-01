//Take in an arr of arrays and numbers
//Goal is to flatten the arr so all primitive value are in one arr
//input => [1,2,[3,4],[5,[6,7]],8,9,[10]]
//output => [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const arr = [1,2,[3,4],[5,[6,7]],8,9,[10]]
const flatArray = (arr) => {
    let result = [];
    for(let i = 0; i < arr.length; i++){
        if(Array.isArray(arr[i])){
           let moreFlat = flatArray(arr[i])
           result = result.concat(moreFlat)
        }else{
            result.push(arr[i])
        }
    }
    return result;
}
console.log(flatArray(arr))