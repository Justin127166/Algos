// % 3 === fizz
// % 5 === buzz
// % 5 && 3 === fizzBuzz

// Write and algo that tells me the number of fizzBuzzes between 1 and n.
// this should tell me the NUMBER of fizzbuzzes and give me an optional
// object showing the formatted fizzes, buzzes, and fizzBuzzes

// n = 15 => 1

// `There is 1 fizzBuzz between 1 and 15. Further data here: 
    // {
    // fizz: 4,
    // buzz: 2, 
    // fizzBuzz: 1
// }

function fizzBuzz(num) {
    let result = {
        fizz: 0,
        buzz: 0,
        fizzBuzz: 0
    }
for (let i = 0; i < num; i++){
    if(i % 3 === 0 && i % 5 === 0){
        result.fizzBuzz++;
    }else if(i % 3 === 0){
        result.fizz++;
    }else if(i % 5 === 0){
        result.buzz++;
    }
}
return result;
}

console.log(fizzBuzz(15))