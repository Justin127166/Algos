// Given an array of elements

//  Ensure that the array is composed on only unique value
// Find the greatest distance between two values side by side. 


const largestDistance = (arr) => {
    const newSet = [...new Set(arr)];
    let distance = 0;
    let maxDistance;
    for(let i = 0; i < newSet.length -1; i++){
        let current = newSet[i]
        let next = newSet[i + 1]
        maxDistance = next - current

        distance = Math.max(maxDistance, distance)

    }
    return `Distance: ${distance}`
}


const arr = [111,222,333,222,444,333,555,444,667,666,777,888,999]
console.log(largestDistance(arr))