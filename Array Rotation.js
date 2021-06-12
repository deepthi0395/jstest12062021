let array = [1 ,2 ,3 , 4, 5] ; 
let d = 2 ;
let n = 5; 

let rotateElements = function(){
    noOfRotations = d % n ;
    let firstPart = array.slice(0 , d) ; 
    let secondPart = array.slice(d , n) ; 
    let newArray = secondPart.concat(firstPart) ;
    newArray  = newArray.join(" ");
    console.log(newArray);
    
}


rotateElements(array , d , n )