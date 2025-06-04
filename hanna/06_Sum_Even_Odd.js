// Question 6: 
//Write a function named sumOrDifference that takes two numbers as parameters. If both are even, return their sum; if both are odd, return their difference 
//and if both are different return -1.

// Write function here
function sumOrDifference(num1,num2){
    if (num1 %2 == 0 && num2 % 2 ==0)
    {
        return num1+num2;
    }
    else if (num1 % 2 != 0 && num2 % 2 != 0)
    {
        return num1-num2;
    }
    else
    {
        return -1;
    }
}





//for testing outputs
console.log(sumOrDifference(2, 4)); 
// Expected Output: 6 (Even sum)
console.log(sumOrDifference(3, 5)); 
// Expected Output: -2 (Odd difference)
console.log(sumOrDifference(2, 3)); 
// Expected Output: -1 (One even, one odd)
