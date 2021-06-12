let array = [3, 3, 4, 2, 4, 4, 2, 4, 4] ; 
let arrayLength = array.length  ;
let uniqueEleArray = [];
for (let item of array) {
    let notRepetedEl = uniqueEleArray.includes(item)
    if(!notRepetedEl) {
        uniqueEleArray.push(item)
    }
}

let arrayCount = [];
for(let num of uniqueEleArray) {
    let nOf2Ele = array.length / 2 ; 
    let count = 0 ; 
    for(let item of array) {
        if (item === num){
            count += 1 
        }
    }
    
    if (count > nOf2Ele ){
        arrayCount.push(num)
    }
}

if(arrayCount.length === 0 ){
    console.log("No Majority Element")
}
else{
    console.log(arrayCount.join(" "))
}