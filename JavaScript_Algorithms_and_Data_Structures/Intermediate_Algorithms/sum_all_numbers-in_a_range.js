// We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them. The lowest number will not always come first.
// For example, sumAll([4,1]) should return 10 because sum of all the numbers between 1 and 4 (both inclusive) is 10.


// Used Math.min and Math.max
function sumAll(arr) {
  let sum = 0
  for (let i=Math.min(...arr);i<Math.max(...arr)+1; i++){
  sum += i
}
  return(sum)
}

sumAll([1, 4])
sumAll([1, 4])
sumAll([4, 1])
sumAll([5, 10])
sumAll([10, 5])

// Alternative: solution with Math.Abs and arrow function
const sumAll = arr => {

  const startNum = arr[0];
  const endNum = arr[1];

  const numCount = Math.abs(startNum - endNum) + 1;
  // Alternatively use sort() on the arr

  // Using Arithmetic Progression summing formula
  const sum = ((startNum + endNum) * numCount) / 2;
  return sum;
};
