function add(a, b) {
  return a + b;
}

// Subtraction
function subtract(a, b) {
  return a - b;
}

// Multiplication
function multiply(a, b) {
  return a * b;
}

// Division
function divide(a, b) {
  if (b === 0) {
    return "Error: Cannot divide by zero";
  }
  return a / b;
}
// Example usage
console.log("Add: " + add(10, 0));         
console.log("Subtract: " + subtract(10, 5)); 
console.log("Multiply: " + multiply(10, 5)); 
console.log("Divide: " + divide(10, 0));     
