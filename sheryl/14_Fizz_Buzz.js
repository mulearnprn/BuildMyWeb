 //Given an integer n, for every positive integer i <= n, the task is to print,

// “FizzBuzz” if i is divisible by 3 and 5,
// “Fizz” if i is divisible by 3,
// “Buzz” if i is divisible by 5
// “i” as a string(example : 7 as "7"), if none of the conditions are true.

/*Input: n = 3
Output: [“1”, “2”, “Fizz”]


Input: n = 10
Output: [“1”, “2”, “Fizz”, “4”, “Buzz”, “Fizz”, “7”, “8”, “Fizz”, “Buzz”]


Input: n = 20
Output: [“1”, “2”, “Fizz”, “4”, “Buzz”, “Fizz”, “7”, “8”, “Fizz”, “Buzz”, “11”, “Fizz”, “13”, “14”, “FizzBuzz”, “16”, “17”, “Fizz”, “19”, “Buzz”]
*/


function fizzBuzz(n) {
    //write code here  

    let result = [];
    for(let i = 1;i <= n;i++){
            if(i%3===0 && i%5===0){
            result.push("FizzBuzz");
             }
           else if (i%3 === 0){
            result.push("Fizz");
            }
            else if (i%5===0){
                result.push("Buzz");
                }
            else{
                result.push(i.toString()); 
            }
        }return result;
    }
  
  
  
  
  
  // Driver code
  let n = 20;
  let res = fizzBuzz(n);
  console.log(res.join(' '));
