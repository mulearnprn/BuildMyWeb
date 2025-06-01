function convertObjectToString(obj) {
    return JSON.stringify(obj);
  }
  
  function convertStringToObject(str) {
    return JSON.parse(str);D
  }
  
  const person = { name: "Alice", age: 30 };
  const personString = convertObjectToString(person); 
  console.log(personString); 
  // Expected Output: '{"name":"Alice","age":30}'
  
  const parsedPerson = convertStringToObject(personString);
  console.log(parsedPerson); 
  // Expected Output: { name: "Alice", age: 30 }
