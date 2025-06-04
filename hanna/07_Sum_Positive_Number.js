// Question 7: Write a function named sumPostitveArray which accepts a parameter
//If the array contains any negative numbers, return the sum of all positive numbers only.

function sumPositiveArray(numbers){
    let sum=0;
    for(i=0;i<numbers.length;i++)
    {
        if(numbers[i]>0)
        {
            sum+=numbers[i];
        }
    }
    return sum;
}





//for testing the output
console.log(sumPositiveArray([1, -2, 3, 4, -5])); 
// Expected Output: 8 (1 + 3 + 4)
console.log(sumPositiveArray([-1, -2, -3, -4])); 
// Expected Output: 0
