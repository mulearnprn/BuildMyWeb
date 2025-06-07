// Question 7: Write a function named sumPostitveArray which accepts a parameter
//If the array contains any negative numbers, return the sum of all positive numbers only.

// Write function here
function sumPositiveArray(numbers){
    let sum=0;
    for(let i=0; i<numbers.length; i++){
        if(numbers[i]>0)
        {
            sum=sum+numbers[i];
        }
    }
    return sum;
}





//for testing the output
console.log(sumPositiveArray([1, -2, 3, 4, -5])); 
// Expected Output: 8 (1 + 3 + 4)
console.log(sumPositiveArray([-1, -2, -3, -4])); 
// Expected Output: 0
