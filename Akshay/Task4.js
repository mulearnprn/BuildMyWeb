// Question 4: Write a function that finds and returns the largest number in an array.

function findLargestNumber(numbers) {
  let max=numbers[0];
  for(let i=1;i < numbers.length; i++){
    if (numbers[i] > max){
        max = numbers[i];
    }
  }
  return max;
}

console.log(findLargestNumber([10, 20, 5, 8])); 
// Expected Output: 20
