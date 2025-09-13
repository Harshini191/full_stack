function compoundInterest(principal, rate, time, n) {
  let r = rate / 100;

  
  let amount = principal * Math.pow((1 + r / n), n * time);


  let interest = amount - principal;

  return {
    finalAmount: amount.toFixed(2),
    compoundInterest: interest.toFixed(2)
  };
}

let result = compoundInterest(10000, 10, 2, 4); 

console.log("Final Amount: " + result.finalAmount);      
console.log("Compound Interest: " + result.compoundInterest); 