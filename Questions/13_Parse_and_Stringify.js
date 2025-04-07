// Question 13: Write two functions:
// 1. `convertObjectToString` that takes an object and converts it to a JSON string and return.
// 2. `convertStringToObject` that takes a JSON string and converts it back into an object and return.

function convertObjectToString(obj) {
  // Write code here
}

function convertStringToObject(str) {
  // Write code here
}

const person = { name: "Alice", age: 30 };
const personString = convertObjectToString(person); 
console.log(personString); 
// Expected Output: '{"name":"Alice","age":30}'

const parsedPerson = convertStringToObject(personString);
console.log(parsedPerson); 
// Expected Output: { name: "Alice", age: 30 }
