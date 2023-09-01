const arr = ['abc', 'cba', 'def', 'fed', 'edf']
// output: [['abc', 'cba'], ['def', 'fed', 'edf']]
// make function to map alphabet by numbers
const createHashMap = () => {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'
    const charArr = alphabet.split('')
    const hashMap = new Map()
    charArr.forEach((elem, i)=> {
        hashMap.set(elem, i + 1)
    });
    return hashMap
}
const groupAnagram = (arr) => {
    console.time('timer2')
    const hashAnagram = new Map()
    const result = []
    let currentNum
    arr.forEach(elem => {
        currentNum = createKey(elem)
        if(!hashAnagram.has(currentNum)){
            hashAnagram.set(currentNum, [elem])
        }else{
            const hashValue = hashAnagram.get(currentNum)
            hashValue.push(elem)
        }
    });
    const iterateMap = hashAnagram[Symbol.iterator]()
    for(const key of iterateMap ){
        const values = key[1]
        result.push(values)
    }
    console.log(result)
    console.timeLog('timer2')
    return result
}
const createKey = (str) => {
    const hash = createHashMap()
    let numKey = 0
    for(let i = 0; i < str.length; i++){
        numKey += hash.get(str[i])
    }
    return numKey
}
groupAnagram(arr)