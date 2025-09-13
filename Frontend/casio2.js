function calculator(a, b, operation) {
  if (operation === "add") {
    return a + b;
  } 
  else if (operation === "subtract") {
    return a - b;
  } 
  else if (operation === "multiply") {
    return a * b;
  } 
  else if (operation === "divide") {
    if (b === 0) {
      return "Error: Cannot divide by zero";
    }
    return a / b;
  } 
  else {
    return "Error: Invalid operation";
  }
}

console.log("Add: " + calculator(10, 5, "add"));         
console.log("Subtract: " + calculator(10, 5, "subtract")); 
console.log("Multiply: " + calculator(10, 5, "multiply")); 
console.log("Divide: " + calculator(10, 0, "divide"));    