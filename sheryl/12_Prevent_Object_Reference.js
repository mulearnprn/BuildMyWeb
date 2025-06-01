function updateAge(person) {
    // Write code here
    let newPerson = {...person};

    newPerson.age += 5
    return newPerson;
  }
  
  
  const person1 = { name: "Alice", age: 30 };
  const updatedPerson = updateAge(person1);
 
  
  console.log(person1); 
  // Expected Output: { name: "Alice", age: 30 }  --> person1 should not change
  console.log(updatedPerson); 
  // Expected Output: { name: "Alice", age: 35 }  --> updatedPerson should have the modified age

