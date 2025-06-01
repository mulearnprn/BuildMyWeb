// Question 4: Write a function that finds and returns the largest number in an array.

function findLargestNumber(numbers) {
  let a=numbers[0]
  for(let i=1;i<4;i++){
    if(numbers[i]>a){
        a=numbers[i]
    }
}
return(a)
}

console.log(findLargestNumber([10, 20, 5, 8])); 
// Expected Output: 20

