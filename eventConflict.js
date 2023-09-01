//the function conflictinfo takes in an Array with string type elements of times and durations
//the string elements are <time>,<duration>
//the function conflictInfo should check if the there is conflict between times, if no conflict return "Good"
//if there is conflict the function should return "Conflict, <total number of conflicts>, <total duration (min) of conflicts>"

//example1
//input = ["0800,45","0900,30"]
//output = "Good"

//example2
//input = ["0800,45","0830,30"]
//output = "Conflict,1,15"

// example3
// input = ["0800,45","1130,45","0830,30"]
// output = "Conflict,1,15"


function conflictInfo(meetings) {
    let index, current, next, arr
    const meetingsObj = {}
    const container = []
    let count = 0
    let conflictDuration = 0

    for(let i = 0; i < meetings.length; i++){
        index = meetings[i]
        arr = index.split(',')
        if(!meetingsObj[arr[0]]){
            const durationTime = addTime(arr[0], arr[1])
            meetingsObj[Number(arr[0])] = durationTime
        }
    }

    for(let key in meetingsObj){
        container.push(key,meetingsObj[key])
    }

    for(let i = 1; i < container.length; i++){
        current = Number(container[i])
        next = Number(container[i+1])

        if(current > next){
            count++
            // console.log(current, next)
            conflictDuration += (current - next)
            // console.log(conflictDuration)
        } else if (Number.isNaN(next)){
            break
        }
    }
    return conflictDuration === 0 ? console.log("Good") : console.log(`Conflict, ${count}, ${conflictDuration}`)
}

function addTime (time, duration){
    let hrs = time.substring(0,2)
    let min = time.substring(2,4).split('')
    let result;
    for(let i = 0; i < min.length; i++){
        min[i] = Number(min[i]) + Number(duration[i])
        const joinNum = min.join('')
        result = hrs+joinNum
    }
   return result
}

conflictInfo(["0800,45","0900,30"])
conflictInfo(["0800,45","0830,30"])
conflictInfo(["0800,45","1130,45","0830,30"])
conflictInfo(["0800,45","0810,45","1130,45","0830,30"])