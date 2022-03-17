// Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.
// The range will be an array of two numbers that will not necessarily be in numerical order.
// For example, if given 1 and 3, find the smallest common multiple of both 1 and 3 that is also evenly divisible by all numbers between 1 and 3. The answer here would be 6.

function smallestCommons(arr) {
  let tester =[]
  for (let i = Math.min(...arr);i<=Math.max(...arr);i++){
    tester.push(i)
  }

  for (let i = 1; i<=7056821; i++){
    // note you could use for the max value of i use a multiplication of all contents of tester: use reduce()
    if (tester.every(x=>i%x==0)){
      return (i)
    }
  }
}

smallestCommons([1,5]);
smallestCommons([5,1]);
smallestCommons([2,10]);
smallestCommons([1,13]);
smallestCommons([23,18]);
