// Given two strings s and t, return true if t is an anagram of s, and false otherwise.
// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

// Example 1:
// Input: s = "anagram", t = "nagaram"
// Output: true

// Example 2:
// Input: s = "rat", t = "car"
// Output: false


let s = "anagram"
let t = "nagaram"

var isAnagram = function(s, t) {
    console.time('test')
    if(s.length !== t.length){
        console.timeEnd('test')
        return false
    }

    const sContainer = {}
    const tContainer = {}

    for(let i = 0; i < s.length; i++){
        if(sContainer[s[i]] === undefined){
            sContainer[s[i]] = 1
        }else{
            sContainer[s[i]]++
        }
    }

    for(let j = 0; j < t.length; j++){
        if(tContainer[t[j]] === undefined){
            tContainer[t[j]] = 1
        }else{
            tContainer[t[j]]++
        }
    }

    for(let key in tContainer){
        if(!(tContainer[key] === sContainer[key])){
            return false
        }
    }
    console.timeEnd('test')
    return true
};

console.log(isAnagram(s, t))
console.log(isAnagram('ab', 'a'))
