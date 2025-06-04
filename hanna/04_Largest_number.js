// Question 4: Write a function that finds and returns the largest number in an array.

function findLargestNumber(numbers) {
  let large=numbers[0];
  for(i=1;i<numbers.length;i++)
  {
    if (numbers[i]>large)
    {
        large=numbers[i];
    }
  }
  return large;
}

console.log(findLargestNumber([10, 20, 5, 8])); 
// Expected Output: 20
