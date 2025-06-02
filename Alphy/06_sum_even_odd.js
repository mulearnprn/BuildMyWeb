// Question 6: 
//Write a function named sumOrDifference that takes two numbers as parameters. If both are even, return their sum; if both are odd, return their difference 
//and if both are different return -1.

// Write function here

function sumOrDifference(n1,n2){
    let s=0
    if(n1%2==0 && n2%2==0){
        s=n1+n2
    }
    else if(n1%2!==0 && n2%2!==0){
        s=n1-n2
    }
    else{
        s=-1
    }
    return(s)
}


//for testing outputs
console.log(sumOrDifference(2, 4)); 
// Expected Output: 6 (Even sum)
console.log(sumOrDifference(3, 5)); 
// Expected Output: -2 (Odd difference)
console.log(sumOrDifference(2, 3)); 
// Expected Output: -1 (One even, one odd)
