// Return the factorial of the provided integer.
//
// If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n.
//
// Factorials are often represented with the shorthand notation n!
//
// For example: 5! = 1 * 2 * 3 * 4 * 5 = 120
//
// Only integers greater than or equal to zero will be supplied to the function.

function factorialize(num) {
  let n = 1
  for (let i = num; i>0;i--){
    n*=i;
  }
  return n
}

 // Alternative: Recursion:
function factorialize(num) {
if (num === 0) {
  return 1;
}
return num * factorialize(num - 1);
}

// Alternative 2: Tail Recursion
function factorialize(num, factorial = 1) {
  if (num === 0) {
    return factorial;
  } else {
    return factorialize(num - 1, factorial * num);
  }
}

// Alternative 3:
