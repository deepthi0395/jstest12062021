let matrix = [[0 ,1 ,  1 , 1] , [0, 0, 1, 1 ] ,[1 ,  1, 1, 1 ] , [0, 0, 0, 0 ] ];
let countArray = []
let count = 0  ;
for (let row of matrix){
    let ones = 0 
    for (let one of row){
        if(one === 1){
            ones += 1
        }
    
    }
    if (ones > count){
        count = ones
    }
    countArray.push(ones)
    
}

let maxIndex = countArray.indexOf(count)
console.log(maxIndex)