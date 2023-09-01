let str = 'This is the longest word';

const getLongestWord = (str) => {
    const arr = str.split(' ');
    let result = '';

    for(let i = 0; i < arr.length; i++){
        let current = arr[i];
        if(current.length > result.length){
            result = arr[i]
        }
    }
    return result;
}

console.log(getLongestWord(str))