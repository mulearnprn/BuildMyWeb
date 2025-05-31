// Question 6: 
//Write a function named sumOrDifference that takes two numbers as parameters. If both are even, return their sum; if both are odd, return their difference 
//and if both are different return -1.

function sumOrDifference(x,y){
    if(x%2==0 && y%2==0){
        return x+y;
    }
    else if(x%2!=0 && y%2!=0){
        return x-y;
    }
    else{
        return -1
    }
}






//for testing outputs
console.log(sumOrDifference(2, 4)); 
// Expected Output: 6 (Even sum)
console.log(sumOrDifference(3, 5)); 
// Expected Output: -2 (Odd difference)
console.log(sumOrDifference(2, 3)); 
// Expected Output: -1 (One even, one odd)
